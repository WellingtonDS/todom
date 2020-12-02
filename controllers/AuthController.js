const { Usuario } = require('../models');
const bcrypt = require('bcrypt');
const LoginController = {
    index: async (req, res) => {

        //Capturar email e senha a partir do req.body
        const {email, senha} = req.body;        
        //levantar o usuário que tem este email vindo do req.body
        const usuario = await Usuario.findOne({where:{email}});
        
        // Caso o usuário não exista, retornar erro 400
        if(usuario == null) {
           return res.status(401).json({error:"Falha no login"});
        }
        
        // Valida a senha cadastrada do usuário com a senha enviada
        // Caso a validacão falhe, retornar erro 400
        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json({error:"Falha no login"});
        }
        //
        res.send("login validado!!!");


        // console.log(req.body);
        //     res.send(req.body);
    }
}

module.exports = LoginController;