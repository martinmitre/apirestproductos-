const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

router.get('/', productosController.obtenerProductos);
router.post('/', productosController.agregarProducto);
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;
