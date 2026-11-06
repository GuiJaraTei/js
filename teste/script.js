const { createElement } = require("react")

function entrar(){
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    var res = document.getElementById('res')
    var ResUsu = 'jara'
    var ResSenha = 'teixeira'
    
    if (usuario == ResUsu && senha == ResSenha){
        window.location.href = 'index.html'
      
    }else{
        res.innerHTML = 'usuario ou senha invalido'
        res.style.color = 'red'
        
    }
}

