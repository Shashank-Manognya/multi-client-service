import React, { useState } from 'react';

const BookingForm = () => {
  // State to track booking confirmation
  const [isBooked, setIsBooked] = useState(false);

  // Function to handle booking submission
  const handleBookService = (e) => {
    e.preventDefault();
    // Logic for booking service goes here
    // After the service is successfully booked, set isBooked to true
    setIsBooked(true);
  };

  return (
    <div>
      <h2>Book a Service</h2>
      
      <form onSubmit={handleBookService}>
        {/* Service booking form */}
        <div>
          <label>Service Name:</label>
          <input type="text" name="serviceName" required />
        </div>
        <div>
          <label>Your Name:</label>
          <input type="text" name="customerName" required />
        </div>
        <button type="submit">Book Service</button>
      </form>

      {/* Conditional rendering for the popup message */}
      {isBooked && (
        <div className="popup">
          <p>Service has been successfully booked!</p>
          <button onClick={() => setIsBooked(false)}>Close</button>
        </div>
      )}

      {/* Simple CSS for popup styling */}
      <style jsx>{`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          border: 1px solid #ccc;
          padding: 20px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
        .popup p {
          font-size: 18px;
        }
        .popup button {
          margin-top: 10px;
          padding: 5px 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default BookingForm;
