let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgConainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true; // player O, player X

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        if(turn){   // player O
            box.innerText = "O";
            turn = false;
        }
        else {  //player X
            box.innerText = "X";
            turn = true;
        }
        box.disabled=true;

        checkWinner();
    });
});


// Check winner
checkWinner = ()=> {
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

        let pos1_Val = boxes[pattern[0]].innerText;
        let pos2_Val = boxes[pattern[1]].innerText;
        let pos3_Val = boxes[pattern[2]].innerText;

        if(pos1_Val != "" && pos2_Val != "" && pos3_Val != ""){
            if(pos1_Val === pos2_Val && pos2_Val === pos3_Val){
                // console.log("Winner", pos1_Val);

                showWinner(pos1_Val);
            }
        }   
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations "${winner}" you are winner..!`;
    msgConainer.classList.remove("hide");

    disableBoxes();
}

const disableBoxes = ()=> {
    for(let box of boxes){
        box.disabled =  true;
    }
}

const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled =  false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turn = true;
    enableBoxes();
    msgConainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener('click', resetGame);