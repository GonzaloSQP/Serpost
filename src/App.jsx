import React from 'react';
import { Header } from './components/Header/Header';
import { TrackingForm } from './components/TrackingForm/TrackingForm';
import { Notice } from './components/Notice/Notice';
import { Promo } from './components/Promo/Promo';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="breadcrumb">
          <span>Inicio</span>
          <span className="breadcrumb__separator">›</span>
          <span>Seguimiento</span>
        </div>
        <h1 className="title">Seguimiento en Línea</h1>
        <TrackingForm />
        <Notice />
        <Promo />
      </main>
    </div>
  );
}

export default App;