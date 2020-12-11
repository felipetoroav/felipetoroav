const GAME_ROWS = 6;
const btn18 = document.getElementById('btn18');
const btn24 = document.getElementById('btn24');
const btn30 = document.getElementById('btn30');
const imgs = [
  '<img src="./imgs/magic.png" alt="Magia"></img>',
  '<img src="./imgs/bat.png" alt="Murcielago">',
  '<img src="./imgs/bear.png" alt="Oso">',
  '<img src="./imgs/cat.png" alt="Gato">',
  '<img src="./imgs/dolphin.png" alt="Delfin">',
  '<img src="./imgs/elephant.png" alt="Elefante">',
  '<img src="./imgs/flamingo.png" alt="Flamenco">',
  '<img src="./imgs/frog.png" alt="Rana">',
  '<img src="./imgs/giraffe.png" alt="Jirafa">',
  '<img src="./imgs/koala.png" alt="Koala">',
  '<img src="./imgs/owl.png" alt="Buho">',
  '<img src="./imgs/penguin.png" alt="Pinguino">',
  '<img src="./imgs/pig.png" alt="Cerdo">',
  '<img src="./imgs/snake.png" alt="Serpiente">',
  '<img src="./imgs/wolf.png" alt="Lovo">',
  '<img src="./imgs/bee.png" alt="Aveja"></img>'  
]

function $(selector) {
  return document.querySelector(selector);
}

class Game {
  constructor (gameSize) {
    this.imgs = imgs
    this.array_imgs = []
    this.createGame (gameSize)
    this.generate_array_imgs (gameSize)
    console.log (this.imgs)
    console.log (this.array_imgs)
  }

  createGame (gameSize) {
    
    // debugger
    for (let i = 0; i < (GAME_ROWS * gameSize); i++){
      let carta_container = document.createElement('div');
      carta_container.setAttribute ('id', 'carta_container' + i)
      carta_container.setAttribute ('class', 'carta_container')
      $('#game').appendChild(carta_container);

      for (let j = 0; j <= 1; j++) {
        let carta = document.createElement('span');
        carta.setAttribute ('id', 'carta' + j);
        carta.setAttribute ('class', 'carta');
        $('#carta_container' + i).appendChild(carta);
        // console.log ('loop inside')
      }
    }  
  }
  
  generate_array_imgs (gameSize) {
    // debugger
    let random_imgs, face;
    for (let i = 1; i <= ((gameSize * GAME_ROWS) / 2); i++) {
      random_imgs =  Math.floor(Math.random() * (imgs.length - 1) + 1)
      face = this.imgs[random_imgs]
      this.array_imgs.push(face)
      this.array_imgs.push(face)
      this.imgs.splice(random_imgs, 1)
    } 
  }


}

function startGame (gameSize) {
  window.game = new Game (gameSize);
}