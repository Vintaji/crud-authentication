const express = require('express');
const authcontroller = require('../controllers/auth.controller');
const productController = require('../controllers/products.controller');
const router = express.Router();

// eslint-disable-next-line no-unused-vars
const User = require('../controllers/auth.controller');
router.post('/register', authcontroller.createUser);
router.post('/login', authcontroller.authUser);

// eslint-disable-next-line no-unused-vars
const products = require('../controllers/products.controller');
router.post('/products', productController.createProduct);
router.get('/products', productController.listProduct);
router.get('/products/:id', productController.listProductbyId);

module.exports = router;
