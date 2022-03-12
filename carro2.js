//variaveis carro2
let xCarro2 = 600;
let yCarro2 = 95;
let comprimentoCarro2 = 50;
let larguraCarro2 = 40;
let velocidadeCarro2 = 6.5

function mostraCarro2(){
  image(imagemCarro2, xCarro2, yCarro2, comprimentoCarro2,      larguraCarro2);
  
}


function movimentaCarro2(){
  xCarro2 -= velocidadeCarro2;
  
}

function voltaPosicaoCarro2(){
  if(xCarro2 < -40){
    xCarro2 = 600
  }
  
}