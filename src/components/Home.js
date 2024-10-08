// src/components/Home.js

import React from 'react';
import './Home.css';
import backgroundImage from '../assets/kal.jpg'; // Import the image

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="thread"></div> {/* Add thread div for the effect */}
            <h1 className="welcome-text">Welcome to Smart City App</h1> {/* Apply the animated class */}
            
        </div>
    );
};

export default Home;
