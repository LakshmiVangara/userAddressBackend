const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to handle user registration
router.post('/register', userController.registerUser);

module.exports = router;
