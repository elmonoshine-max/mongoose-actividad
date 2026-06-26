const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    duracionMinutos: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String
    }
});

module.exports = mongoose.model('Servicio', servicioSchema);