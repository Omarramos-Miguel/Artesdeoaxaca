import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>Acerca de Nosotros</h4>
          <p>
            Somos una tienda de artesanías oaxaqueñas dedicada a rescatar y difundir el arte y la tradición.
          </p>
        </div>
        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=5219514665598&text=Hola%20quisiera%20hacer%20una%20cotización.">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-col">
  <h4>Redes Sociales</h4>
  <ul className="social-links">
    <li>
      <a
        href="https://www.instagram.com/artesdeoaxaca.mx/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/imagenes/instragram2.png" alt="Instagram" />
      </a>
    </li>
    <li>
      <a
        href="https://www.tiktok.com/@artesdeoaxaca"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/imagenes/tiktok.png" alt="TikTok" />
      </a>
    </li>
    <li>
      <a
        href="https://www.facebook.com/ArtesaniasTlacolula"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/imagenes/facebook.png" alt="Facebook" />
      </a>
    </li>
  </ul>
</div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Artesanías Oaxaqueñas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
