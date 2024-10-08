// src/components/Register.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Username:", username, "Email:", email, "Password:", password, "Contact:", contact);
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />
          </div>
          <button type="submit">Register</button>
          <div className="redirect-link">
            Already signed in? <Link to="/login">Login</Link> {/* Link to Login page */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
