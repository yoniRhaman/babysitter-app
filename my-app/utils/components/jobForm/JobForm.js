import React, { useState } from 'react';

const JobForm = () => {
  // Set up state for the form fields
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10)); // Default to today's date
  const [rate, setRate] = useState(20); // Default rate, can be adjusted based on babysitter or parent profile
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission,
    // such as sending data to an API or updating the state.
    console.log({ date, rate, description });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
      <h2>Add Job</h2>
      
      {/* Date Input */}
      <label htmlFor="date">Date:</label>
      <input 
        type="date" 
        id="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        style={{ marginBottom: '10px' }} 
      />

      {/* Rate Input */}
      <label htmlFor="rate">Rate ($):</label>
      <input 
        type="number" 
        id="rate" 
        value={rate} 
        onChange={(e) => setRate(e.target.value)} 
        style={{ marginBottom: '10px' }} 
      />

      {/* Description Input */}
      <label htmlFor="description">Job Description:</label>
      <textarea 
        id="description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        style={{ marginBottom: '10px' }} 
      />

      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
