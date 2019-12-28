let center = {
  x: width / 2,
  y: height / 2
};


let ship;


addGameEvents(["mousedown", "mouseup"]);


let images = {
  ship: "ship.svg",
  ship_on: "ship on.svg"
};

function loadImage(src) {
  return new Promise(resolve => {
    let image = new Image;
    image.src = src;
    image.addEventListener("load", () => {
      resolve(image);
    });
  });
}

let textures = {};

let keys = Object.keys(images);
function loadTextures(i) {
  if (typeof keys[i] === "undefined") {
    loadGame();
    return;
  }
  loadImage(images[keys[i]]).then((value) => {
    textures[keys[i]] = value;
    loadTextures(i + 1);
  });
}

loadTextures(0);


function loadGame() {
  ship = {
    state: false,
    texture: {
      off: textures.ship,
      on: textures.ship_on
    }
  };
  startGame();
}


function startGame() {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);
  context.drawImage(ship.texture.off, center.x - 32, center.y - 32, 64, 64);
}


function gameAction(event) {
  context.clearRect(0, 0, width, height);
  context.fillRect(0, 0, width, height);
  if (ship.state) {
    context.drawImage(ship.texture.off, center.x - 32, center.y - 32, 64, 64);
    ship.state = false;
  } else {
    context.drawImage(ship.texture.on, center.x - 32, center.y - 32, 64, 64);
    ship.state = true;
  }
}
