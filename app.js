let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log('game started');
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("Flash");
    setTimeout(() => {
        btn.classList.remove("Flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = []; 
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);
    gameSeq.push(randColor);
    // console.log(gameSeq)

    gameFlash(randBtn);
}

function checkAns(idx){
    //console.log( "curr leve", level);
    //let idx = level-1;
    if(userSeq[idx]===gameSeq[idx]){

        if(userSeq.length ==gameSeq.length){
            setTimeout(levelUp,1000);
            
        }
        console.log("same value");
    }else{
        h2.innerHTML  =`Game Over! Your Score was <br>${level } </br> Press any key`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
    }
}
function btnPress(){
     let btn = this;
     userFlash(btn);
     userColor =   btn.getAttribute("id");
     userSeq.push(userColor);
     checkAns(userSeq.length-1);


}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;

    
} 