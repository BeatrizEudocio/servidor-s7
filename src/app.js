const express = require ('express');
const app = express();

//importar os arquivos de rota

const index = require('./route/index');
const signos = require('./route/signosRoute')

// --

app.use((req, res, next) =>  {
    console.log('Nova requisicao realizada viu?');

    next()
});

// depois 

app.use('/', index);
app.use('/signos', signos);


module.exports = app;


