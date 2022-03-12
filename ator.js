//ator
let xAtor = 100;
let yAtor = 366;
let cAtor = 30;
let lAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor,yAtor, 30, 30);
  
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
   yAtor -= 3; 
}
  if(keyIsDown(DOWN_ARROW)){
   if(podeSeMover()){
    yAtor += 3;
   } 
}
  if(keyIsDown(LEFT_ARROW)){
   if(podeSeMoverL()){
    xAtor -= 3;
   }  
}
  if(keyIsDown(RIGHT_ARROW)){
   if(podeSeMoverR()){
    xAtor += 3;
   }  
}
  
}

function verificaColisaoCarro1(){
  colisao = collideRectCircle(xCarro1, yCarro1, 50, 40, xAtor, yAtor, 30)
      if(colisao){
    colidiu();
        somColidiu.play();
        if(meusPontos >0){
        meusPontos -= 1
      }  
  }
}


function verificaColisaoCarro2(){
  colisao = collideRectCircle(xCarro2, yCarro2, 50, 40, xAtor, yAtor, 10)
      if(colisao){
    colidiu();
        somColidiu.play();
      if(meusPontos >0){
        meusPontos -= 1
      }  
  }
}

function verificaColisaoCarro3(){
  colisao = collideRectCircle(xCarro3, yCarro3, 50, 40, xAtor, yAtor, 10)
      if(colisao){
    colidiu();
        somColidiu.play();
      if(meusPontos >0){
        meusPontos -= 1
      }  
    }
}

function verificaColisaoCarro4(){
  colisao = collideRectCircle(xCarro4, yCarro4, 50, 40, xAtor, yAtor, 10)
      if(colisao){
    colidiu();
        somColidiu.play();
      if(meusPontos >0){
        meusPontos -= 1
      }  
    }
}

function verificaColisaoCarro5(){
  colisao = collideRectCircle(xCarro5, yCarro5, 50, 40, xAtor, yAtor, 10)
      if(colisao){
    colidiu();
        somColidiu.play();
     if(meusPontos >0){
        meusPontos -= 1
      }  
    }
}

function verificaColisaoCarro6(){
  colisao = collideRectCircle(xCarro6, yCarro6, 50, 40, xAtor, yAtor, 10)
  
    if(colisao){
    colidiu();
      somColidiu.play();
        if(meusPontos >0){
        meusPontos -= 1
          somColidiu.play();
      }  
    }
}
    function colidiu(){
       
  yAtor = 366
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,1240,0);
  text(meusPontos, width / 5, 27)
}

function marcaPonto(){
  
  if(yAtor < 15){
    meusPontos += 1
    colidiu()
    somPontos.play();
  }
  
}

function podeSeMover(){
  return yAtor < 366
}

function podeSeMoverL(){
  return xAtor > 0
}

function podeSeMoverR(){
  return xAtor < 575
}