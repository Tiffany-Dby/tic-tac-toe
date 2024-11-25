document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");
  const resetBtn = document.querySelector(".reset");

  let player = 1;
  function crossthrough(square) {
    //if(!!square.textContent.length) return;
    //if(square.textContent.length > 0) return; //if not empty return
    const img = square.querySelector("img");

    if (!!img.getAttribute("src").length) return;
    if (player % 2 === 0) {
      img.src = "./styles/images/logo.png";
    } else {
      img.src = "./styles/images/logo.png";
    }

    player += 1;
  }

  function reset() {
    player = 1;
    squares.forEach((square) => {
      square.querySelector("img").src = "";
    });
  }

  squares.forEach((square) => {
    square.addEventListener("click", () => {
      crossthrough(square);
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

    const squaresArray = Array.from(squares);

    // for (const combination of winningCombinations) {
    //   const [a, b, c] = combination;
    //   if (

    //   ) {
    //     alert(`Player ${} wins!`);
    //     return;
    //   }
    // }
  }

  resetBtn.addEventListener("click", reset);
});
