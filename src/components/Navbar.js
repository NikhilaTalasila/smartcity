// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you're importing the CSS

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Smart City Application</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li> {/* Link to Home page */}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/contact">Cities</Link></li> {/* Link to Contact page */}
            </ul>
        </nav>
    );
};

export default Navbar;
