import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4f46e5', marginLeft: '0.5rem' }}>Credfi AI</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{ padding: '0.5rem 1rem', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', transition: 'color 0.3s, background-color 0.3s' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div style={{ display: 'none', alignItems: 'center' }}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '0.375rem', color: '#9ca3af', transition: 'color 0.3s, background-color 0.3s' }}
            >
              {isOpen ? (
                <XMarkIcon style={{ height: '1.5rem', width: '1.5rem' }} />
              ) : (
                <Bars3Icon style={{ height: '1.5rem', width: '1.5rem' }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{ display: 'block' }}>
          <div style={{ paddingTop: '0.5rem', paddingBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{ display: 'block', padding: '0.5rem 1rem', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: '500', color: '#4b5563', transition: 'color 0.3s, background-color 0.3s' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 