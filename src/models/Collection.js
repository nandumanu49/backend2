// Collection.js
const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Define other collection model fields
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
