//Importar o express
const express = require('express');

//Criar o roteador [express.router()]
const router = express.Router();
// importando o Authcontroller
const AuthController = require('../controllers/AuthController');

//fazer com que o roteador responda qualquer coisa para as req
//do tipo post para  o endereco /login.
router.post('/login', AuthController.index);

//exportar o roteador
module.exports = router;



