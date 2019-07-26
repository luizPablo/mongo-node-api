const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/mongoapi', { useNewUrlParser: true });
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

//Rodando na porta 3001
app.listen(3001);