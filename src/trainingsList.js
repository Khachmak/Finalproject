
import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

function TrainingsList({ trainings, setIsRegistrationFormOpen }) {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(true);
    setShowThankYou(false);
    setIsRegistrationFormOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
    setShowThankYou(true);
    setIsRegistrationFormOpen(true);
  };

  if (showThankYou) {
    return <div className="thank-you-message">Thank you for your registration!</div>;
  }

  if (showForm) {
    return <RegistrationForm onSubmit={handleFormSubmit} />;
  }

  if (trainings.length === 0) {
    return <div className="no-trainings-message">No training found based on your search criteria.</div>;
  }

  return (
    <div className="trainings-list">
      {trainings.map((training) => (
        <div key={training.id} className="training-item">
          <h3>{training.title}</h3>
          <p>Location: {training.location}</p>
          <p>Duration: {training.duration}</p>
          <p>Provider: {training.provider}</p>
          <p>Rank: {training.recommendedRanks}</p>
          <button type="button" onClick={handleRegisterClick} className="register-button">Register</button>
        </div>
      ))}
    </div>
  );
}

export default TrainingsList;

