// src/components/Contact.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Contact.css';

// Importing images directly
import vizagImage from '../assets/vizag.jpg';
import vijayawadaImage from '../assets/vijayawada.jpg';
import gunturImage from '../assets/guntur.jpg';
import tirupatiImage from '../assets/tirupati.jpg';
import rajahmundryImage from '../assets/rajmundary.jpg';

const citiesInAP = [
  { name: 'Visakhapatnam', image: vizagImage, id: 'vizag' },
  { name: 'Vijayawada', image: vijayawadaImage, id: 'vijayawada' },
  { name: 'Guntur', image: gunturImage, id: 'guntur' },
  { name: 'Tirupati', image: tirupatiImage, id: 'tirupati' },
  { name: 'Rajahmundry', image: rajahmundryImage, id: 'rajahmundry' },
  // Add more cities as needed
];

const Contact = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCities = citiesInAP.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-container">
      <h2>Cities in Andhra Pradesh</h2>
      <input
        type="text"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="cities-list">
        {filteredCities.length > 0 ? (
          filteredCities.map((city, index) => (
            <div className="city-card" key={index}>
              <Link to={`/city/${city.id}`}> {/* Link to city details page */}
                <img src={city.image} alt={city.name} className="city-image" />
                <h3>{city.name}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>No cities found</p>
        )}
      </div>
    </div>
  );
};

export default Contact;