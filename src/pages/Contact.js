import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team to discuss your HR automation needs</p>
      </section>

      <section className="section contact-content">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <div className="info-block">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h4>Office Location</h4>
                <p>36-02 & 36-03, Jalan Permas 10,<br />Bandar Baru Permas Jaya,<br />81750 Masai, Johor, Malaysia</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div>
                <h4>Phone Numbers</h4>
                <p>+607-388 9903<br />+6011-5354 9903<br />+607-388 3686<br />+607-388 1124</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:sales@smartouch.com.my">sales@smartouch.com.my</a></p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/60115354903" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></p>
              </div>
            </div>

            <div className="contact-hours">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday & Public Holidays: Closed<br /><br />Emergency Support: 24/7 available</p>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://facebook.com/SMARTOUCH.SG" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <span>f</span>
                </a>
                <a href="https://linkedin.com/in/payee-paradise-9aaa7a129" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <span>in</span>
                </a>
                <a href="https://youtube.com/channel/UCWAvmLE9HyDnoKdewb9gxgw" target="_blank" rel="noopener noreferrer" title="YouTube">
                  <span>▶</span>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+60 10 1234 5678"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            <p className="form-note">We typically respond within 24 hours</p>
          </form>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <div className="map-embed">
            <iframe
              title="Smart Touch Technology Location"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '8px' }}
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0816329871477!2d103.73789352346797!3d1.3738399622873166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da18fb5b5b5b5d%3A0x1234567890abcdef!2s36-02%2C%20Jalan%20Permas%2010%2C%2081750%20Masai%2C%20Johor!5e0!3m2!1sen!2smy!4v1234567890"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section faq-cta" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Still Have Questions?</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px', color: '#555' }}>
            Check our FAQ section or contact our sales team for more information
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href="https://wa.me/60115354903" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
