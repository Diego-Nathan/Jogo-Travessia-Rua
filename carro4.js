//variaveis carro4
let xCarro4 = 600;
let yCarro4 = 210;
let comprimentoCarro4 = 50;
let larguraCarro4 = 40;
let velocidadeCarro4 = 8;


function mostraCarro4(){
  image(imagemCarro4, xCarro4, yCarro4, comprimentoCarro4,      larguraCarro4);
  
}


function movimentaCarro4(){
  xCarro4 -= velocidadeCarro4;
  
}

function voltaPosicaoCarro4(){
  if(xCarro4 < -40){
    xCarro4 = 600
  }
  
}