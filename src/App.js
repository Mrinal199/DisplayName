import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFirstNameError('');
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setLastNameError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName === '' || lastName === '') {
      if (firstName === '') {
        setFirstNameError('Please fill out this field.');
      }
      if (lastName === '') {
        setLastNameError('Please fill out this field.');
      }
      return;
    }
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
          {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;