// JS Code
let resetButton = document.getElementById('Reset');
let btn1 = document.querySelector('#B1');
let btn2 = document.querySelector('#B2');
let btn3 = document.querySelector('#B3');
let btn4 = document.querySelector('#B4');
let btn5 = document.querySelector('#B5');
let btn6 = document.querySelector('#B6');
let btn7 = document.querySelector('#B7');
let btn8 = document.querySelector('#B8');
let btn9 = document.querySelector('#B9');
let Winner = document.querySelector('.Winner');
let Win = document.querySelector('#Win');

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

let boxes = document.querySelectorAll('.B');
let turn = true;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
           if(turn === true) {
              box.innerText = 'X';
              turn = false;
           } else{ 
            box.innerText = '0';
            turn = true;
           }
           box.disabled = true;
             checkWinner();
    })
})
const showWinner = (winner) => {
      Win.innerText = `Congraulation, Winner is ${winner}`;
      Winner.classList.remove('hide');
  
}
const checkWinner = () => {
    for(let pattern of winPattern){
    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;
    if(post1Val != '' && post2Val != '' && post3Val != ''){
 if(post1Val === post2Val && post2Val === post3Val ) {
         showWinner(post1Val);
 }}
    }
}
