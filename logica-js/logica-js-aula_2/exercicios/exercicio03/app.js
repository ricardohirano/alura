//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeroEscolhido = prompt("Escolhe um numero e sera colocado na tela uma contagem regressiva desse numero" );
while(numeroEscolhido>=0){
    document.write(`${numeroEscolhido} <br>`);
    numeroEscolhido--;
}