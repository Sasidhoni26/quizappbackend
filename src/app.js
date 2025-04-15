
const express = require('express');
const app = express();

// Basic API endpoint for testing
app.get('/api/test', (req, res) => {
    res.json({ message: 'TNPSC Quiz Backend Working!' });
});

// Export the app for Vercel
module.exports = app;