document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");
  const resetBtn = document.querySelector(".reset");
  const squaresArray = Array.from(squares);

  let player = 1;

  function crossthrough(square) {
    //if(!!square.textContent.length) return;
    //if(square.textContent.length > 0) return; //if not empty return
    const img = square.querySelector("img");

    if (!!img.getAttribute("src").length) return;
    if (player % 2 === 0) {
      img.src = "./styles/images/player1.png";
    } else {
      img.src = "./styles/images/player2.png";
    }

    player += 1;
  }

  function reset() {
    player = 1;
    squares.forEach((square) => {
      square.querySelector("img").src = "";
    });
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  squares.forEach((square) => {
    square.addEventListener("click", () => {
      crossthrough(square);
      sleep(1).then(()=> winGame());
    });
  });

  function winGame() {
    const winningCombinations = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      if (
        squaresArray[a].querySelector("img").getAttribute("src") &&
        squaresArray[a].querySelector("img").getAttribute("src") ===
          squaresArray[b].querySelector("img").getAttribute("src") &&
        squaresArray[a].querySelector("img").getAttribute("src") ===
          squaresArray[c].querySelector("img").getAttribute("src")
      ) {
        alert(`Player ${player % 2 === 0 ? "1" : "2"} wins!`);
        return;
      }
    }
  }

  resetBtn.addEventListener("click", reset);
});
