// src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS for styling

const HomePage = () => {
  // Array of popular services (You can replace this with dynamic data from a backend)
  const popularServices = [
    { id: 1, name: 'Plumbing', description: 'Expert plumbing services to fix your leaks.' },
    { id: 2, name: 'Carpentry', description: 'Skilled carpenters for all your woodworking needs.' },
    { id: 3, name: 'Electrical', description: 'Certified electricians for home or office.' },
    { id: 4, name: 'Painting', description: 'Professional painters for residential and commercial jobs.' },
    { id: 5, name: 'Cleaning', description: 'Top-notch cleaning services for your space.' },
  ];

  return (
    <section>
      <h2>Welcome to the Multi-client Service Platform</h2>
      <p>Find the best service providers in your area!</p>

      <div className="services-container">
        <h3>Popular Services</h3>
        <ul className="services-list">
          {popularServices.map(service => (
            <li key={service.id} className="service-card">
              <h4>{service.name}</h4>
              <p>{service.description}</p>
              <button className="book-btn">Book Now</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
