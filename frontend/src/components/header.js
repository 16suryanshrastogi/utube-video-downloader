import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
