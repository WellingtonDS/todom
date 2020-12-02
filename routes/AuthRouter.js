//Importar o express
const express = require('express');

//Criar o roteador [express.router()]
const router = express.Router();

//fazer com que o roteador responda qualquer coisa para as req
//do tipo post para  o endereco /login.
router.post('/login', (req, res) => {
    res.send("olá")
});

//exportar o roteador
module.exports = router;



