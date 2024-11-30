import React from 'react';
import { FiMenu, FiSearch, FiMoreVertical } from 'react-icons/fi';
import logo from '../../assets/serpost-logo.png';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <button className="header__menu-btn">
          <FiMenu size={24} />
        </button>
        
        <img 
          src={logo} 
          alt="Serpost - El Correo del Perú" 
          className="header__logo"
        />

        <div className="header__actions">
          <button className="header__action-btn">
            <FiSearch size={24} />
          </button>
          <button className="header__action-btn">
            <FiMoreVertical size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};