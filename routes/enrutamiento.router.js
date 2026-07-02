const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/cliente.controller');


router.get('/formulario', clienteController.formulario);


router.get('/clientes/:correo', clienteController.consultarId);

router.post('/clientes', clienteController.registrar);

router.post(
    '/clientes/editar/:correo',
    clienteController.actualizar
);

router.post(
    '/clientes/eliminar/:correo',
    clienteController.eliminar
);

module.exports = router;