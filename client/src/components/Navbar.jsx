import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/assets/LogoBelahceneVictor/2.png" alt="Victor Logo" className="navbar-logo-img" />
        </Link>
      </div>

      {/* Liens sociaux */}
      <ul className="navbar-socials">
        <li>
          <a href="https://github.com/Bvictor7" target="_blank" rel="noopener noreferrer" className="social-icon">
            GitHub
          </a>
        </li>
      </ul>

      {/* Liens de navigation */}
      <div className="navbar-links">
        <Link to="/Register" className="navbar-link">Enregistrement</Link>
        <Link to="/Login" className="navbar-link">Connexion</Link>
        <Link to="/Dashboard" className="navbar-link">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;




