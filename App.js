// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import routing components

// Import custom components
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import RegistrationForm from './RegistrationForm';
import ServiceList from './ServiceList';
import BookingForm from './BookingForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Global Header */}

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />                {/* Home page route */}
            <Route path="/register" element={<RegistrationForm />} /> {/* Registration page route */}
            <Route path="/services" element={<ServiceList />} />      {/* Services page route */}
            <Route path="/book" element={<BookingForm />} />          {/* Booking page route */}
          </Routes>
        </main>

        <Footer /> {/* Global Footer */}
      </div>
    </Router>
  );
}

export default App;
