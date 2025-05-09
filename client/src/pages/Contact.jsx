import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

console.log(motion);
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          style={{ maxWidth: '32rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937' }}
            >
              Get Started with Credfi AI
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ marginTop: '0.75rem' }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ fontSize: '1.125rem', color: '#6b7280' }}
              >
                Ready to take control of your financial data while accessing better loan terms? Contact us to learn more
                about our privacy-preserving credit scoring platform.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ marginTop: '2.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {[
                {
                  icon: PhoneIcon,
                  text: '+1 (555) 123-4567',
                  subtext: 'Mon-Fri 9am to 6pm EST',
                },
                {
                  icon: EnvelopeIcon,
                  text: 'support@credfi.ai',
                  subtext: 'For general inquiries',
                },
                {
                  icon: GlobeAltIcon,
                  text: 'partners@credfi.ai',
                  subtext: 'For lending partnerships',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ display: 'flex' }}
                >
                  <div style={{ flexShrink: 0 }}>
                    <item.icon style={{ height: '1.5rem', width: '1.5rem', color: '#4f46e5' }} aria-hidden="true" />
                  </div>
                  <div style={{ marginLeft: '0.75rem', fontSize: '1rem', color: '#6b7280' }}>
                    <p>{item.text}</p>
                    <p style={{ marginTop: '0.25rem' }}>{item.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            style={{ marginTop: '3rem' }}
          >
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              onSubmit={handleSubmit}
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}
            >
              {[
                {
                  label: 'Name',
                  type: 'text',
                  name: 'name',
                  id: 'name',
                  value: formData.name,
                  onChange: handleChange,
                  required: true,
                },
                {
                  label: 'Email',
                  type: 'email',
                  name: 'email',
                  id: 'email',
                  value: formData.email,
                  onChange: handleChange,
                  required: true,
                },
                {
                  label: 'Message',
                  type: 'textarea',
                  name: 'message',
                  id: 'message',
                  value: formData.message,
                  onChange: handleChange,
                  required: true,
                  rows: 4,
                  placeholder: 'Tell us about your needs...',
                },
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 + index * 0.2 }}
                >
                  <motion.label
                    htmlFor={field.id}
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'medium', color: '#4b5563' }}
                  >
                    {field.label}
                  </motion.label>
                  <motion.div style={{ marginTop: '0.25rem' }}>
                    {field.type === 'textarea' ? (
                      <motion.textarea
                        id={field.id}
                        name={field.name}
                        rows={field.rows}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        style={{ padding: '0.75rem 1rem', display: 'block', width: '100%', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}
                      />
                    ) : (
                      <motion.input
                        type={field.type}
                        name={field.name}
                        id={field.id}
                        value={field.value}
                        onChange={field.onChange}
                        required={field.required}
                        style={{ padding: '0.75rem 1rem', display: 'block', width: '100%', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem 1.5rem', border: '1px solid transparent', borderRadius: '0.375rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', fontSize: '1rem', fontWeight: 'medium', color: 'white', backgroundColor: '#4f46e5', transition: 'background-color 0.3s' }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 