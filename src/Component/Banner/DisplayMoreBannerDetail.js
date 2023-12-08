import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./DisplayMoreBannerDetail.css";
import Navbar from '../Home/Navbar';

const DisplayMoreBannerDetail = () => {
    const { id } = useParams();
    const [banItem, setBanItem] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:4000/hollywood/${id}`)
            .then((res) => res.json())
            .then((dataItem) => {
                setBanItem(dataItem);
                console.log(dataItem);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])



    return (
        <div>
            {loading ? (<p>Loading...</p>) : (
                <div>
                    <Navbar />
                    <h2>Display More Banner Detail</h2>
                    {banItem && banItem.length > 0 && (
                        <>
                            <div className='displayBanners'>
                                <img src={banItem[0].image} />
                                <button>{banItem[0].movie_type}</button>


                                <div className='displayBannersItem'>
                                    <h3>Title:{banItem[0].title}</h3>
                                    <video width="340" height="360" controls>
                                        <source src={banItem[0].url} type="video/mp4" />
                                    </video>
                                    <span>Duration:{banItem[0].time}</span>
                                    <span>Year:{banItem[0].year}</span>
                                    <p>Cast:{banItem[0].cast}</p>
                                </div>

                            </div>


                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default DisplayMoreBannerDetail;