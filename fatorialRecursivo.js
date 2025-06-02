const prompt = require('prompt-sync')();

function fatorial(n) {
  if (n < 0) {
    throw new Error("ERRO número negativo !");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}
const numeroUsuario = prompt("Digite um número inteiro para calcular o fatorial: ");
const numero = parseInt(numeroUsuario); 

if (isNaN(numero)) {
  console.log("Não é um número válido.");
} else {
  try {
    const resultado = fatorial(numero);
    console.log(`O fatorial de ${numero} é: ${resultado}`);
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }
}