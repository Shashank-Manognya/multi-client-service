// src/components/RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',  // default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can integrate API for registration here
    console.log(formData);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        
        <label>Role:</label>
        <select name="role" onChange={handleChange}>
          <option value="user">User</option>
          <option value="service-provider">Service Provider</option>
        </select>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
