function multiplicar(a, b) {
  console.log("Realizando o cálculo...");
  for (let i = 0; i < 500000000; i++) {}
  return a * b;
}

function memoize(fn) {
  const memoria = {};
  return function (...args) {
    const lembranca = JSON.stringify(args);
    if (memoria[lembranca]) {
      return memoria[lembranca];
    }
    const resultado = fn(...args);
    memoria[lembranca] = resultado;
    return resultado;
  };
}

const multiplicacaoComMemoria = memoize(multiplicar);

console.log("--- 1. Primeira chamada ---");
console.time("Tempo da Chamada 1");
const resultado1 = multiplicacaoComMemoria(123, 456);
console.timeEnd("Tempo da Chamada 1");
console.log(`Resultado: ${resultado1}`);

console.log("\n--- 2. Segunda chamada ---");
console.time("Tempo da Chamada 2");
const resultado2 = multiplicacaoComMemoria(123, 456);
console.timeEnd("Tempo da Chamada 2");
console.log(`Resultado: ${resultado2}`);

console.log("\n--- 3. Terceira chamada ---");
console.time("Tempo da Chamada 3");
const resultado3 = multiplicacaoComMemoria(789, 101);
console.timeEnd("Tempo da Chamada 3");
console.log(`Resultado: ${resultado3}`);
