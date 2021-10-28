const jakuyitto = document.querySelectorAll(".cell_mains");
const gameInfo = document.getElementById("info_game");
const gameRest = document.getElementById("rest_game");
const body = document.querySelector("body");
const music1 = new Audio("1.mp3");
const music2 = new Audio("2.mp3");

let gameLive = true;
let xIsNExt = true;
let xSymbol = "X";
let oSymbol = "O";

//game Checker

const chekerInfo = (checkig) => (checkig === "x" ? xSymbol : oSymbol);
const allGameChecker = (latter) => {
  gameLive = false;
  if (latter === "x") {
    gameInfo.innerHTML = `${chekerInfo(latter)} golib boldi`;
  } else {
    gameInfo.innerHTML = `${chekerInfo(latter)} golib boldi`;
  }
};

// Game Logic

// Game Tester
const gameTester = () => {
  const topLeft = jakuyitto[0].classList[1];
  const topMiddle = jakuyitto[1].classList[1];
  const topRight = jakuyitto[2].classList[1];
  const middleLeft = jakuyitto[3].classList[1];
  const middleMiddle = jakuyitto[4].classList[1];
  const middleRight = jakuyitto[5].classList[1];
  const bottomLeft = jakuyitto[6].classList[1];
  const bottomMiddle = jakuyitto[7].classList[1];
  const bottomRight = jakuyitto[8].classList[1];

  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    allGameChecker(topLeft);
    body.classList.add("won");
    jakuyitto[0].classList.add("win");
    jakuyitto[1].classList.add("win");
    jakuyitto[2].classList.add("win");
  } else if (
    middleLeft &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    allGameChecker(middleLeft);
    body.classList.add("won");
    jakuyitto[3].classList.add("win");
    jakuyitto[4].classList.add("win");
    jakuyitto[5].classList.add("win");
  } else if (
    bottomLeft &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    allGameChecker(bottomLeft);
    body.classList.add("won");
    jakuyitto[6].classList.add("win");
    jakuyitto[7].classList.add("win");
    jakuyitto[8].classList.add("win");
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    allGameChecker(topLeft);
    body.classList.add("won");
    jakuyitto[0].classList.add("win");
    jakuyitto[3].classList.add("win");
    jakuyitto[6].classList.add("win");
  } else if (
    topMiddle &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    allGameChecker(topMiddle);
    body.classList.add("won");
    jakuyitto[1].classList.add("win");
    jakuyitto[4].classList.add("win");
    jakuyitto[7].classList.add("win");
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    allGameChecker(topRight);
    body.classList.add("won");
    jakuyitto[2].classList.add("win");
    jakuyitto[5].classList.add("win");
    jakuyitto[8].classList.add("win");
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    allGameChecker(topLeft);
    body.classList.add("won");
    jakuyitto[0].classList.add("win");
    jakuyitto[4].classList.add("win");
    jakuyitto[8].classList.add("win");
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    allGameChecker(topRight);
    body.classList.add("won");
    jakuyitto[2].classList.add("win");
    jakuyitto[4].classList.add("win");
    jakuyitto[6].classList.add("win");
  } else if (
    topRight &&
    topMiddle &&
    topRight &&
    middleLeft &&
    middleMiddle &&
    middleRight &&
    bottomLeft &&
    bottomRight
  ) {
    gameLive = false;
    gameInfo.innerHTML = "Oyin durrang yakunlandi";
  } else {
    xIsNExt = !xIsNExt;
    xIsNExt
      ? (gameInfo.innerHTML = `${xSymbol} keyingis`)
      : (gameInfo.innerHTML = `${oSymbol} keyingisi`);
  }
};

const ticGameStarter = (e) => {
  if (
    !gameLive ||
    e.target.classList[1] === "x" ||
    e.target.classList[1] === "o"
  )
    return;

  if (xIsNExt) {
    e.target.classList.add("x");
    music2.play();
    gameTester();
  } else {
    e.target.classList.add("o");
    music1.play();
    gameTester();
  }
};

const restartGame = () => {
  gameLive = true;
  xIsNExt = true;
  gameInfo.innerHTML = `${xSymbol} keyingisi`;
  jakuyitto.forEach((elem) => {
    elem.classList.remove("x");
    elem.classList.remove("o");
    elem.classList.remove("win");
  });
};
gameRest.addEventListener("click", restartGame);

jakuyitto.forEach((elem) => {
  elem.addEventListener("click", ticGameStarter);
});
