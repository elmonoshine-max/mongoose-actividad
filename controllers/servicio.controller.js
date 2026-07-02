const modeloServicio = require('../models/servicio.model');

exports.listar = async (req,res)=>{
    try {
        const servicios = await modeloServicio.find();
        res.json(servicios);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.consultarId = async (req,res)=>{
    try {
        const servicio = await modeloServicio.findById(req.params.id);
        res.json(servicio);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.registrar = async (req,res)=>{
    try {

        let nuevoServicio = {
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            duracionMinutos:req.body.duracionMinutos,
            precio:req.body.precio,
            categoria:req.body.categoria
        }

        const servicio = await modeloServicio.create(nuevoServicio);

        res.json(servicio);

    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.actualizar = async (req,res)=>{
    try {

        let servicioActualizado = {
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            duracionMinutos:req.body.duracionMinutos,
            precio:req.body.precio,
            categoria:req.body.categoria
        }

        const servicio = await modeloServicio.findByIdAndUpdate(
            req.params.id,
            servicioActualizado,
            {new:true}
        );

        res.json(servicio);

    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.eliminar = async (req,res)=>{
    try {

        const servicio = await modeloServicio.findByIdAndDelete(req.params.id);

        res.json(servicio);

    } catch (error) {
        res.status(500).json({error:error.message});
    }
}