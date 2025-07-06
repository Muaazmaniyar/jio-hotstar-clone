import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="main-header">
      <img src={logo} alt="Hotstar Logo" className="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
