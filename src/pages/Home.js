import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Shield, Clock, Users, Zap } from 'lucide-react';
import './Home.css';

function Home() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const products = [
    {
      id: 1,
      icon: '💰',
      title: 'SmartPay',
      description: 'Automated, statutory-compliant payroll for Malaysian and Singaporean law',
      features: ['EPF, SOCSO, EIS & PCB compliance', 'Bonus & overtime management', 'Automated salary calculation']
    },
    {
      id: 2,
      icon: '🕐',
      title: 'Smartime',
      description: 'Real-time biometric attendance tracking with scheduling',
      features: ['Face recognition system', 'Multi-branch support', 'Real-time dashboard']
    },
    {
      id: 3,
      icon: '📱',
      title: 'SmartGoGo',
      description: 'Mobile-first HR app for employees and managers',
      features: ['GPS-based mobile attendance', 'Leave & claims management', 'E-payslips access']
    }
  ];

  const extendedSolutions = [
    {
      icon: '👥',
      title: 'Visitor Management System',
      description: 'Secure visitor entry tracking with facial recognition'
    },
    {
      icon: '🍽️',
      title: 'Canteen Management',
      description: 'Automated meal ordering and subsidy control'
    },
    {
      icon: '🏠',
      title: 'Dormitory System',
      description: 'Worker allocation and occupancy management'
    }
  ];

  const biometricSolutions = [
    {
      icon: '👤',
      title: 'Face Recognition',
      description: 'Touchless, high-speed facial recognition'
    },
    {
      icon: '🚪',
      title: 'Access Control',
      description: 'Comprehensive door and area access management'
    },
    {
      icon: '🔐',
      title: 'Barriers & Turnstiles',
      description: 'Integrated security barriers for workforce control'
    }
  ];

  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Prevent Fraud',
      description: 'Eliminate "buddy punching" with biometric verification'
    },
    {
      icon: <Clock size={32} />,
      title: 'Live Tracking',
      description: 'See who is on-site instantly with real-time dashboards'
    },
    {
      icon: <Zap size={32} />,
      title: 'Auto-Calculation',
      description: 'OT, lateness & allowances calculated automatically'
    },
    {
      icon: <Users size={32} />,
      title: 'Zone Control',
      description: 'Restrict access to hazardous or sensitive areas'
    }
  ];

  const industries = [
    {
      title: 'Manufacturing & Factories',
      description: 'High-volume workforce management with rotating shifts and strict access control'
    },
    {
      title: 'Construction & Engineering',
      description: 'Rugged biometric devices for on-site tracking and project-based payroll'
    },
    {
      title: 'Large Enterprises',
      description: 'Centralized management for multi-branch offices with unified payroll'
    }
  ];

  const whyChoose = [
    { icon: '🕐', text: '24x7 Work Culture' },
    { icon: '👨‍💼', text: 'Professional Team' },
    { icon: '🎯', text: 'Personalized Approach' },
    { icon: '🔄', text: 'Regular Updates' },
    { icon: '❤️', text: 'We Love What We Do' },
    { icon: '⭐', text: 'High Quality Deliverables' }
  ];

  const faqs = [
    {
      question: 'Is Smart Touch Payroll compliant with the latest 2025 EPF rates?',
      answer: 'Yes, the system updates automatically whenever the government announces new statutory rates, ensuring your payroll remains compliant.'
    },
    {
      question: 'Can I import data from Excel?',
      answer: 'Yes, bulk import of employee data is allowed to help you get started quickly without manual data entry.'
    },
    {
      question: 'Does it support different OT rates?',
      answer: 'Yes, custom OT formulas are supported including OT 1.0, 1.5, 2.0, and Rest Day calculations for flexibility.'
    }
  ];

  const clients = [
    'Westlite', 'Gardenia', 'Coca-Cola', 'Samsung', 'Super', 'Volvo',
    "Levi's", 'ZF', 'Daily Fresh', 'JCY', 'Zenxin', 'Power Root',
    'Sime Darby Oil', 'MMHE', 'Wilmar'
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Malaysia's Complete Workforce Automation</h1>
          <p>Integrated Payroll, HRMS & Time Attendance Software with Biometric Security</p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary">Book a Demo</Link>
            <Link to="/solutions" className="btn btn-outline">Explore Solutions</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="graphic-element graphic-1"></div>
            <div className="graphic-element graphic-2"></div>
            <div className="graphic-element graphic-3"></div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="trust-section">
        <div className="container">
          <p className="trust-text">Trusted by 2,500+ Factories, Offices and Condominiums in Malaysia</p>
          <div className="clients-grid">
            {clients.map((client, idx) => (
              <div key={idx} className="client-logo">
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="section core-solutions">
        <div className="container">
          <h2 className="section-title">Core HRMS Solution</h2>
          <p className="section-subtitle">Your foundation for accurate payroll and workforce control</p>
          <div className="grid grid-3">
            {products.map((product) => (
              <div key={product.id} className="card product-card">
                <div className="product-icon">{product.icon}</div>
                <h3 className="card-title">{product.title}</h3>
                <p className="card-description">{product.description}</p>
                <ul className="card-list">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Solutions */}
      <section className="section extended-solutions" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Extended HRMS Solutions</h2>
          <p className="section-subtitle">Extend your HRMS capabilities into daily operations, compliance, and workforce control</p>
          <div className="grid grid-3">
            {extendedSolutions.map((solution, idx) => (
              <div key={idx} className="card">
                <div className="solution-icon">{solution.icon}</div>
                <h3 className="card-title">{solution.title}</h3>
                <p className="card-description">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biometric Solutions */}
      <section className="section biometric-solutions">
        <div className="container">
          <h2 className="section-title">Biometric & Security Solutions</h2>
          <p className="section-subtitle">A complete physical security layer fully integrated with HRMS</p>
          <div className="grid grid-3">
            {biometricSolutions.map((solution, idx) => (
              <div key={idx} className="card">
                <div className="solution-icon">{solution.icon}</div>
                <h3 className="card-title">{solution.title}</h3>
                <p className="card-description">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section key-features" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Is Your HR Software Disconnected from Your Operations?</h2>
          <p className="section-subtitle">Smart Touch bridges the gap — connecting physical hardware directly to digital operations</p>
          <div className="grid grid-2">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section industries">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">HR & Access Control Solutions for Industrial Environments</p>
          <div className="grid grid-3">
            {industries.map((industry, idx) => (
              <div key={idx} className="card industry-card">
                <h3 className="card-title">{industry.title}</h3>
                <p className="card-description">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Smart Touch */}
      <section className="section why-choose" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Why Smart Touch Is Your Best Choice</h2>
          <div className="why-grid">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="why-item">
                <div className="why-icon">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${expandedFaq === idx ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} className="faq-icon" />
                </button>
                {expandedFaq === idx && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" style={{ background: '#1a3a52', color: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'white' }}>Ready to Transform Your Payroll & HR?</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px', color: '#ecf0f1' }}>
            Join 2,500+ organizations already using Smart Touch Technology
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn btn-primary">Book Your Free Demo Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
