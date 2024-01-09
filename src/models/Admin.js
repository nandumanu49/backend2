// Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  // Define admin model fields
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;