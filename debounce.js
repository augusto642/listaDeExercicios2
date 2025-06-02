function debounce(fn, delay) {
    let timer;
    return function() {
        console.log('Reiniciando o cronômetro');
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
}

function mostrarMensagemFinal() {
    console.log('\nMENSAGEM: Operação Concluida!');
}

const exibirMensagemControlada = debounce(mostrarMensagemFinal, 2000);

console.log('exibir a mensagem 3 vezes');

setTimeout(() => {
    console.log('\nChamada 1');
    exibirMensagemControlada();
}, 500);

setTimeout(() => {
    console.log('\nChamada 2');
    exibirMensagemControlada();
}, 1000);

setTimeout(() => {
    console.log('\nChamada 3');
    exibirMensagemControlada();
}, 1500);