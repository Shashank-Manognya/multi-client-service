// src/components/ServiceList.js
import React, { useState, useEffect } from 'react';
import './ServiceList.css';  // Import the CSS file

const ServiceList = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Plumbing Service',
      description: 'Expert plumbing solutions for all your needs.',
    },
    {
      id: 2,
      name: 'Electrical Service',
      description: 'Reliable electrical repairs and installations.',
    },
    {
      id: 3,
      name: 'Cleaning Service',
      description: 'Professional cleaning services for homes and offices.',
    },
    {
      id: 4,
      name: 'Carpentry Service',
      description: 'Custom carpentry and woodworking services.',
    },
  ]);

  useEffect(() => {
    // Fetch services from the API
    async function fetchServices() {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    }
    fetchServices();
  }, []);

  return (
    <div className="service-list-container"> {/* Add class name here */}
      <h2>Available Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong> - {service.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
