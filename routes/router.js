const express = require('express');
const authcontroller = require('../controllers/auth.controller');
const router = express.Router();

// eslint-disable-next-line no-unused-vars
const User = require('../controllers/auth.controller');
router.post('/register', authcontroller.createUser);
router.post('/login', authcontroller.authUser);

module.exports = router;
