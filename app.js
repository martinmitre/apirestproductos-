const express = require('express');
const cors = require('cors');
const productosRouter = require('./routes/productos.routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/productos', productosRouter);
app.use(express.static('public'));

app.listen(3000, () => console.log('API REST corriendo en http://localhost:3000'));
