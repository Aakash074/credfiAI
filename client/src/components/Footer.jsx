import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1f2937', color: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Credfi AI</h3>
            <p style={{ color: '#d1d5db' }}>
              Revolutionizing decentralized identity verification with AI-powered solutions.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <Link to="/" style={{ color: '#d1d5db', transition: 'color 0.3s' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#d1d5db', transition: 'color 0.3s' }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#d1d5db', transition: 'color 0.3s' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact Us</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#d1d5db' }}>
              <li>Email: info@credfi.ai</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Blockchain Street, Web3 City</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #4b5563', textAlign: 'center', color: '#d1d5db' }}>
          <p>&copy; {new Date().getFullYear()} Credfi AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 