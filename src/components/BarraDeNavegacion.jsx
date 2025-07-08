import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Barra.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar-contenedor">
      <div className="navbar">
        <Link
          to="/"
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          INICIO
        </Link>
        <Link
          to="/productos"
          className={`nav-item ${location.pathname === '/productos' ? 'active' : ''}`}
        >
          PRODUCTOS
        </Link>
        <Link
          to="/contacto"
          className={`nav-item ${location.pathname === '/contacto' ? 'active' : ''}`}
        >
          CONTACTO
        </Link>
      </div>
      <div className="image-with-lines">
        <div className="line"></div>
        <img src="/imagenes/Logo-artes2.svg" alt="Imagen decorativa" />
        <div className="line"></div>
      </div>
    </nav>
  );
}
