const prompt = require("prompt-sync")();

function encontrarUnicas(frase) {
  const palavrasUnicas = [];
  const palavrasVistas = [];

  if (!frase) {
    return palavrasUnicas;
  }

  const todasAsPalavras = frase.toLowerCase().split(" ");

  for (const palavra of todasAsPalavras) {
    if (palavra === "") {
      continue;
    }

    if (!palavrasVistas[palavra]) {
      palavrasUnicas.push(palavra);
      palavrasVistas[palavra] = true;
    }
  }

  return palavrasUnicas;
}

const frase = "olá olá mundo mundo bem vindo ao mundo";

const resultado = encontrarUnicas(frase);

console.log("Frase original:", frase);
console.log("Palavras únicas:", resultado);
