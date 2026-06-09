import React from 'react';
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Smart Touch Technology</h3>
            <p>Malaysia's leading integrated Payroll, HRMS & Time Attendance Software solution serving 2,500+ factories, offices and condominiums.</p>
            <div className="social-links">
              <a href="https://facebook.com/SMARTOUCH.SG" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com/in/payee-paradise-9aaa7a129" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com/channel/UCWAvmLE9HyDnoKdewb9gxgw" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#solutions">SmartHR</a></li>
              <li><a href="#solutions">SmartPay</a></li>
              <li><a href="#solutions">Smartime</a></li>
              <li><a href="#solutions">VMS</a></li>
              <li><a href="#solutions">Canteen System</a></li>
              <li><a href="#solutions">Dormitory System</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">Payroll System</a></li>
              <li><a href="#products">Time Attendance</a></li>
              <li><a href="#products">Face Recognition</a></li>
              <li><a href="#products">Access Control</a></li>
              <li><a href="#products">CCTV & Security</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Information</h4>
            <div className="contact-info">
              <p>
                <MapPin size={16} />
                <span>36-02 & 36-03, Jalan Permas 10, Bandar Baru Permas Jaya, 81750 Masai, Johor, Malaysia</span>
              </p>
              <p>
                <Phone size={16} />
                <span>+607-388 9903 / +6011-5354 9903</span>
              </p>
              <p>
                <Mail size={16} />
                <span><a href="mailto:sales@smartouch.com.my">sales@smartouch.com.my</a></span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Smart Touch Technology Sdn Bhd. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
