/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const [data, setData]=useState([])
    useEffect(() => {
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[])
    const handleSelect = (data) =>{
        console.log(data);
    }
// console.log(setData);




    return (
        
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                 {
                    data.map(data => (
                        <div key={data.id} className="card">
                        <div className="card-img">
                            <img className='photo' src={data.image_url} alt="" />
                        </div>
                        <h2>{data.name}</h2>
                        <p><small>{data.description}</small></p>
                        <div className="info">
                            <p>Price: {data.price}</p>
                            <p>Credit:  {data.credit}hrs</p>
                        </div>
                        <button onClick={()=> handleSelect(data)} className='card-btn'>Select</button>
                        
                    </div>
                    ))
                 }
                </div>
                <div className="cart">
                    <h1>Course Name</h1>
                </div>
            </div>
            {/* <h1>Welcome to Midgenaration</h1> */}
            <Cart></Cart>
        </div>
    );
};

export default Home;