import React from 'react';
import Navbar from './Navbar';
import Banner from '../Banner/Banner';
import BannerImage from '../Banner/BannerImage';
import Bollywood from '../Bollywood/Bollywood';
import ShivComponent from '../Shiv/ShivComponent';
import "./Home.css";
function Home() {
    return (
        <div className='home'><Navbar />
            <Banner />
            <BannerImage />
            <Bollywood />
            <ShivComponent />
        </div>
    )
}

export default Home;