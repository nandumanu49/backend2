const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Contact route
router.post('/', contactController.submitContactForm);

module.exports = router;
