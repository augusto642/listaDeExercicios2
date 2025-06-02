const vendas = [
  { cliente: "Ana", total: 200 },
  { cliente: "Joao", total: 350 },
  { cliente: "Ana", total: 150 },
  { cliente: "Maria", total: 500 },
  { cliente: "Joao", total: 100 },
  { cliente: "Ana", total: 50 },
  { cliente: "Jose", total: 70 },
  { cliente: "Carol", total: 150 },
  { cliente: "Marcelo", total: 300 },
];

function agruparVendasComFor(vendas) {
  const totaisPorCliente = {};

  for (const venda of vendas) {
    const cliente = venda.cliente;

    if (totaisPorCliente[cliente]) {
      totaisPorCliente[cliente] += venda.total;
    } else {
      totaisPorCliente[cliente] = venda.total;
    }
  }

  return totaisPorCliente;
}

const resultadoFinal = agruparVendasComFor(vendas);

console.log(resultadoFinal);
