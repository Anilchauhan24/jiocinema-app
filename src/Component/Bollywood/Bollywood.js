import React, { useEffect, useState } from 'react';
import "./Bollywood.css";
import { Link } from 'react-router-dom';
function Bollywood() {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/banner")
            .then((res) => res.json())
            .then((findData) => {
                setData(findData)
                console.log(findData)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);


    const handleItemClick = (item) => {

        setData(item)

    }
    return (
        <div className='container'>

            <h2 style={{ color: '#fff' }}>English Blockbusters In Hindi</h2>
            <div className='bollywood'>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link to={`/bollywood/${item.id}`} onClick={() => handleItemClick(item)}><img src={item.image_url} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Bollywood