alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = 1;
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
        alert(`o numero secreto é menor que ${chute}.`);
        } else {
        alert(`o numero secreto é maior que ${chute}.`);
        }
        
    }
}