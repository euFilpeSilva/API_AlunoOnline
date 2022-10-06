const express = require('express');

var routerNotas = require('./routes/notas');
var routerFaltas = require('./routes/faltas');
var routerBoletos = require('./routes/boletos');
var routerRequerimentos = require('./routes/requerimentos');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routerNotas);
app.use('/', routerFaltas);
app.use('/', routerBoletos);
app.use('/', routerRequerimentos);



module.exports = app;
