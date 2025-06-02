const prompt = require('prompt-sync')();

function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
    return false;
  }
 
  if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    return dia <= 31;
  }
  else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    return dia <= 30;
  }
  else { 
      if (ehBissexto(ano)) {
        return dia <= 29; 
      } else {
        return dia <= 28;
      }
  }
}
console.log("Validador de Datas");
const diaInput = prompt("Digite o dia: ");
const mesInput = prompt("Digite o mês: ");
const anoInput = prompt("Digite o ano: ");

const dia = parseInt(diaInput);
const mes = parseInt(mesInput);
const ano = parseInt(anoInput);

if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
    console.log("Erro: Dia, mês e ano devem ser números.");
} else {
    if (ehDataValida(dia, mes, ano)) {
        console.log(` A data ${dia}/${mes}/${ano} é VÁLIDA!`);
    } else {
        console.log(` A data ${dia}/${mes}/${ano} é INVÁLIDA!`);
    }
}