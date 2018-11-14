let red = {
  div: document.getElementById("red"),
  name: "Red Box"
}

let blue = {
  div: document.getElementById("blue"),
  name: "Blue Box"
}

activateButtons = () => {
  document.getElementById('play').onclick = () => {
      red.div.setAttribute('class', 'visable');
      blue.div.setAttribute('class', 'visable');
      startGame();
  };
};

startGame = () => {
  red.div.style.left = 0;
  blue.div.style.left = 0;

  document.getElementById("play").className = "";

  document.onkeydown = (key) => {
      red.position = parseInt(red.div.style.left, 10);
      blue.position = parseInt(blue.div.style.left, 10);
      checkWinner();
      movePlayer(key);
  };
};

checkWinner = () => {
  if (red.position + red.div.offsetWidth >= window.innerWidth - 40) {
      setWinState(red);
  };
  if (blue.position + blue.div.offsetWidth >= window.innerWidth - 40) {
      setWinState(blue);
  };
};

movePlayer = (key) => {
  switch (key.which) {
      case 39: // press right arrow
          let newRedPosition = red.position += 40;
          red.div.style.left = newRedPosition + "px";
          break;
      case 90: // press Z
          let newBluePosition = blue.position += 40;
          blue.div.style.left = newBluePosition + "px";
          break;
  };
};

setWinState = (player) => {
  document.onkeydown = null;
  let img = document.createElement("img");
  img.setAttribute("id", "win");
  img.src = "https://media.giphy.com/media/peAFQfg7Ol6IE/giphy.gif";
  document.getElementById("container").appendChild(img);
  document.getElementsByTagName("h1")[0].innerText = player.name + " Wins!!!!";
}

activateButtons();

  