import { motion } from 'framer-motion';
import { ShieldCheckIcon, LockClosedIcon, UserGroupIcon } from '@heroicons/react/24/outline';

console.log(motion);
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: 'white' }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '4rem 1rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: 'center' }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontSize: '1rem', color: '#4f46e5', fontWeight: 'bold', textTransform: 'uppercase' }}
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ marginTop: '0.5rem', fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937' }}
            >
              Revolutionizing Credit Scoring
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ marginTop: '1rem', maxWidth: '32rem', fontSize: '1.25rem', color: '#6b7280', margin: '0 auto' }}
            >
              We're building a future where your financial data remains private while still helping you access better loan terms.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ marginTop: '2.5rem' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{ color: '#6b7280', fontSize: '1.125rem', margin: '0 auto' }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                At Credfi AI, we believe that your financial data should remain private while still helping you access
                better financial opportunities. Our platform uses advanced AI and blockchain technology to analyze your
                financial patterns and generate credit scores without exposing your personal data.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                By analyzing wallet transactions and bank statements locally, we can provide lenders with verified credit
                scores while keeping your sensitive financial information private. This approach gives you control over
                your data while still allowing you to demonstrate your creditworthiness.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            style={{ marginTop: '4rem' }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '2rem' }}
            >
              Our Core Principles
            </motion.h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: 'Privacy First',
                  description: 'Your financial data never leaves your device. We analyze it locally and only share the results you approve.',
                  icon: LockClosedIcon,
                },
                {
                  title: 'Transparent Scoring',
                  description: 'Clear and fair credit scoring based on your actual financial behavior, not just traditional metrics.',
                  icon: ShieldCheckIcon,
                },
                {
                  title: 'User Control',
                  description: 'You decide what data to share and with whom. Complete control over your financial information.',
                  icon: UserGroupIcon,
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flexShrink: 0 }}>
                      <value.icon style={{ height: '1.5rem', width: '1.5rem', color: '#4f46e5' }} aria-hidden="true" />
                    </div>
                    <h4 style={{ marginLeft: '0.75rem', fontSize: '1.125rem', fontWeight: 'medium', color: '#1f2937' }}>{value.title}</h4>
                  </div>
                  <p style={{ marginTop: '1rem', color: '#6b7280' }}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div style={{ marginTop: '4rem', backgroundColor: '#e0e7ff', borderRadius: '0.5rem', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>Our Technology</h3>
            <div style={{ color: '#6b7280', fontSize: '1.125rem' }}>
              <p>
                Our platform combines cutting-edge technologies to provide secure and private credit scoring:
              </p>
              <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>
                  <strong>Local AI Analysis:</strong> Advanced machine learning algorithms analyze your financial data
                  locally on your device, ensuring your data never leaves your control.
                </li>
                <li>
                  <strong>Blockchain Integration:</strong> Secure connection to your wallet for analyzing transaction
                  history and building a comprehensive credit profile.
                </li>
                <li>
                  <strong>Zero-Knowledge Proofs:</strong> Cryptographic techniques that allow us to verify your
                  creditworthiness without revealing your actual financial data.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About; 