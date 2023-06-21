import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
    <header className="header">
    <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
    <label htmlFor="navbar-toggle" className="navbar-toggle-label">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <nav className="nav">
      <ul>
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/marketplace">Marketplace</Link>
        </li>
        <li>
          <Link to="/learn-more">Learn More</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/subscribe" className="pill-button">
            Subscribe
          </Link>
        </li>
      </ul>
    </nav>
  </header>
    );
};

export default Navbar;