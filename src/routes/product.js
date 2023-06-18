const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
router
  .get("/", productController.getAllProduct)
  .get("/search", productController.getNameProduct)
  .get("/:id", productController.getDetailProduct)
  .post("/", productController.createProduct)
  .put("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

module.exports = router;