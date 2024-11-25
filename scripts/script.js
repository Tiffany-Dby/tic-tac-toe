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

  resetBtn.addEventListener("click", reset);
});
