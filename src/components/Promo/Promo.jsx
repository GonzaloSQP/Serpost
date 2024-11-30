import React from 'react';
import './Promo.css';
import deliveryMan from '../../assets/delivery-man.png';
import expresoLogo from '../../assets/expreso-logo.png';

export const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__content">
        <img src={deliveryMan} alt="" className="promo__delivery-man" />
        <img src={expresoLogo} alt="Servicio Expreso Internacional" className="promo__logo" />
        <div className="promo__text">
          <p>Llegamos a más de 190 países con las tarifas más económicas.</p>
          <p>Hazle seguimiento a tus envíos.</p>
        </div>
      </div>
    </div>
  );
};