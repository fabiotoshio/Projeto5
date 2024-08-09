let palavra;
let imagem;
let musics;

function preload(){
imagem = loadImage("madagascar.webp");
  musica = loadSound("musica.mp3")
}


function setup() {
  createCanvas(600, 600);
palavra = chupeta();
  musica.loop();
}

function draw() {
image(imagem,50,200,600,400);
batata();
mussi();
chupeta();
}

function batata(){
background("blue");
  fill("white");
  textSize(70);
  textAlign(CENTER,CENTER);
}
 
function mussi(){
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300,300);
}

function chupeta(){
   let palavras = ["bicho do mato","xerecosario","bumba","gargamel"];
return random(palavras);
}
