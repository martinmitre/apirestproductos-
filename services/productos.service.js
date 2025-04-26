const productosRepo = require('../repositories/productos.repository');

function getProductos() {
    return productosRepo.obtenerTodos();
}

function addProducto(nombre) {
    return productosRepo.agregar(nombre);
}

function deleteProducto(id) {
    return productosRepo.eliminar(id);
}

module.exports = { getProductos, addProducto, deleteProducto };
