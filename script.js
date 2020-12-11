const GAME_ROWS = 6;
const btn18 = document.getElementById('btn18');
const btn24 = document.getElementById('btn24');
const btn30 = document.getElementById('btn30');
const imgs = [
  "./imgs/magic.png",
  "./imgs/bat.png",
  "./imgs/bear.png",
  "./imgs/cat.png",
  "./imgs/dolphin.png",
  "./imgs/elephant.png",
  "./imgs/flamingo.png",
  "./imgs/frog.png",
  "./imgs/giraffe.png",
  "./imgs/koala.png",
  "./imgs/owl.png",
  "./imgs/penguin.png",
  "./imgs/pig.png",
  "./imgs/snake.png",
  "./imgs/wolf.png",
  "./imgs/bee.png"  
]

function $(selector) {
  return document.querySelector(selector);
}

class Game {
  constructor (gameSize) {
    this.imgs = imgs
    this.array_imgs = []
    this.generate_array_imgs (gameSize)
    this.disorganize_array_imgs ()
    this.createGame (gameSize)
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
        // debugger
        let carta = document.createElement('span');
        let icon = document.createElement('img');
        carta.setAttribute ('class', 'carta');
        if (j === 0) {
          icon.src = this.imgs[0]
        } else {
          icon.src = this.array_imgs[i]
          console.log (this.array_imgs[i])
        }
        $('#carta_container' + i).appendChild(carta);
        carta.appendChild(icon)
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

  disorganize_array_imgs () {
    this.array_imgs.sort(() => Math.random() - 0.5)
    console.log(this.array_imgs)
  }

  // assign_cards () {
  //   for (let i = 0; i < ((gameSize * GAME_ROWS) / 2); i++) {
  //     let carta = document.getElementById('carta0')
  //   }
  // }


}

function startGame (gameSize) {
  window.game = new Game (gameSize);
}