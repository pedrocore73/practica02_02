var express = require('express');
var bodyParser = require('body-parser');

var reportes = require('./routes/reportes');

var app = express();

app.use(bodyParser.json({estrict: false}));
app.use(bodyParser.urlencoded({'extended': 'false'}));

app.use('/reportes', reportes);


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});



