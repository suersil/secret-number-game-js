//Manipulando Texto:

//Selecionando código HTML para alteração
    //let titulo = document.querySelector('h1');
//fazendo alterações
    //titulo.innerHTML = 'Secret Number Game';

//Criando a função para Manipular Texto (mais de 1 por x):
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//Passando os valores tag/texto: î
exibirTextoNaTela('h1', 'Secret Number Game');
exibirTextoNaTela('p','Guess a numer between 1 and 10: ');

//Criando funções:

//Usando o botao guess, criando uma funcao nomeada verificarChute
function verificarChute() {           //"function" para criar a função nomeada no HTML
    console.log(numeroSecreto);  //Imprimindo texto no console
}

let numeroSecreto = gerarNumAleatorio();
//Criando função com retorno:
function gerarNumAleatorio() {
    return parseInt(Math.random() * 10 + 1);    
}

//Criando função do tipo Boleano
function verificarChute(){
    let chute = document.querySelector('input').value  //input porque é o nome no HTML, .value porque queremos dizer que é um valor nao um texto
    console.log(chute == numeroSecreto);
}

