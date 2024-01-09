const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

// Collection routes
router.get('/', collectionController.getAllCollections);
router.post('/addCollection', collectionController.addCollection);
router.put('/renameCollection/:id', collectionController.renameCollection);
router.delete('/removeCollection/:id', collectionController.removeCollection);
// Add other collection routes as needed

module.exports = router;
