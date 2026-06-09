import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

function Solutions() {
  const solutions = [
    {
      name: 'SmartHR',
      description: 'Complete HR management solution combining payroll, attendance, and leave management',
      features: ['SmartGoGo mobile app', 'SmartPay payroll system', 'Smartime attendance', 'SmartLeave management', 'SmartClaim expenses']
    },
    {
      name: 'Smart PAL',
      description: 'Unified Payroll-Attendance-Leave package for complete workforce management',
      features: ['Integrated payroll processing', 'Real-time attendance', 'Leave balance tracking', 'Automated compliance']
    },
    {
      name: 'Construction Solution',
      description: 'Built for the construction sector with biometric access and job costing',
      features: ['BAS - Biometric Authentication', 'VMS for visitor tracking', 'Job costing system', 'Long range RFID', 'Project reference tracking']
    },
    {
      name: 'Visitor Management System',
      description: 'Secure visitor registration and access control with facial recognition',
      features: ['Self-registration kiosks', 'QR code entry', 'Mobile VMS', 'Host notifications', 'Access tracking']
    },
    {
      name: 'Canteen Management System',
      description: 'Automated meal ordering, payment and subsidy management',
      features: ['Employee meal entitlements', 'Face/card/QR consumption', 'Subsidy control', 'Fraud prevention', 'Detailed reports']
    },
    {
      name: 'Dormitory System',
      description: 'Efficient worker allocation and occupancy management',
      features: ['Worker registration', 'Room access control', 'Occupancy tracking', 'Utilities management', 'Compliance reporting']
    },
    {
      name: 'Job Costing System',
      description: 'Monitor labour hours by project codes for accurate billing',
      features: ['Project-based tracking', 'Labour hour monitoring', 'Accurate billing', 'Cost control', 'Labour analysis']
    },
    {
      name: 'Access Control System',
      description: 'Comprehensive door and area access management',
      features: ['Office & restricted areas', 'Staff & visitor rights', 'Centralized management', 'Door access control', 'Falco Web system']
    },
    {
      name: 'Guard Patrol System',
      description: 'Security guard patrol monitoring and tracking',
      features: ['Patrol route tracking', 'Check-point verification', 'Real-time monitoring', 'Incident logging']
    }
  ];

  return (
    <div className="solutions-page">
      <section className="page-header">
        <h1>Our Solutions</h1>
        <p>Comprehensive workforce automation and security solutions tailored to your business</p>
      </section>

      <section className="section solutions-grid">
        <div className="container">
          <div className="grid grid-3">
            {solutions.map((solution, idx) => (
              <div key={idx} className="solution-card">
                <h3>{solution.name}</h3>
                <p className="solution-description">{solution.description}</p>
                <ul className="features-list">
                  {solution.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" style={{ background: '#1a3a52', color: 'white' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Need a Customized Solution?</h2>
          <p style={{ marginBottom: '30px' }}>Contact our team to discuss your specific requirements</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
