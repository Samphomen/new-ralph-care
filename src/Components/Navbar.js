import React from 'react'
import Logo from "../Images/newlogo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <div className="nav-items">
        <a href='/' className="nav-item">Home</a>
        <a href='/about-us' className="nav-item">About Us</a>
        <a href='/services' className="nav-item">Services</a>
        <a href='/careers' className="nav-item">Jobs</a>
        <a href='/contact' className="nav-item">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar