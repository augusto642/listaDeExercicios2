const prompt = require('prompt-sync')();

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let numero;

console.log("--- Jogo de Adivinhação ---");
console.log("Adivinhe um numero entre 1 e 100.");

while (numero !== numeroAleatorio) {

  const numeroInput = prompt("Qual o seu palpite? ");
  numero = parseInt(numeroInput);

  tentativas++;

  if (isNaN(numero) || numero < 1 || numero > 100) {
    console.log("Digite um número entre 1 e 100.");
    continue;
  }

  if (numero < numeroAleatorio) {
    console.log(" Mais alto! Tente novamente.");
  } else if (numero > numeroAleatorio) {
    console.log(" Mais baixo! Tente novamente.");
  }
}

console.log("\n Parabéns! Você acertou!");
console.log(`O número secreto era ${numeroAleatorio}.`);
console.log(`Você acertou em ${tentativas} tentativas.`);