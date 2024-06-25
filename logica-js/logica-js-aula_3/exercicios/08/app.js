//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
var numero = parseFloat(prompt('digite um numero'));
if(numero<0){
    document.write('o numero é negativo.');
} else if(numero>0){
    document.write('o numero é positivo diferente de zero.');
} else {
    document.write('o numero digitado é zero(0).')
}
