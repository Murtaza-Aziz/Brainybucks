import React from 'react';
import { Link } from 'react-router-dom';
import logo_footer from './BB_Transparent_Logo (1).png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Link to="/">
          <img className="logo_footer" src={logo_footer} alt="Logo" />
        </Link>
      </div>
      <div className="footer-text">
        <p>© 2023 BrainyBucks Consultants. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
