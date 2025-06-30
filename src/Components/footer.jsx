import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-logo">Prashant patil Photography</h3>
      <div className="footer-socials">
        <a href="https://www.instagram.com/prashantpatilphotography?igsh=OWhkMWFwN2VpcGs4" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://m.youtube.com/@Prashantpatil_pp?fbclid=PAQ0xDSwLPNWVleHRuA2FlbQIxMAABpzHjhi0DAToblS7SeFoJ846-nKvcfJv9EKMf1wt_bcGZ3GapapW-bdeKPOcN_aem_cVibx5J1XPy04NgxhtR_6Q" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
      </div>
      <p className="footer-copy">© 2025 prashant patil Studio. All rights reserved.</p>
    </footer>
  );
}
