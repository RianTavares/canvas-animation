let sit = 1;
let cv;
let ctx;
const cores = ["red", "blue", "black", "white", "yellow", "green", "gray", "orange"];
let voltas;
const speed = 10;
var pos = {x: 0, y: 0};
let corSelecionada = cores[1];


const Iniciar = () => {
    cv = document.getElementById("bonecoCanvas");
    ctx = cv.getContext("2d");

    voltas = Math.floor(Math.random() * (8 - 3 + 1) + 3); //numero de voltas random entre 2 e 8
    document.getElementById("voltas").innerHTML=voltas;
    
}

const IniciaVoltas = () => {

    const interval = setInterval(() => {
        if (voltas === 0) clearInterval(interval)
        pos.x+=speed;
        AtualizaCanvas();
       }, 100)

}

const AtualizaCanvas = () => {
    ctx.clearRect(0,0, cv.width, cv.height);

    ctx.rect(0, 0, cv.width, cv.height);
    ctx.fillStyle = corSelecionada;
    ctx.fill();

    let image = document.getElementById("imgBon"+sit);
    ctx.drawImage(image, pos.x, pos.y, 50, 50);

   if(sit==1) {
    sit=2;
   } else if(sit==2) {
    sit=3;
   } else if(sit==3) {
    sit=1;
   }

   if(pos.x + speed > cv.width - 50){
    pos.x = 0;
    voltas--;
    document.getElementById("voltas").innerHTML=voltas;
    AlteraCor();
    }
}

const AlteraCor = () => {
    const posicaoCor = Math.floor(Math.random() * (8));
    corSelecionada = cores[posicaoCor];
}