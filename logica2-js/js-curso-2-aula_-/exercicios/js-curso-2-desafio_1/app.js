//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let tag = document.querySelector('h1');
tag.innerHTML = 'Hora do Desafio';
//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function consoleButton(){
    console.group('o botao foi clicado');
}
//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function alertButton(){
    alert('Eu amo JS');
}
//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function promptButton(){
    let cidade = prompt('Escreva o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`);
}
//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function somaButton(){
    let resultado ="";
    var vlr1 = parseFloat(prompt('digite um numero'));
    var vlr2 = parseFloat(prompt('Digite o segundo numero'));
    resultado = vlr1+vlr2;
    alert(`O resultado da soma entre ${vlr1} e ${vlr2} é ${resultado}`);
}