// index.js
import verify from './verifyNumber.js';
import random from './random.js';

// Configurações do jogo
const tentativasMaximas = 10;
let tentativas = 0;
const numeroAleatorio = random(1, 100); // Definindo o intervalo de 1 a 100

// Função principal do jogo
function jogar() {
    let numberJogador = parseInt(prompt("Informe um número entre 1 e 100:"), 10);
    
    if (isNaN(numberJogador)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let resultado = verify(numberJogador, numeroAleatorio);

    if (resultado === "igual") {
        alert("Parabéns! Você acertou o número!");
    } else if (tentativas < tentativasMaximas - 1) {
        tentativas++;
        alert(`O número é ${resultado}. Você tem ${tentativasMaximas - tentativas} tentativas restantes.`);
        jogar(); // Chama a função novamente para uma nova tentativa
    } else {
        alert(`Você esgotou todas as suas tentativas. O número era ${numeroAleatorio}.`);
    }
}

// Inicia o jogo
jogar();
