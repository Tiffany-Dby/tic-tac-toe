"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // HTML Elements
  const squareElts = [...document.querySelectorAll(".square")];
  const resetGameBtn = document.getElementById("reset-game");
  const resetScoresBtn = document.getElementById("reset-scores");
  const playerOneScoreElt = document.getElementById("player1-score");
  const playerTwoScoreElt = document.getElementById("player2-score");
  const popoverElt = document.getElementById("popover");
  const popoverPElt = document.querySelector("#popover p");
  const yearElt = document.getElementById("year");

  // Variables
  const currentYear = new Date().getFullYear();
  const winningCombinations = [
    // Board of 3x3 squares
    [0, 1, 2], // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6],
  ];

  let turn = 0;
  let playerOneScore = 0;
  let playerTwoScore = 0;
  let isGameOver = false;

  // Footer copyrights
  yearElt.textContent = currentYear;

  // Functions
  const onPlayerTurn = (square) => {
    const img = square.querySelector("img");

    if (isGameOver) return;
    if (!!img.getAttribute("src").length) return;

    img.classList.add("square__img--show");

    if (turn % 2 === 0) {
      img.src = "./styles/images/player1.png";
      square.dataset.player = "1";
    } else {
      img.src = "./styles/images/player2.png";
      square.dataset.player = "2";
    }

    if (!checkWin()) turn += 1;
  };

  const checkWin = () => {
    return winningCombinations.some((combo) => {
      const [a, b, c] = combo;
      const playerSquareA = squareElts[a].dataset.player;

      const isWin =
        playerSquareA &&
        playerSquareA === squareElts[b].dataset.player &&
        playerSquareA === squareElts[c].dataset.player;

      if (isWin)
        setWinnerAnimation([squareElts[a], squareElts[b], squareElts[c]]);

      return isWin;
    });
  };

  const setDraw = () => {
    isGameOver = true;

    popoverElt.classList.remove("confettis");
    popoverPElt.textContent = "Égalité !";
    popoverElt.showPopover();
  };

  const setWinner = () => {
    isGameOver = true;

    popoverElt.classList.add("confettis");
    popoverPElt.textContent = `Joueur ${turn % 2 === 0 ? "1" : "2"} a gagné ! `;
    popoverElt.showPopover();
  };

  const setWinnerAnimation = (squares) =>
    squares.forEach((square) =>
      square.querySelector("img").classList.add("square__img--rotate")
    );

  const setScore = () => {
    turn % 2 === 0 ? playerOneScore++ : playerTwoScore++;
    playerOneScoreElt.textContent = playerOneScore;
    playerTwoScoreElt.textContent = playerTwoScore;
  };

  const onEndTurn = () => {
    if (checkWin()) {
      setScore();
      setWinner();
    } else if (turn === 9 && !checkWin()) {
      setDraw();
    }
  };

  const resetGame = () => {
    turn = 0;
    isGameOver = false;

    squareElts.forEach((square) => {
      square.dataset.player = "";
      square.querySelector("img").src = "";
      square
        .querySelector("img")
        .classList.remove("square__img--show", "square__img--rotate");
    });
  };

  const resetScores = () => {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreElt.textContent = 0;
    playerTwoScoreElt.textContent = 0;
  };

  squareElts.forEach((square) => {
    square.addEventListener("click", () => {
      if (isGameOver) return;
      onPlayerTurn(square);
      onEndTurn();
    });
  });

  resetGameBtn.addEventListener("click", resetGame);
  resetScoresBtn.addEventListener("click", resetScores);
});
