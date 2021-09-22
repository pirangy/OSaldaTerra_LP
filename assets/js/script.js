
let nome = window.document.getElementById ("nomeCompleto")
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let nomeOk = false
let emailOk = false
let mensagemOk = false

nome.style.width="100%"
email.style.width="100%"
assunto.style.width="100%"

function validaNome(){

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){

        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = 'red'

    } else {
        txtNome.innerHTML="Nome válido!"
        txtNome.style.color = 'green'
        nomeOk = true
    }   

}

function validaEmail() {

    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML="E-mail inválido!"
        txtEmail.style.color='red'
    } else {
        txtEmail.innerHTML="E-mail válido!"
        txtEmail.style.color='green'
        emailOk = true
    }

}

function validaMensagem() {

    let txtMensagem = document.querySelector("#txtMensagem")

    if(mensagem.value.length > 2){

        txtMensagem.innerHTML="Limite de texto excedido. Apenas diga 'oi'."
        txtMensagem.style.color='red'
        txtMensagem.style.display='block'

    } else {
        txtMensagem.style.display='none'
        mensagemOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && mensagemOk == true){
        alert("Formulário enviado com sucesso!")
    } else{
        alert("Erro no envio de formulário. Verifique se todos os campos foram preenchidos corretamente.")
    }
}