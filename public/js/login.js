// Capturar elemenstos das páginas em constantes: tfEmail, tfSenha, tfLogin 
const tfEmail = document.getElementById("email");
const tfSenha = document.getElementById("senha");
const btLogin = document.getElementById("btnLogin");
const formLogin = document.getElementById("formLogin");

//verificando se capturou os tr^es elementos
console.log(tfEmail, tfSenha,btLogin);

// Criem uma function login que submeta uma string jason
// na forma ("email":___. "senha":___ via post para a rota "login")
const login = (email, senha) => {

    //construir a string json que vai ser enviada.
    let strJson = JSON.stringify({email, senha});
    
    //enviar requisicão..
    fetch("/login",{
        method:"Post",
        body:strJson,
        headers: {
            "Content-Type":"application/json"
        }
    });
}

// associar a execucão da fincão login a submissão do formulário formLogin

//  btLogin.addEventListener(
//      "click",
//      () => {
//          login(tfEmail.Value, tfSenha.value);
//      }
//  )

formLogin.addEventListener(
    "submit",
    (evt) => {
        evt.preventDefault();
        login(tfEmail.value, tfSenha.value);
    }
)   