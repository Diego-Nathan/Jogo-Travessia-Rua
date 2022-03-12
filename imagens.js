

let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

let somTrilha;
let somColidiu;
let somPontos;

function preload(){
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage("Imagens/ator-1.png");
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarro4 = loadImage("Imagens/carro-4.png");
  imagemCarro5 = loadImage("Imagens/carro-5.png");
  imagemCarro6 = loadImage("Imagens/carro-6.png");
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColidiu = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav")
  
}