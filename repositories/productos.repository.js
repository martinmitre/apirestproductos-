const productos = [];
let nextId = 1;

function obtenerTodos() {
    return productos;
}

function agregar(nombre) {
    const nuevo = { id: nextId++, nombre };
    productos.push(nuevo);
    return nuevo;
}

function eliminar(id) {
    const index = productos.findIndex(p => p.id === id);
    if (index === -1) return false;
    productos.splice(index, 1);
    return true;
}

module.exports = { obtenerTodos, agregar, eliminar };
