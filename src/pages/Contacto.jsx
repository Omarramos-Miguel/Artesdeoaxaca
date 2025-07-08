import React from 'react';
import './Contacto.css';

export default function Contacto() {
  return (
    <div className="contacto-container">
      <div className="contacto-caja">
        <h1 className="contacto-titulo">Contáctanos</h1>
        <p className="contacto-subtitulo">¿Tienes dudas, pedidos o sugerencias? ¡Estamos para ayudarte!</p>

        <form
          className="contacto-formulario"
          action="https://formspree.io/f/meokblpn"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:5173/gracias" />

          <input type="text" name="name" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Tu correo electrónico" required />
          <textarea name="message" placeholder="Escribe tu mensaje aquí..." required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>

        <div className="contacto-info">
          <h2>También puedes escribirnos:</h2>
          <p><strong>WhatsApp:</strong> <a href="https://wa.link/3ga1vw" target="_blank" rel="noreferrer">Enviar mensaje</a></p>
          <p><strong>Correo:</strong> artetlaco36a@yahoo.com</p>
          <p><strong>Ubicación:</strong> Av Juarez #36, Tlacolula de Matamoros, Oaxaca</p>
        </div>
        <img className="logo-contacto" src="/imagenes/Logo-artes2.svg" alt="Logo Artes de Oaxaca" />

      </div>
    </div>
  );
}

