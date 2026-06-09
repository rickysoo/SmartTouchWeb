import React from 'react';
import './About.css';

function About() {
  const milestones = [
    { year: '1995', event: 'First payroll & attendance project for 1,000+ employees' },
    { year: '2004', event: 'Smart Touch Technology founded by Kenny Choy' },
    { year: '2009', event: 'Biometric Authentication System (BAS) introduced' },
    { year: '2020', event: 'SmartGoGo mobile-first HR app launched' },
    { year: '2025', event: 'Full integrated HR & operational ecosystem' }
  ];

  return (
    <div className="about-page">
      <section className="page-header">
        <h1>About Smart Touch Technology</h1>
        <p>Transforming Payroll, Attendance and Leave (PAL) processes since 2004</p>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Smart Touch Technology Sdn Bhd is a Malaysian/Singaporean provider of integrated HR automation,
                biometric access, mobile-first platforms and smart infrastructure solutions. With over 20 years of
                experience, we serve businesses of all sizes across Malaysia and Singapore.
              </p>
              <p>
                The company was founded in 2004 by Kenny Choy, a systems visionary with a degree in Information
                Management from Tamkang University. The journey began in 1995 with Kenny's first project — developing
                a payroll and attendance system for over 1,000 employees. That experience evolved into a company
                committed to solving real-world HR problems.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2,500+</h3>
                <p>Factories & Organizations</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat">
                <h3>1995</h3>
                <p>Year We Started</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Our Mission & Values</h2>

          <div className="mission-grid">
            <div className="mission-card">
              <h3>🎯 Our Mission</h3>
              <p>
                To solve real-world HR problems with smart, scalable technology — transforming Payroll, Attendance
                and Leave (PAL) processes and extending into full workforce and operational management. We bridge the gap
                between disconnected HR software and daily operations by linking physical hardware directly to digital systems.
              </p>
            </div>

            <div className="mission-card">
              <h3>💡 Core Philosophy</h3>
              <p>
                <strong>Trust, Innovation, Integration</strong> — We are not just about automation. We deliver trust through
                precision, innovation through design, and efficiency through integration. Every module is designed to ensure
                local compliance, operational transparency, employee convenience, managerial control, and future scalability.
              </p>
            </div>

            <div className="mission-card">
              <h3>🏗️ Platform Architecture</h3>
              <p>
                <strong>PAL is our heart</strong> (Payroll, Attendance, Leave), <strong>BAS is our brain</strong>
                (Biometric Authentication System), and <strong>SmartGoGo is our mobile arm</strong>. All modules are unified
                under BAS and accessible via SmartGoGo and the Smart Touch E-Portal for seamless workforce management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Why Choose Smart Touch?</h2>
          <div className="why-grid">
            <div className="why-card">
              <span className="why-number">1</span>
              <h3>24x7 Work Culture</h3>
              <p>We're always here to support your business needs around the clock</p>
            </div>
            <div className="why-card">
              <span className="why-number">2</span>
              <h3>Professional Team</h3>
              <p>Highly experienced professionals dedicated to your success</p>
            </div>
            <div className="why-card">
              <span className="why-number">3</span>
              <h3>Personalized Approach</h3>
              <p>Customized solutions tailored to your specific business needs</p>
            </div>
            <div className="why-card">
              <span className="why-number">4</span>
              <h3>Regular Updates</h3>
              <p>Continuous improvements and feature updates to stay ahead</p>
            </div>
            <div className="why-card">
              <span className="why-number">5</span>
              <h3>Passion & Dedication</h3>
              <p>We love what we do and it shows in every solution we deliver</p>
            </div>
            <div className="why-card">
              <span className="why-number">6</span>
              <h3>High Quality</h3>
              <p>Premium deliverables that exceed expectations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="container">
          <h2 className="section-title">Meet the Founder</h2>
          <div className="founder-content">
            <div className="founder-info">
              <h3>Kenny Choy</h3>
              <p className="founder-title">Founder & Systems Visionary</p>
              <p>
                With a degree in Information Management from Tamkang University, Kenny Choy envisioned and built Smart Touch
                Technology from his real-world experience in 1995. His expertise and passion for solving HR automation challenges
                have shaped the company into Malaysia's leading HR and workforce management solution provider.
              </p>
              <p>
                Kenny's vision was simple yet powerful: bridge the gap between disconnected HR systems and the reality of daily
                operations. This vision continues to drive innovation at Smart Touch Technology today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section" style={{ background: '#1a3a52', color: 'white' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Let's Transform Your HR Operations</h2>
          <p style={{ marginBottom: '30px' }}>Join 2,500+ organizations already benefiting from Smart Touch Technology</p>
          <a href="https://wa.me/60115354903" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Start Your Journey Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
