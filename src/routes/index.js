const express = require('express');
const router = express.Router();
const categorysRouter = require('../routes/category')
const productsRouter = require('../routes/product')
const ordersRouter = require('../routes/order')

router.use('/category', categorysRouter);
router.use('/product', productsRouter);
router.use('/order', ordersRouter);

module.exports = router;