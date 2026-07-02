require('./config/connectiondb');
const express = require('express');
const clienteController = require('./controllers/cliente.controller');
const servicioController = require('./controllers/servicio.controller');
const enrutamiento = require('./routes/enrutamiento.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use('/api/v1', enrutamiento);

app.get('/', clienteController.listar);

app.get('/servicios', servicioController.listar);
app.get('/servicios/:id', servicioController.consultarId);
app.post('/servicios', servicioController.registrar);
app.put('/servicios/:id', servicioController.actualizar);
app.delete('/servicios/:id', servicioController.eliminar);

app.listen(3000);