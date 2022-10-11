import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import 'bootstrap/dist/js/bootstrap';
import { useEffect } from 'react';

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    document
      .querySelectorAll('.nav-link')
      .forEach((nav) => nav.classList.remove('active'));

    switch (location.pathname) {
      case '/':
        document.querySelector('.home').classList.add('active');
        break;
      case '/agents':
        document.querySelector('.agents').classList.add('active');
        break;
      case '/maps':
        document.querySelector('.maps').classList.add('active');
        break;
      case '/weapons':
        document.querySelector('.weapons').classList.add('active');
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md">
      <Link to="/" className="navbar-brand brand">
        <img
          className="logo brand"
          src="https://images.hdqwalls.com/download/valorant-game-logo-4k-wi-2048x2048.jpg"
          alt="valorant logo"
        />
        <p className="mb-0 brand">Valorant</p>
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
            <Link to="/" className="nav-link home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/agents" className="nav-link agents">
              Agents
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/maps" className="nav-link maps">
              Maps
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/weapons" className="nav-link weapons">
              Weapons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
