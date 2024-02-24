import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setIsFormValid(event.target.value !== '' && lastName !== '');
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setIsFormValid(firstName !== '' && event.target.value !== '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <button type="submit" disabled={!isFormValid}>Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
