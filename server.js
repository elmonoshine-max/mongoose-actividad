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


app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
        { name: 'Tux', organization: "Linux", birth_year: 1996 },
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013 }
    ];
    res.render('pages/index', {
        mascots: mascots,
        tagline: "No programming concept is complete without a cute animal mascot."
    });
});

app.get('/servicios', servicioController.listar);
app.get('/servicios/:id', servicioController.consultarId);
app.post('/servicios', servicioController.registrar);
app.put('/servicios/:id', servicioController.actualizar);
app.delete('/servicios/:id', servicioController.eliminar);

app.listen(3000);