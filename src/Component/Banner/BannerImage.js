import React, { useEffect, useState } from 'react';
import justa from '../Assets/justa.webp';
import './BannerImage.css';
import { Link } from 'react-router-dom';
const BannerImage = () => {
    const [data, setData] = useState([]);
    const [moreDetail, setMoreDetail] = useState([]);
    const [slide, setSlide] = useState(0);


    useEffect(() => {
        fetch('http://localhost:4000/hollywood')
            .then((response) => response.json())
            .then((newData) => {
                setData(newData);
                console.log(newData);
                setMoreDetail(newData)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);



    const handleMoreDetail = (item) => {
        setMoreDetail(item)
        console.log("Clicked Item:", item);
    }
    return (
        <div className="container">
            <div className="banner-image">
                <img src={justa} alt="name" />
            </div>
            <h2>Top Sports Picks</h2>
            <div className={`image-banner`}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`image-slide ${index === slide ? 'active' : ''}`}>
                        <Link to={`/bannerImage/${item.id}`} onClick={() => handleMoreDetail(item)}>
                            <img src={item.image} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>

            {/* <button onClick={() => setSlide(slide + 1) % data.length}>Next</button>
            <button onClick={() => setSlide(slide - 1 + data.length) % data.length}>Prev</button> */}

        </div>
    );
};

export default BannerImage;


