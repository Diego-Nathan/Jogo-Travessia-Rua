function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro1();
  mostraCarro2();
  mostraCarro3();
  mostraCarro4();
  mostraCarro5();
  mostraCarro6();
  
  movimentaCarro1();
  movimentaCarro2();
  movimentaCarro3();
  movimentaCarro4();
  movimentaCarro5();
  movimentaCarro6();
  
  voltaPosicaoCarro1();
  voltaPosicaoCarro2();
  voltaPosicaoCarro3();
  voltaPosicaoCarro4();
  voltaPosicaoCarro5();
  voltaPosicaoCarro6();
  
  movimentaAtor();
  
  verificaColisaoCarro1();
  verificaColisaoCarro2();
  verificaColisaoCarro3();
  verificaColisaoCarro4();
  verificaColisaoCarro5();
  verificaColisaoCarro6();
  
  incluiPontos();
  marcaPonto();
  
}





  

