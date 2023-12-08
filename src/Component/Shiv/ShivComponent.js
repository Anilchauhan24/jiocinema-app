
import React, { useEffect, useState } from "react";
import "./ShivComponent.css";
const ShivComponent = () => {

    const [shivData, setShivData] = useState([])
    const [loading, setLoading] = useState(false)
    const [newSlide, setNewSlide] = useState(0)
    useEffect(() => {

        const getData = async () => {
            try {
                const res = await fetch("http://localhost:4000/shivg");
                const data = await res.json();
                setShivData(data);
                console.log(data)
            }
            catch (err) {
                console.log(err)
                setLoading(true)
            }
        }
        getData();
    }, [])



    const handleNextSlide = () => {
        setNewSlide((newSlide + 1) % shivData.length)
    }


    const handlePrevSlide = () => {
        setNewSlide((newSlide - 1 + shivData.length) % shivData.length)
    }
    return (
        <>
            {loading ? (<p>Fetching data.....</p>) : (
                <div className="shiv-images">
                    <h2 style={{ color: "#fff" }}>Hello Anil</h2>
                    {shivData.map((items, index) => (
                        <div key={index} className={`slide ${index === newSlide ? "active" : ""}`} >
                            <img src={items.image} alt={items.title} />
                        </div>
                    ))}
                </div>
            )}
            <div>
                <button onClick={handleNextSlide}>nEXT</button>
                <button onClick={handlePrevSlide}>pREV</button>
            </div>
        </>
    )
}

export default ShivComponent;


// import React, { useEffect, useState } from "react";
// import "./ShivComponent.css";

// const ShivComponent = () => {
//     const [shivData, setShivData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [newSlide, setNewSlide] = useState(0);

//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const res = await fetch("http://localhost:4000/shivg");
//                 const data = await res.json();
//                 setShivData(data);
//             } catch (err) {
//                 console.log(err);
//                 setLoading(true);
//             }
//         };

//         getData();
//     }, []);

//     const slideStyle = {
//         transform: `translateX(-${newSlide * 100}%)`,
//         transition: "transform 0.5s ease-in-out",
//         display: "flex",
//         width: `${shivData.length * 100}%`,
//     };

//     return (
//         <>
//             {loading ? (
//                 <p>Fetching data.....</p>
//             ) : (
//                 <div className="shiv-images">
//                     <h2 style={{ color: "#fff" }}>Hello Anil</h2>
//                     <div className="slides-container" style={slideStyle}>
//                         {shivData.map((items, index) => (
//                             <div key={index} className="slide">
//                                 <img src={items.image} alt={items.title} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//             <div>
//                 <button onClick={() => setNewSlide((newSlide + 1) % shivData.length)}>
//                     NEXT
//                 </button>
//                 <button
//                     onClick={() =>
//                         setNewSlide((newSlide - 1 + shivData.length) % shivData.length)
//                     }
//                 >
//                     PREV
//                 </button>
//             </div>
//         </>
//     );
// };

// export default ShivComponent;
