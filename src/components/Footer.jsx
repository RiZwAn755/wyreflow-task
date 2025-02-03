import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer>
      
      <div className="social-section">
        <h2>Social</h2>
        <p>Follow us for the latest update</p>
        <div className="social-icons">
          <div className="social-item">
            <a href=""><img src="https://cdn-icons-png.freepik.com/512/2504/2504903.png" alt="Facebook" /></a>
           
          </div>
          <div className="social-item">
            <a href=""><img src="https://cdn-icons-png.freepik.com/512/3955/3955027.png" alt="Instagram" /></a>
           
           
          </div>
          <div className="social-item">
           <a href=""> <img src="https://cdn-icons-png.freepik.com/512/14776/14776979.png" alt="YouTube" /> </a>
            
          </div>
          <div className="social-item">
           <a href=""> <img src="https://cdn-icons-png.freepik.com/512/2504/2504923.png" alt="LinkedIn" /></a>
            
            
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>Industries</h3>
          <ul>
            <li>Banking</li>
            <li>Consulting</li>
            <li>Communications and Media</li>
            <li>E-commerce</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Cloud</li>
            <li>Consulting</li>
            <li>Cybersecurity</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>More Information</h3>
          <ul>
            <li>About Us</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Privacy Notice</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
