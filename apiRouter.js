const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json("Home");
});

router.get('/product', (req, res) => {
    res.json('Code 1')
});

router.get('/cart', (req, res) => {
    res.json('cart');
});

module.exports = router;
