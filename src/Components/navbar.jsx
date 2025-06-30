import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ["hero", "gallery", "about",  "contact"];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/logo.png" height="200" width="300" alt="logo" />
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {navItems.map((id) => (
          <li key={id}>
            <Link
              to={id}
              smooth
              duration={500}
              className="nav-link"
              spy
              onClick={closeMenu}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
