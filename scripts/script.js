document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".square");
    const resetBtn = document.querySelector(".reset");

    let player = 1;
    function crossthrough(event, square){
        //if(!!square.textContent.length) return;
        if(square.textContent.length > 0) return; //if not empty return

        if (player % 2 === 0){
            square.textContent = "x";
        }else{
            square.textContent = "o";
        }
        player += 1;
    }
    
    
    function reset(event){
        player = 1;
        squares.forEach(square => {
            square.textContent = "";
        })
    }

    squares.forEach(square  => {
        square.addEventListener('click', (e)=>{
            crossthrough(e,square)
        });
    });

    resetBtn.addEventListener('click', (e)=>{
        reset(e)
    })

});
