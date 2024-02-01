 //Criando ArrayList:
 let listaNumerosSorteados = [];
 
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
function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Secret Number Game');
exibirTextoNaTela('p','Guess a numer between 1 and 10: ');
}

exibirMensagemInicial();

//Criando funções:

//Usando o botao GUESS, criando uma funcao nomeada verificarChute
function verificarChute() {           //"function" para criar a função nomeada no HTML
    console.log(numeroSecreto);  //Imprimindo texto no console
}

//Criando função do tipo Boleano
function verificarChute(){
    let chute = document.querySelector('input').value  //input porque é o nome no HTML, .value porque queremos dizer que é um valor nao um texto
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'You got it!');
        exibirTextoNaTela('p', '');
        //habilitando o botão "New Game"/Reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', 'The secret number is higher');
        }else {
            exibirTextoNaTela('p', 'The secret number is lower');
        }
        limparCampo();
    }  
} 

let numeroSecreto = gerarNumAleatorio();

//Criando função com retorno: //Criando funçao para não repetir numAleatorio
function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);    
    
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido); //adicionando novo num escolhido ao final da lista
        console.log(listaNumerosSorteados); //para checar
        return numeroEscolhido;
    }
}
//O método "includes()"" determina se um array contém um determinado elemento, retornando true ou false apropriadamente î

//Limpando a barra com os chutes
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//criando funcao para habilitar o botao "New Game" //Criando novo jogo
function reiniciarJogo(){
    //Chamando as funções que eu quero rodar ao começar novo jogo
    exibirMensagemInicial();
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    //desabilitando o botao Iniciar
    document.getElementById('iniciar').setAttribute('disabled', true);
        
}