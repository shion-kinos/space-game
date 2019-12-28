let game = document.querySelector("#game");
let context = game.getContext("2d");
context.imageSmoothingEnabled = false;

let width = game.width;
let height = game.height;


function addGameEvents(eventList) {
  eventList.forEach((event) => {
    game.addEventListener(event, gameAction);
  });
}
