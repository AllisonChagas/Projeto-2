function salvarNome(){
    localStorage.setItem("nome", document.querySelector("#nome").value);
}

function recuperarNome(){
    document.querySelector("#nome").value = localStorage.getItem("nome");
}
function salvarSobreNome(){
    localStorage.setItem("sobrenome", document.querySelector("#sobrenome").value);
}
function recuperaSobrenome(){
    document.querySelector("#sobrenome").value = localStorage.getItem("sobrenome");
}

function salvarNumero(){
    localStorage.setItem("numero", document.querySelector("#numero").value);
}

function recuperarNumero(){
    document.querySelector("#numero").value = localStorage.getItem("numero");
}
function salvarNumero2(){
    localStorage.setItem("numero-2", document.querySelector("#numero-2").value);
}
function recuperaNumero2(){
    document.querySelector("#numero-2").value = localStorage.getItem("numero-2");
}

function coletarDadosA(){
    salvarNome();
    salvarNumero();
}
function coletarDadosB(){
    salvarSobreNome();
    salvarNumero2();
}
function recuperarDados(){

    let recuperarNomeCompleto = {

        nomeCompleto:(recuperarNome(this) + "" + recuperaSobrenome(this)),
    
    }
    nomeCompleto();
    
}