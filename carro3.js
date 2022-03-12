//variaveis carro3
let xCarro3 = 600;
let yCarro3 = 150;
let comprimentoCarro3 = 50;
let larguraCarro3 = 40;
let velocidadeCarro3 = 5


function mostraCarro3(){
  image(imagemCarro3, xCarro3, yCarro3, comprimentoCarro3,      larguraCarro3);
  
}


function movimentaCarro3(){
  xCarro3 -= velocidadeCarro3;
  
}

function voltaPosicaoCarro3(){
  if(xCarro3 < -40){
    xCarro3 = 600
  }
  
}