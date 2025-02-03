import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src= {logo} />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/solutions">Solutions</a></li>
          <li><a href="/industries">Industries</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
         {/* <li> <button className="cta-button">Get Started</button></li> */}
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;