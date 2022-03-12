//variaveis carro6
let xCarro6 = 600;
let yCarro6 = 317;
let comprimentoCarro6 = 50;
let larguraCarro6 = 40;
let velocidadeCarro6 = 6.5;


function mostraCarro6(){
  image(imagemCarro6, xCarro6, yCarro6, comprimentoCarro6,      larguraCarro6);
  
}


function movimentaCarro6(){
  xCarro6 -= velocidadeCarro6;
  
}

function voltaPosicaoCarro6(){
  if(xCarro6 < -40){
    xCarro6 = 600
  }
  
}