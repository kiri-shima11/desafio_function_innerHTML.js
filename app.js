let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do desafio.';

function verificarChute(){
    console.log('O botão do chute foi clicado.');
}

function verificarConsole() {
    console.log('O botão do console foi clicado.');
}

function verificarAlerta(){
    alert('O botão do alerta foi clicado e eu amo JS');
}

let cidade; 

function verificarPrompt(){
    cidade = prompt('Digite uma cidade do Brasil.');
    alert(`Estive em ${cidade} e lembrei de você`);
}

let soma1;
let soma2;

function verificarSoma(){
    soma1 = Number(prompt('Digite um número inteiro'));
    soma2 = Number(prompt('Digite um número inteiro'));
    
    alert(soma1 + soma2);
}

function verificarTeste(){
    alert ('Isso é um teste');
}
