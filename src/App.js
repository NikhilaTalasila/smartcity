// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register'; 
import Home from './components/Home';
import Contact from './components/Contact';
import CityDetails from './components/CityDetails'; // Import CityDetails

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/city/:id" element={<CityDetails />} /> {/* New route for city details */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;