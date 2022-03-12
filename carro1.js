
//variaveis carro1
let xCarro1 = 600;
let yCarro1 = 40;
let comprimentoCarro1 = 50;
let larguraCarro1 = 40;
let velocidadeCarro1 = 8.5

function mostraCarro1(){
  image(imagemCarro1, xCarro1, yCarro1, comprimentoCarro1,      larguraCarro1);
  
}


function movimentaCarro1(){
  xCarro1 -= velocidadeCarro1;
  
}

function voltaPosicaoCarro1(){
    if(xCarro1 < -40){
    xCarro1 = 600
  }
  
}