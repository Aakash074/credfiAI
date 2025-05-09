require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data directory setup
const dataDir = path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'db.json');

// Initialize data directory and file if they don't exist
async function initializeData() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    try {
      await fs.access(dataFile);
    } catch {
      // If file doesn't exist, create it with empty data
      await fs.writeFile(dataFile, JSON.stringify({ data: [] }));
    }
    console.log('Data storage initialized');
  } catch (error) {
    console.error('Error initializing data storage:', error);
  }
}

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to AgentRust API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await initializeData();
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
}); 