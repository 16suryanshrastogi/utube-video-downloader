// Header.jsx
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

// Render your component into the root div
render(
  <Router>
    <Header />
  </Router>,
  document.getElementById('root')
);
