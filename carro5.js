//variaveis carro5
let xCarro5 = 600;
let yCarro5 = 263;
let comprimentoCarro5 = 50;
let larguraCarro5 = 40;
let velocidadeCarro5 = 7.6;


function mostraCarro5(){
  image(imagemCarro5, xCarro5, yCarro5, comprimentoCarro5,      larguraCarro5);
  
}


function movimentaCarro5(){
  xCarro5 -= velocidadeCarro5;
  
}

function voltaPosicaoCarro5(){
  if(xCarro5 < -40){
    xCarro5 = 600
  }
  
}