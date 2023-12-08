import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import "./DisplayBollyDetails.css";

import BannerImage from "../Banner/BannerImage"



const DisplayBollyDetails = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/banner/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("API Response:", data);
                setDetail(data);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
            });
    }, [id]);


    return (
        <div >
            <Navbar />
            <h2>Movie Detail Page</h2>
            {detail && detail.length > 0 && (
                <>

                    <div className={`mainDiv ${detail.length >= 0 ? 'active' : ''}`}>
                        <div className="image-container">
                            <img src={detail[0].image_url} alt={detail[0].title} />
                            <div className="overlay">
                                <h3>{detail[0].title}</h3>
                                <ul>
                                    <li>{detail[0].lang}</li>
                                    <li>{detail[0].category}</li>
                                </ul>

                                <p>{detail[0].description}</p>
                            </div>
                        </div>



                    </div>
                </>
            )
            }
            <BannerImage />
        </div >
    );
};

export default DisplayBollyDetails;