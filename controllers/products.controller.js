const express = require('express');
const authMiddleware = require('../middlewares/auth.js');
const router = express.Router();
router.use(authMiddleware);
const product = require('../models/product');

module.exports = {
    createProduct: async (req, res) => {
        const { size } = req.body;
  
        try {
            if (await product.findOne({ size })) {
                return res.status(400).send({ error: 'Product already exists' });
            } else {
                const Products = await product.create(req.body);
                return res.status(200).send({
                    Products,
                });
            }
        } catch (err) {
            return res.status(400).send({ error: 'Registration failed' });
        }
    },
    listProduct: async (req, res) => {
        const products = await product.find();
        res.send(products);
    },
    listProductbyId: async (req, res) => {
        const id = req.params.id;       
        const products = await product.findOne({_id: id});
        res.send(products);
    },
};