const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/api/test', (req, res) => {
    res.json({ message: 'TNPSC Quiz Backend Working!' });
});
module.exports = app;