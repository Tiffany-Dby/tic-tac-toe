document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("square");
    const player = 1;
    function crossthrough(event, square){
        if (player % 2 === 0){
            square.textContent = "x";
        }else{
            square.textContent = "o";
        }
        player += 1;
    }
    
    squares.forEach(square  => {
        square.addEventListener('click', crossthrough);
    });

});
