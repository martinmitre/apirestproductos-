const productosService = require('../services/productos.service');

function obtenerProductos(req, res) {
    const productos = productosService.getProductos();
    res.json(productos);
}

function agregarProducto(req, res) {
    const { producto } = req.body;
    if (!producto || producto.trim() === '') {
        return res.status(400).json({ mensaje: 'El producto no puede estar vacío' });
    }
    const nuevo = productosService.addProducto(producto);
    res.status(201).json(nuevo);
}

function eliminarProducto(req, res) {
    const id = parseInt(req.params.id);
    const eliminado = productosService.deleteProducto(id);
    if (!eliminado) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json({ mensaje: 'Producto eliminado' });
}

module.exports = { obtenerProductos, agregarProducto, eliminarProducto };
