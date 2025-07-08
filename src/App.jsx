import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/BarraDeNavegacion';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Footer from './components/Footer';
import Carrito from './components/Carrito';
import Contacto from './pages/Contacto';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
