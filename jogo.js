const fechado1 = document.getElementById("fechado1");
const aberto1 = document.getElementById("aberto1");
const fechado2 = document.getElementById("fechado2");
const aberto2 = document.getElementById("aberto2");
const contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");
const buttonPedra = document.getElementById("pedra");
const buttonPapel = document.getElementById("papel");
const buttonTesoura = document.getElementById("tesoura");
const boxEscolhas = document.getElementById("box-escolha");
const rodape = document.getElementById("rodape");
const jogarDnv = document.getElementById("jogar-novamente");
const moedaCaindo = document.getElementById("moeda-caindo");
const zerarPlacar = document.getElementById("zerar-placar");
let placarCpu = document.getElementById("placar-cpu");
let placarVc = document.getElementById("placar-jogador");

let contagem = 3;
let escolhaJogador = null;
let escolhaComputador = null;
let placar1 = 0;
let placar2 = 0;

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
  boxEscolhas.style.pointerEvents = "none";
  contador.textContent = contagem;
  contador.classList.add('animar');
  resultado.style.display = "none";

  const intervalo = setInterval(() => {
    contador.classList.remove('animar');
    void contador.offsetWidth; 
    contagem--;
    
    if (contagem > 0) {
      contador.textContent = contagem;
      contador.classList.add('animar');
      
    } else {
      clearInterval(intervalo);
    

  setTimeout(() => {
    fechado1.classList.remove('shake');
    fechado2.classList.remove('shake');
    resultado.style.display = "grid";


    contador.textContent = "VS"; 
    fechado1.textContent = escolhaJogador.emoji;
    aberto1.textContent = escolhaJogador.texto;
    aberto1.style.color = "#f06bc6"
    aberto2.textContent = escolhaComputador.texto;
    aberto2.style.color = "#6bbdf0"
    fechado2.textContent = escolhaComputador.emoji;

  if (escolhaJogador.texto === escolhaComputador.texto) {
    resultado.textContent = "== EMPATE! ==";
    resultado.classList.add('empate');
    resultado.classList.remove('texto-pisca');
  } else if (
    (escolhaJogador.texto ==="Pedra" && escolhaComputador.texto === "Tesoura") || 
    (escolhaJogador.texto === "Papel" && escolhaComputador.texto === "Pedra") ||
    (escolhaJogador.texto === "Tesoura" && escolhaComputador.texto === "Papel")
  ) {
    resultado.textContent = "** VITORIA! **";
    resultado.classList.add('vitoria');
    resultado.classList.remove('texto-pisca');
    placar1++;
    placarVc.textContent = placar1;
  } else {
    resultado.textContent = "* CPU GANHOU *";
    resultado.classList.add('perda');
    resultado.classList.remove('texto-pisca');
    placar2++;
    placarCpu.textContent = placar2;
  }

  boxEscolhas.style.display = "none";
  jogarDnv.classList.remove("escondido");
  zerarPlacar.classList.remove("escondido");
  }, 500)}}, 900);

}

function jogar() {
    fechado1.textContent = "✊";
    aberto1.textContent = "???";
    aberto2.textContent = "???";
    fechado2.textContent = "✊";
    resultado.textContent ="ESCOLHA SUA JOGADA";
    resultado.classList.remove("empate", "vitoria", "perda");
    resultado.classList.add('texto-pisca');
    boxEscolhas.style.display = "flex";
    jogarDnv.classList.add("escondido");
    zerarPlacar.classList.add("escondido");
    boxEscolhas.style.pointerEvents = "auto";
 }

function zerar() {
  placar1 = 0;
  placar2 = 0;
  placarVc.textContent = placar1;
  placarCpu.textContent = placar2;
};

function moeda() {
moedaCaindo.classList.remove("escondido");
void moedaCaindo.offsetWidth;
setTimeout(() => {
    moedaCaindo.classList.add("escondido");
  }, 800);
}

buttonPedra.addEventListener('click', ativarChacoalho);
buttonPapel.addEventListener('click', ativarChacoalho);
buttonTesoura.addEventListener('click', ativarChacoalho);
zerarPlacar.addEventListener("click", zerar);
jogarDnv.addEventListener("click", jogar);
rodape.addEventListener("click", moeda);
