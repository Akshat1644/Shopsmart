import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div class="amazon-footer">
        <p class="footer-logo">Shopsmart</p>
        <ul class="footer-links">
            <li><a href="./About">About Us</a></li>
            <li><a href="./Contact">Contact Us</a></li>
            <li><a href="./Privacy">Privacy Policy</a></li>
            <li><a href="./Terms">Terms of Service</a></li>
        </ul>
        <ul className="footer-link-copyright">
            <li>Copyright © Shopsmart</li>
        </ul>
    </div>
  )
}

export default Footer;
