alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100);
console.log(numeroSecreto);
let chute = 1;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');
        // se chute for igual ao número secreto
    if (chute == numeroSecreto) {    
    break;
    } else {
        if (chute > numeroSecreto) {
        alert(`o numero secreto é menor que ${chute}.`);
        } else {
        alert(`o numero secreto é maior que ${chute}.`);
        }
        tentativas++;    
    }
}
let palavraTentativa =tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
