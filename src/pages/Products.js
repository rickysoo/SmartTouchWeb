import React from 'react';
import './Products.css';

function Products() {
  const productCategories = [
    {
      category: 'Core HRMS Products',
      products: [
        {
          name: 'SmartPay - Payroll System',
          description: 'Automated, statutory-compliant payroll for Malaysian and Singaporean law',
          details: ['Automated salary calculation', 'EPF, SOCSO, EIS & PCB compliance', 'Bonus, overtime & allowance management']
        },
        {
          name: 'Smartime - Time & Attendance',
          description: 'Real-time biometric or mobile attendance tracking with scheduling',
          details: ['Face recognition attendance system', 'Fingerprint, card & mobile clock-in', 'Multi-branch & multi-shift support', 'Real-time dashboard']
        },
        {
          name: 'SmartLeave - Leave Management',
          description: 'Online leave applications with approval workflows and balance tracking',
          details: ['Easy application submission', 'Automated approval workflows', 'Leave balance tracking', 'Integration with payroll']
        },
        {
          name: 'SmartClaim - Expense Management',
          description: 'End-to-end expense submission, approval and payroll linkage',
          details: ['Claim submission forms', 'Approval workflows', 'Payroll integration', 'Receipt management']
        },
        {
          name: 'SmartGoGo - Mobile HR App',
          description: 'Mobile-first HR solution for employees and managers (Serverless, installation-free)',
          details: ['GPS-based mobile attendance', 'Leave & claim submission', 'E-payslips access', 'Request approvals on-the-go']
        },
        {
          name: 'Payslip System',
          description: 'E-payslip generation with customizable templates',
          details: ['Digital payslip delivery', 'Customizable templates', 'Employee self-service access']
        }
      ]
    },
    {
      category: 'Biometric & Security Products',
      products: [
        {
          name: 'Face Recognition Devices',
          description: 'Touchless, high-speed facial recognition for attendance and access',
          details: ['Touchless & contactless', 'High-speed recognition', 'Mask & lighting tolerant', 'HRMS & VMS integration']
        },
        {
          name: 'Fingerprint Systems',
          description: 'Reliable fingerprint-based attendance and access control',
          details: ['Accurate biometric capture', 'Multiple enrollment options', 'Real-time processing']
        },
        {
          name: 'Access Control Systems',
          description: 'Comprehensive access control for offices and restricted areas',
          details: ['Door access control', 'Staff & visitor rights management', 'Centralized administration', 'Falco Web system']
        },
        {
          name: 'Barrier Solutions',
          description: 'Physical security barriers integrated with HRMS',
          details: ['Swing barriers', 'Tripod turnstiles', 'Speed gates', 'QR & face recognition integration']
        },
        {
          name: 'CCTV & Security Systems',
          description: 'Comprehensive surveillance and alarm systems',
          details: ['IP camera systems', 'Alarm integration', 'Real-time monitoring', 'Recording & playback']
        }
      ]
    },
    {
      category: 'Operational Products',
      products: [
        {
          name: 'VMS - Visitor Management',
          description: 'Visitor registration and tracking with facial recognition or QR codes',
          details: ['Self-registration kiosks', 'QR code entry', 'Mobile VMS capability', 'Host notifications', 'Access tracking']
        },
        {
          name: 'Canteen Management System',
          description: 'Meal ordering, payment and subsidy control system',
          details: ['Employee meal entitlements', 'Face/card/QR consumption', 'Subsidy management', 'Fraud prevention', 'Detailed reports']
        },
        {
          name: 'Dormitory Management System',
          description: 'Worker allocation, room access and occupancy management',
          details: ['Worker registration', 'Room allocation', 'Access control', 'Occupancy tracking', 'Compliance reporting']
        },
        {
          name: 'Job Costing System',
          description: 'Labour hour tracking by project for billing and analysis',
          details: ['Project-based tracking', 'Labour hour monitoring', 'Billing automation', 'Cost analysis']
        },
        {
          name: 'Guard Patrol System',
          description: 'Security patrol monitoring and tracking',
          details: ['Route tracking', 'Check-point verification', 'Real-time updates']
        }
      ]
    }
  ];

  return (
    <div className="products-page">
      <section className="page-header">
        <h1>Our Products</h1>
        <p>Complete range of HR, payroll, attendance and security solutions</p>
      </section>

      {productCategories.map((cat, idx) => (
        <section key={idx} className={`section ${idx % 2 === 0 ? 'white' : 'gray'}`}>
          <div className="container">
            <h2 className="category-title">{cat.category}</h2>
            <div className="products-grid">
              {cat.products.map((product, pidx) => (
                <div key={pidx} className="product-item">
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <ul className="product-details">
                    {product.details.map((detail, didx) => (
                      <li key={didx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section cta-section" style={{ background: '#1a3a52', color: 'white' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Want to Learn More?</h2>
          <p style={{ marginBottom: '30px' }}>Explore detailed product specifications and request a personalized demo</p>
          <a href="https://wa.me/60115354903" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

export default Products;
