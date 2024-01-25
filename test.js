//Criar uma função que exibe "Olá, mundo!" no console.
function exibirMensagemConsole(){
    console.log('Olá, Mundo!');
}
exibirMensagemConsole();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome){
    console.log(`Olá ${nome}`);
    return nome;
}
exibirNome('sue');

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  let media = calcularMedia(4, 7, 10);
  console.log(media);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);  

