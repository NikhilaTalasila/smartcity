// src/components/CityDetails.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the city ID
import './CityDetails.css'; // Import CSS for styling

// Data object for city details with images
const cityData = {
  vizag: {
    name: 'Visakhapatnam',
    details: {
      transport: {
        description: 'Buses, Trains, and Cabs available.',
        image: require('../assets/transport.jpg'), // Add transport image
      },
      temples: {
        description: 'ISKCON Temple, Simhachalam Temple.',
        image: require('../assets/temples.jpg'), // Add temple image
      },
      restaurants: {
        description: 'The Fisherman’s Wharf, Dakshin, etc.',
        image: require('../assets/restaurants.jpg'), // Add restaurant image
      },
      shopping: {
        description: 'CMR Shopping Mall, Esca Mall.',
        image: require('../assets/shopping.jpg'), // Add shopping image
      },
      beautyParlours: {
        description: 'Shine Beauty Salon, Glamour Saloon.',
        image: require('../assets/beauty.jpeg'), // Add beauty parlour image
      },
    },
  },
  // Add details for other cities similarly
};

const CityDetails = () => {
  const { id } = useParams(); // Get the city ID from the URL
  const city = cityData[id]; // Get the city data based on the ID
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the details based on the search term
  const filteredDetails = Object.entries(city.details).filter(([key, value]) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()) ||
    value.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!city) {
    return <h2>City not found</h2>;
  }

  return (
    <div className="city-details">
      <h2>{city.name}</h2>
      <input
        type="text"
        placeholder="Search amenities..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="details-container">
        {filteredDetails.length > 0 ? (
          filteredDetails.map(([key, detail], index) => (
            <div className="detail-card" key={index}>
              <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3> {/* Capitalize the key */}
              <img src={detail.image} alt={key} className="detail-image" />
              <p>{detail.description}</p>
            </div>
          ))
        ) : (
          <p>No amenities found for the search term.</p>
        )}
      </div>
    </div>
  );
};

export default CityDetails;