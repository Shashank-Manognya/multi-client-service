// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Service Platform</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/book">Book a Service</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
