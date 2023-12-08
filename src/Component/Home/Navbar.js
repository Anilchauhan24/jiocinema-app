import React, { useState } from 'react'
import "./Navbar.css";
const Navbar = () => {
    const navbarData = ["Home ", "Services ", "Movies ", "About us "]



    return (
        <div className='container'>
            <main>
                <nav>
                    <div className='header'>
                        <h1>JioCinema</h1>
                        <button>Subscribe</button>
                    </div>
                    <ul>
                        <li>{navbarData}</li>
                    </ul>
                </nav>
            </main>
        </div>
    )
}

export default Navbar