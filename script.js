let gameRows = 6;
let gameColumns = 6;

function createGame (gameRows, gameColumns) {
  for (let i = 0; i < (gameRows * gameColumns); i++){
    let carta = document.createElement('div');
    carta.setAttribute ('class', 'carta')
    $('#game').appendChild(carta);
    console.log ('loop')
  }
  
}
createGame(gameRows, gameColumns);

function $(selector) {
  return document.querySelector(selector);
}