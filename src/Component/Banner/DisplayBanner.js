import React, { useState } from 'react';
import "./DisplayBanner.css";
import { Link } from "react-router-dom";
const DisplayBanner = (props) => {
    const { showBannerData } = props;

    const [currentSlide, setCurrentSlide] = useState(0);

    // const handlePrevSlide = () => {
    //     setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : showBannerData.length - 1));
    // };

    // const handleNextSlide = () => {
    //     setCurrentSlide((prevSlide) => (prevSlide < showBannerData.length - 1 ? prevSlide + 1 : 0));
    // };


    const getData = ({ showBannerData }) => {
        if (showBannerData) {
            console.log(showBannerData)
            return showBannerData.map((item, index) => {
                return (
                    <div className='allbannerItems'>
                        <div className={`imageContainer ${index === currentSlide ? 'active' : ''}`}   >
                            <Link to={item.watch}>
                                <img src={item.image_url} alt={item.title} />
                            </Link>
                        </div>
                        {/* <button onClick={handleNextSlide}>Next</button>
                        <button onClick={handlePrevSlide}>Prev</button> */}
                    </div>
                )
            })
        }
    }
    return (
        <div className='imageprop'>{getData(props)}</div>
    )
}

export default DisplayBanner;