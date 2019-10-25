var express = require('express');
var app = express();

reportesVentas = [
    {mes: 'Enero', importe: 3000},
    {mes: 'Febrero', importe: 2000},
    {mes: 'Marzo', importe: 3500}
];

reportesCompras = [
    {mes: 'Enero', importe: 1000},
    {mes: 'Febrero', importe: 1500},
    {mes: 'Marzo', importe: 2000}
];

app.get('/', (req, res) => {
    setImmediate(() => {
        try {
            res.status(200).json({
                reportesVentas: reportesVentas,
                reportesCompras: reportesCompras
            })
        } catch (error) {
            res.status(400).send(error);
        }
    })
})



module.exports = app;