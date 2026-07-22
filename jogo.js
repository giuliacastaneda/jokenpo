const jogador = "pedra";

const opcoes = ["pedra", "papel", "tesoura"];

const indice = Math.floor(Math.random() * 3);
const computador = opcoes[indice];

function jogar(jogador, computador) {
  if (jogador === computador) {
    return "Empate!";
  } else if (
    (jogador ==="pedra" && computador === "tesoura") || 
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
  ) {
    return "Jogador venceu!";
  } else {
    return "Computador venceu!";
  }
}

console.log(`Jogador: ${jogador}`);
console.log(`Computador: ${computador}`);
console.log(jogar(jogador, computador));

/* Desafio 1 ⭐

Em vez de escrever:

const jogador = "pedra";

Peça para o usuário escolher usando prompt() (se estiver usando o navegador) ou a biblioteca readline (se estiver no Node.js).

Desafio 2 ⭐⭐

Validar a entrada.

Se o jogador escrever:

banana

O programa deve responder:

Opção inválida!
Desafio 3 ⭐⭐⭐

Criar uma função que escolha a jogada do computador:

function escolhaComputador() {
  // retorna pedra, papel ou tesoura
}

Assim seu código fica mais organizado.

Desafio 4 ⭐⭐⭐⭐

Jogar melhor de 3.

Exemplo:
Rodada 1
Jogador venceu!

Placar:
Jogador 1 x 0 Computador

Rodada 2
Computador venceu!

Placar:
Jogador 1 x 1 Computador

Rodada 3
Empate!

Rodada 4
Jogador venceu!

Jogador campeão!

Nesse desafio você vai praticar laços (while ou for), contadores e variáveis, que são conceitos muito importantes.*/
