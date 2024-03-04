import React from 'react';
import ResumenActividad from './ResumenActividad';
import EstadisticasClave from './EstadisticasClave';
import PerfilNegocio from './PerfilNegocio';

import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard de Negocio</h1>
      <div className="dashboard-section">
        <ResumenActividad />
      </div>
      <div className="dashboard-section">
        <EstadisticasClave />
      </div>
      {/* <div className="dashboard-section">
        <GestionReservas />
      </div> */}
      {/* <div className="dashboard-section">
        <GestionProductos />
      </div> */}
      <div className="dashboard-section">
        <PerfilNegocio />
      </div>
      {/* <div className="dashboard-section">
        <AyudaSoporte />
      </div> */}
    </div>
  );
};

export default Dashboard;
