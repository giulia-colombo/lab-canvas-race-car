
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const roadImg = new Image();
roadImg.src = "./images/road.png"

const carImg = new Image();
carImg.src = "./images/car.png"

const myObstacles = [];

function drawBackground () {
  ctx.drawImage(roadImg, 0, 0, 500, 700);
}

function drawPlayer () {
  ctx.drawImage(carImg, 235, 640, 30, 60);
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("click")
    drawBackground(); //displays road
    drawPlayer();
  }

  

};

class Car { //we create a player/car and set it at an initial position
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 0;
  }
    
} 