import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, ChartBarIcon, LockClosedIcon, CurrencyDollarIcon, WalletIcon } from '@heroicons/react/24/outline';

console.log(motion);

const features = [
  {
    title: 'Private Data Analysis',
    description: 'Your financial data never leaves your device. We analyze it locally using advanced AI algorithms.',
    icon: LockClosedIcon,
  },
  {
    title: 'Blockchain Integration',
    description: 'Connect your wallet to analyze transaction history and build a comprehensive credit profile.',
    icon: ChartBarIcon,
  },
  {
    title: 'Secure Verification',
    description: 'Lenders receive only your credit score and verification, never your personal data.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Better Loan Terms',
    description: 'Access better loan terms by demonstrating your creditworthiness while maintaining privacy.',
    icon: CurrencyDollarIcon,
  },
];

const steps = [
  {
    step: '1',
    title: 'Connect Your Data',
    description: 'Securely connect your wallet and bank accounts. Your data stays private and encrypted.',
  },
  {
    step: '2',
    title: 'AI Analysis',
    description: 'Our AI analyzes your financial patterns and transaction history to generate your credit score.',
  },
  {
    step: '3',
    title: 'Get Verified',
    description: 'Receive your privacy-preserving credit score and share it with lenders when needed.',
  },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', minHeight: '100vh', padding: '0', margin: '0' }}
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', background: 'linear-gradient(to bottom right, #6366f1, #a855f7)', padding: '40px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'absolute', top: '10%', right: '5%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ position: 'absolute', bottom: '10%', left: '5%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '10px', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
        >
          Privacy-First Credit Scoring
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ fontSize: '1.25rem', color: '#e0e7ff', maxWidth: '32rem', marginBottom: '16px' }}
        >
          Get your credit score based on blockchain and financial data—without ever compromising your privacy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}
        >
          <Link
            to="/contact"
            style={{ padding: '12px 20px', borderRadius: '8px', backgroundColor: 'white', color: '#4f46e5', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Score
          </Link>
          <Link
            to="/about"
            style={{ padding: '12px 20px', borderRadius: '8px', border: '1px solid white', color: 'white', fontWeight: 'bold', transition: 'all 0.3s' }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ padding: '32px 0', backgroundColor: '#f9fafb' }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 8px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', color: '#4f46e5', marginBottom: '20px' }}
          >
            Why Choose Us?
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 12px rgba(0,0,0,0.15)' }}
                style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'all 0.3s' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '96px', height: '96px', borderRadius: '50%', backgroundColor: '#e0e7ff', marginBottom: '8px' }}>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <feature.icon style={{ height: '48px', width: '48px', color: '#4f46e5' }} />
                  </motion.div>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '4px', color: '#1f2937' }}>{feature.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '1rem' }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Steps Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ padding: '32px 0', backgroundColor: 'white' }}
      >
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 8px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', color: '#4f46e5', marginBottom: '20px' }}
          >
            How It Works
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#4f46e5', color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}
                >
                  {step.step}
                </motion.div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '4px', color: '#1f2937' }}>{step.title}</h4>
                <p style={{ color: '#6b7280', fontSize: '1rem' }}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ padding: '32px 0', background: 'linear-gradient(to right, #6366f1, #a855f7)', position: 'relative', overflow: 'hidden' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}
        />
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}
          >
            Ready to get your privacy-preserving credit score?
          </motion.h2>
          <Link
            to="/contact"
            style={{ marginTop: '6px', padding: '14px 24px', borderRadius: '8px', backgroundColor: 'white', color: '#4f46e5', fontWeight: 'bold', fontSize: '1.125rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home; 