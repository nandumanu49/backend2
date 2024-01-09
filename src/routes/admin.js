const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin routes
router.post('/login', adminController.login);
router.post('/logout', adminController.logout);
// Add other admin routes as needed

module.exports = router;
