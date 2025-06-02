const fruteira = [
  { nome: "Maçã", preco: 8.99 },
  { nome: "Banana", preco: 5.5 },
  { nome: "Abacate", preco: 7.8 },
  { nome: "Limão", preco: 4.9 },
  { nome: "Uva", preco: 12.5 },
];

function criarListaDePrecos(produtos) {
  return [...produtos]
    .sort((a, b) => a.preco - b.preco)
    .map((produto) => `${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
}

const listaDePrecos = criarListaDePrecos(fruteira);

console.log(listaDePrecos);
