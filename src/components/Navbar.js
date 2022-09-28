import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import 'bootstrap/dist/js/bootstrap';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.nav-link, .navbar-brand');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const active = document.querySelector('.active');
        active.classList.remove('active');
        e.target.classList.contains('nav-link')
          ? e.target.classList.add('active')
          : document.querySelector('.home').classList.add('active');
      });
    });
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md">
      <Link to="/" className="navbar-brand">
        <img
          className="logo"
          src="https://images.hdqwalls.com/download/valorant-game-logo-4k-wi-2048x2048.jpg"
          alt="valorant logo"
        />
        <p className="mb-0">Valorant</p>
      </Link>
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navCollapse" className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto d-flex gap-5">
          <li className="nav-item">
            <Link to="/" className="home nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/agents" className="nav-link">
              Agents
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/maps" className="nav-link">
              Maps
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/weapons" className="nav-link">
              Weapons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
