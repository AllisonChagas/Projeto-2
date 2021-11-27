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

    let nomeCompleto =  document.querySelector("#ncompleto").innerHTML = "Nome Completo: " + localStorage.nome +" "+ localStorage.sobrenome;
    let sobreNome = document.querySelector("#multiplicacao").innerHTML = "A multiplicação dos Numeros digitados é: " + localStorage.numero * localStorage.numero2;
    
    if ((localStorage.nome & localStorage.sobrenome) & ( localStorage.numero & localStorage.numero2))
        document.getElementById("#ncompleto").value = nomeCompleto;
        document.getElementById("#multiplcacao").value =  sobreNome;
      }