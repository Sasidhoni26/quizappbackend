const express = require('express');
const app = express();

// Basic API endpoint for testing
app.get('/api/test', (req, res) => {
    res.json({ message: 'TNPSC Quiz Backend Working!' });
});

// Start the server
const PORT = process.env.PORT || 5656;
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});