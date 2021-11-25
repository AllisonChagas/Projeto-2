function salvarNome(){
    localStorage.nome = document.querySelector("#nome").value;
}

function salvarSobreNome(){
    localStorage.sobrenome = document.querySelector("#sobrenome").value;
}

function salvarNumero(){
    localStorage.numero = document.querySelector("#numero").value;
}

function salvarNumero2(){
    localStorage.numero2 = document.querySelector("#numero-2").value;
}


function coletarDadosA(){
    salvarNome();
    salvarNumero();
}
function coletarDadosB(){
    salvarSobreNome();
    salvarNumero2();
}

function recuperarDados() {
        document.querySelector(this);
      }
      
    let dados = {
        nomeCompleto: document.querySelector("#ncompleto").innerHTML = "Nome Completo: " + localStorage.nome +" "+ localStorage.sobrenome,
        multiplicacao: document.querySelector("#multiplicacao").innerHTML = "A multiplicação dos Numeros digitados é: " + localStorage.numero * localStorage.numero2,
    }


let mostrarDados = recuperarDados.bind(dados);
mostrarDados()

