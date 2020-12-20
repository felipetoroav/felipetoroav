const GAME_ROWS = 6;
const btn18 = document.getElementById('btn18');
const btn24 = document.getElementById('btn24');
const btn30 = document.getElementById('btn30');
const menu = document.getElementsByClassName('game-config');
const aciertos = document.getElementById('aciertos_seguidos');
const errores = document.getElementById('errores');
const puntaje = document.getElementById('puntaje');
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
    this.first_card
    this.second_card
    this.first_cont
    this.second_cont
    this.gameSize = gameSize
    this.selected_cards = 0
    this.acierto_seguido = 0
    this.aciertos_seguidos = 0
    this.errores = 0
    this.puntaje = 0
    this.imgs = imgs
    this.array_imgs = []
    this.createGame ()
  }

  createGame () {
    this.generateArrayImgs ()
    this.hideMenu ()
    this.chooseCard = this.chooseCard.bind(this)
    for (let i = 0; i < (GAME_ROWS * this.gameSize); i++){
      let card_container = document.createElement('div');
      card_container.setAttribute ('id', 'card_container' + i)
      card_container.setAttribute ('data-position', this.array_imgs[i])
      card_container.setAttribute ('data-container', i)
      card_container.setAttribute ('class', 'card_container')
      $('#game').appendChild(card_container)
      this.addClickEvents (i)

      for (let j = 0; j <= 1; j++) {
        let card = document.createElement('span')
        let icon = document.createElement('img')
        if (j === 0) {
          card.setAttribute ('class', 'back')
          card.setAttribute ('style', 'background-image: url(' + this.imgs[0] + ');')
          card.setAttribute ('data-position', this.array_imgs[i])
          card.setAttribute ('data-container', i)
        } else {
          card.setAttribute ('class', 'front')
          card.setAttribute ('class', 'hiden')
          card.setAttribute ('data-position', this.array_imgs[i])
          card.setAttribute ('data-container', i)
          card.setAttribute ('style', 'background-image: url(' + this.array_imgs[i] + ');')
        }
        $('#card_container' + i).appendChild(card)
      }
    }
  }

  generateArrayImgs () {
    let random_imgs, face;
    for (let i = 1; i <= ((this.gameSize * GAME_ROWS) / 2); i++) {
      random_imgs =  Math.floor(Math.random() * (imgs.length - 1) + 1)
      face = this.imgs[random_imgs]
      this.array_imgs.push(face)
      this.array_imgs.push(face)
      this.imgs.splice(random_imgs, 1)
      this.array_imgs.sort(() => Math.random() - 0.5)
    }
  }

  hideMenu () {
    document.getElementById('menu').classList.add('hiden')
  }


  // addClickEvents () {
  //   for (let i = 0; i < (GAME_ROWS * this.gameSize); i++) {
  //     document.getElementById('card_container' + i).addEventListener('click', this.chooseCard)
  //   }
  // }

  addClickEvents (card) {
    document.getElementById('card_container' + card).addEventListener('click', this.chooseCard)
  }

  removeClickEvents (card) {
      document.getElementById('card_container' + card).removeEventListener('click', this.chooseCard)
  }

  showCard (card) {
    document.getElementById('card_container' + card).firstChild.classList.add('hiden')
    document.getElementById('card_container' + card).lastChild.classList.remove('hiden')
  }
  hideCard (card) {
    document.getElementById('card_container' + card).firstChild.classList.remove('hiden')
    document.getElementById('card_container' + card).lastChild.classList.add('hiden')
  }

  chooseCard (ev) {
    switch (game.selected_cards) {
      case 0:
        this.first_card = ev.target.dataset.position
        this.first_cont = ev.target.dataset.container
        this.showCard (this.first_cont)
        game.selected_cards++
        break

        case 1:
        this.second_card = ev.target.dataset.position
        this.second_cont = ev.target.dataset.container
        this.removeClickEvents (this.first_cont)
        this.showCard (this.second_cont)
        if (this.first_card === this.second_card) {
          this.removeClickEvents (this.second_cont)
          this.acierto_seguido++
          this.puntaje++
          puntaje.innerHTML = this.puntaje
          if (this.acierto_seguido == 2) {
            this.aciertos_seguidos++
            this.puntaje += 5
            aciertos.innerHTML = this.aciertos_seguidos
            puntaje.innerHTML = this.puntaje
            this.acierto_seguido = 1
          }
        } else {
          this.addClickEvents (this.first_cont)
          setTimeout (() => {this.hideCard (this.first_cont)}, 1000)
          setTimeout (() => {this.hideCard (this.second_cont)}, 1000)
          this.acierto_seguido = 0
          this.errores++
          errores.innerHTML = this.errores
        }
          game.selected_cards =0
      break
    }


  }


}

function startGame (gameSize) {
  window.game = new Game (gameSize);
}