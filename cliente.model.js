const mongoose = require('../config/connectiondb');

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Cliente', clienteSchema);