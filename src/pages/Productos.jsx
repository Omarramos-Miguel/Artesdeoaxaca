import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productos from '../data/productos';
import '../styles/Productos.css';

export default function Productos() {
  const ProductoCard = ({ producto }) => {
    const hasColores = producto.colores && producto.colores.length > 0;
    const images = hasColores ? producto.colores.map(c => c.imagen) : [producto.imagen];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
    };

    const prevImage = () => {
      const newIndex = (currentImageIndex - 1 + images.length) % images.length;
      setCurrentImageIndex(newIndex);
    };

    return (
      <div className="producto">
        <div className="carousel">
          {images.length > 1 && <button className="nav-btn" onClick={prevImage}>{"<"}</button>}
          <img src={images[currentImageIndex]} alt={producto.nombre} />
          {images.length > 1 && <button className="nav-btn" onClick={nextImage}>{">"}</button>}
        </div>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
      </div>
    );
  };

  return (
    <div className="productos">
      <div className='carrito-cont'>
        <h2>Nuestro Catálogo</h2>
        {/* Puedes eliminar esto si ya no quieres ícono de carrito */}
        {/* <Link to="/carrito">
          <img
            src="/imagenes/carrito.png"
            alt="Ver carrito"
            className="icono-carrito"
          />
        </Link> */}
      </div>
      <div className="lista-productos">
        {productos.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
