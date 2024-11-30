import React, { useState } from 'react';
import './TrackingForm.css';

export const TrackingForm = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle tracking submission
  };

  return (
    <form className="tracking-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Ingresa el número de tu envío"
        className="tracking-form__input"
      />
      <button type="submit" className="tracking-form__button">
        Buscar
      </button>
    </form>
  );
};