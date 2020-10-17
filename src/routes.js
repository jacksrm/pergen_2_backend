const express = require('express');
const PermutationController = require('./controllers/PermutationController');

const routes = express.Router();

routes.get('/', (req,res) => console.log('METODO GET'));
routes.post('/permutation', PermutationController.index);

module.exports = routes;  