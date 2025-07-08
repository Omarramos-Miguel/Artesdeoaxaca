
import React, { useState, useEffect } from 'react';
import "../styles/Carrito.css";

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productosConCantidad = productosEnCarrito.map(producto => ({
      ...producto,
      quantity: producto.quantity || 1,
    }));
    setCarrito(productosConCantidad);
  }, []);

  const actualizarLocalStorage = (nuevaLista) => {
    localStorage.setItem('carrito', JSON.stringify(nuevaLista));
  };

  const eliminarDelCarrito = (id, color) => {
    const nuevosProductos = carrito.filter(
      producto => !(producto.id === id && producto.color === color)
    );
    setCarrito(nuevosProductos);
    actualizarLocalStorage(nuevosProductos);
  };

  const aumentarCantidad = (id, color) => {
    const nuevosProductos = carrito.map(producto => {
      if (producto.id === id && producto.color === color) {
        return { ...producto, quantity: producto.quantity + 1 };
      }
      return producto;
    });
    setCarrito(nuevosProductos);
    actualizarLocalStorage(nuevosProductos);
  };

  const disminuirCantidad = (id, color) => {
    const nuevosProductos = carrito
      .map(producto => {
        if (producto.id === id && producto.color === color) {
          return { ...producto, quantity: producto.quantity - 1 };
        }
        return producto;
      })
      .filter(producto => producto.quantity > 0);
    setCarrito(nuevosProductos);
    actualizarLocalStorage(nuevosProductos);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem('carrito');
  };

  const handleCotizacion = (e) => {
    e.preventDefault();
    const productosCotizar = carrito.length > 0
      ? carrito.map(producto =>
          `Producto: ${producto.nombre} | Color: ${producto.color} | Cantidad: ${producto.quantity}`
        ).join('\n')
      : 'No hay productos en el carrito.';

    const emailBody = `
Nombre: ${nombre}
Correo: ${correo}
Mensaje: ${mensaje}

Productos a cotizar:
${productosCotizar}
    `;
    const mailtoLink = `mailto:artesaniastlacolula@gmail.com?subject=Cotización&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {carrito.map((producto, index) => (
              <li key={`${producto.id}-${producto.color || 'sincolor'}-${index}`}>
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="producto-info">
                  <h3>{producto.nombre}</h3>
                  {producto.color && (
                    <p>
                      <strong>Color:</strong> {producto.color}
                    </p>
                  )}

                  <div className="cantidad-controls">
                    <button onClick={() => disminuirCantidad(producto.id, producto.color)}>-</button>
                    <span>{producto.quantity}</span>
                    <button onClick={() => aumentarCantidad(producto.id, producto.color)}>+</button>
                  </div>
                </div>

                <button onClick={() => eliminarDelCarrito(producto.id, producto.color)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <button onClick={vaciarCarrito} className="vaciar-carrito">
            Vaciar carrito
          </button>

          <div className="formulario-cotizacion">
            <h2>Solicitar Cotización</h2>
            <form onSubmit={handleCotizacion}>
              <div>
                <label>Nombre</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Correo electrónico</label>
                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Mensaje</label>
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Enviar cotización</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}