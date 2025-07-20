// backend/index.js
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Body parser for JSON requests

// Basic route for testing
app.get('/', (req, res) => {
  res.send('HackBox OS Backend is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access at http://localhost:${PORT}`);
});