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

//////////////////////

const fechado1 = document.getElementById("fechado1");
const aberto1 = document.getElementById("aberto1");
const fechado2 = document.getElementById("fechado2");
const aberto2 = document.getElementById("aberto2");
const contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");
const buttonPedra = document.getElementById("pedra");
const buttonPapel = document.getElementById("papel");
const buttonTesoura = document.getElementById("tesoura");
let escolhaComputador = null;
let contagem = 3;
let escolhaJogador = null; 

const escolhas = {
  pedra: {
    emoji: "👊",
    texto: "Pedra"
  },
  papel: {
    emoji: "✋",
    texto: "Papel"
  },
  tesoura: {
    emoji: "✌️",
    texto: "Tesoura"
  }
};

function ativarChacoalho(e) {

  const botaoClicado = e.currentTarget.id;
  escolhaJogador = escolhas[botaoClicado];

  const opcoes = Object.keys(escolhas);
  const indice = Math.floor(Math.random() * opcoes.length);

  escolhaComputador = escolhas[opcoes[indice]];
  contagem = 3; 

  fechado1.classList.add('shake');
  fechado2.classList.add('shake');
  
  contador.textContent = contagem;
  contador.classList.add('animar');

  const intervalo = setInterval(() => {
    contador.classList.remove('animar');
    void contador.offsetWidth; 
    contagem--;

    if (contagem > 0) {
      contador.textContent = contagem;
      contador.classList.add('animar');
    } else {
      clearInterval(intervalo);
      contador.textContent = "VS"; 
      contador.classList.add('animar');}

  setTimeout(() => {
    fechado1.classList.remove('shake');
    fechado2.classList.remove('shake');
    
    fechado1.textContent = escolhaJogador.emoji;
    aberto1.textContent = escolhaJogador.texto;
    aberto2.textContent = escolhaComputador.texto;
    fechado2.textContent = escolhaComputador.emoji;
    }, 1800)}, 1000);

}

buttonPedra.addEventListener('click', ativarChacoalho);
buttonPapel.addEventListener('click', ativarChacoalho);
buttonTesoura.addEventListener('click', ativarChacoalho);

