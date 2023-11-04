// Create web server
const express = require('express');
const router = express.Router();

// Import comment model
const Comment = require('../models/comment');

// Create route for comments
router.get('/', function (req, res) {
    res.send('Comments route');
});

// Export all routes
module.exports = router;