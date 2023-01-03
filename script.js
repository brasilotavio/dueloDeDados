var jogadorUmVitorias = 0, jogadorDoisVitorias = 0;

//atualizando os valores de saldo na tela
document.querySelector(".jogadorUmVitorias").innerText = jogadorUmVitorias; 
document.querySelector(".jogadorDoisVitorias").innerText = jogadorDoisVitorias; 

function sortearDados(){
//muda o titulo h1 para "Jogando"
var audio = new Audio("sounds/somdado.mp3");
audio.play();

//variaveis que armazenarao os numeros aleatorios 
let num1 = sortearNumero();
let num2 = sortearNumero();

//as strings dos dados que conduzirao o html a imagem correspondente ao numero sorteado
let dice = "images/dice" + num1 + ".png"; 
let dice2 = "images/dice" + num2 + ".png"; 

//transformando as tags img em variaveis selecionaveis
let image1 = document.querySelector(".imgUm");
let image2 = document.querySelector(".imgDois");

//adicionando classe ao elemento transformado em variavel
image1.classList.add("jogarEsquerdo");
image2.classList.add("jogarDireito");

let resultado = document.querySelector("#ganhador");

//funcao para limitar o tempo de execucao da animacao
setTimeout(function() {
   image1.classList.remove("jogarEsquerdo");
   image2.classList.remove("jogarDireito");
   resultado.innerText = ganhador();
    //atualizando os valores de saldo na tela
    document.querySelector(".jogadorUmVitorias").innerText = jogadorUmVitorias; 
    document.querySelector(".jogadorDoisVitorias").innerText = jogadorDoisVitorias; 
    //alterando o atributo src da tag transformada em variavel
   image1.setAttribute("src", dice);
   image2.setAttribute("src", dice2);
   }, 1545)

   resultado.innerText = ' ';

//funcoes
function sortearNumero() {
   return Math.floor(Math.random()*6+1);
}

function ganhador() {

   if (num1 > num2) {
      jogadorUmVitorias += 1;
      return ("Jogador 1 ganhou!");
   }

   if (num2 > num1) {
      jogadorDoisVitorias += 1;
      return ("Jogador 2 ganhou!");
   }
   
   return ("Empate!");
}

}
