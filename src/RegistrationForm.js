import React from 'react';

function RegistrationForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="registration-form">
      <label>
        FullName:
        <input type="text" name="fullName" required />
      </label>
      <label>
        Email Address:
        <input type="email" name="email" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;

