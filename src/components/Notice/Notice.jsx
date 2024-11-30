import React from 'react';
import './Notice.css';
import packageIcon from '../../assets/package-icon.png';

export const Notice = () => {
  return (
    <div className="notice">
      <div className="notice__header">
        AVISO <span className="notice__info-icon">ⓘ</span>
      </div>
      <div className="notice__content">
        <div className="notice__text">
          <p>Existen envíos clasificados como ordinarios o económicos según la normativa de la UPU, y no cuentan con trazabilidad o seguimiento en línea.</p>
          <p>Estos envíos utilizan los siguientes prefijos:</p>
          <ul>
            <li>ULxxxxxx</li>
            <li>UAxxxxxx</li>
            <li>LPxxxxxx</li>
            <li>LCxxxxxx</li>
            <li>LHxxxxxx</li>
          </ul>
        </div>
        <img src={packageIcon} alt="" className="notice__icon" />
      </div>
    </div>
  );
};