console.log("Formato de Objeto");
const frutas = {
  Maçã: 80,
  Banana: 120,
  Laranja: 95,
  Abacaxi: 30,
};
console.log(frutas);

function objetoParaPares(obj) {
  return Object.entries(obj);
}

console.log("\nConvertendo para uma Lista de Pares");
const listaDeInventario = objetoParaPares(frutas);
console.log(listaDeInventario);

function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

console.log("\nConvertendo a Lista de volta para um Objeto");
const objetoRestaurado = paresParaObjeto(listaDeInventario);
console.log(objetoRestaurado);
