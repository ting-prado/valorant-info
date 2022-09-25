import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md">
      <Link to={'/'} className="navbar-brand">
        Valorant
      </Link>
      <div id="navCollapse" className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/'} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/agents'} className="nav-link">
              Agents
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/maps'} className="nav-link">
              Maps
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/weapons'} className="nav-link">
              Weapons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
