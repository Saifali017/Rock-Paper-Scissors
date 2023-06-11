let userscr=0;
let compscr=0;
const userscr_span=document.getElementById("user-score");
const compscr_span=document.getElementById("comp-score");

const score_board=document.querySelector(".score-board")
const result =document.querySelector(".result > p")
const rock=document.getElementById("r")
const paper=document.getElementById("p")
const scissor=document.getElementById("s")

function convert(letter){
    if(letter=== "r") return "Rock";
    if(letter=== "p") return "Paper";
    return "Scissors";
}

function wins(u,c){
    userscr++;
    userscr_span.innerHTML=userscr;
    compscr_span.innerHTML=compscr;
    const smalluserword="user".fontsize(3).sub();
    const compword="comp".fontsize(3).sub();
    result.innerHTML= `${convert(u) }${smalluserword} beats  ${convert(c)}${compword} . You Won!`
    document.getElementById(u).classList.add('green-glow');
    setTimeout(function(){document.getElementById(u).classList.remove('green-glow')},3000)
}



function lose(u,c){
    compscr++;
    userscr_span.innerHTML=userscr;
    compscr_span.innerHTML=compscr;
    const smalluserword="user".fontsize(3).sub();
    const compword="comp".fontsize(3).sub();
    result.innerHTML= `${convert(u) }${smalluserword} loses  ${convert(c)}${compword} . You lost!`
    document.getElementById(u).classList.add('red-glow');
    setTimeout(function(){document.getElementById(u).classList.remove('red-glow')},3000)
}

function draw(u,c){
    const smalluserword="user".fontsize(3).sub();
    const compword="comp".fontsize(3).sub();
    result.innerHTML= `${convert(u) }${smalluserword} equals  ${convert(c)}${compword} . It's a draw!`
    document.getElementById(u).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(u).classList.remove('grey-glow')},3000)
}

//choices of computer
function getcompchoices(){
    const choices=['r','p','s'];
    const random_no=Math.floor(Math.random()*3);
    return choices[random_no];
}

function Game(user){
   const compchoice=getcompchoices()
   switch (user + compchoice){
    case "rs":
    case "pr":
    case "sp":
    wins(user,compchoice);
    break;   
    case "rp":
    case "ps":
    case "sr":
    lose(user,compchoice);
    break;   
    case "rr":
    case "pp":
    case "ss":
    draw(user,compchoice);
    break;   
   }
}

function main(){
rock.addEventListener('click',function(){
    Game("r");
})
paper.addEventListener('click',function(){
    Game("p");
})
scissor.addEventListener('click',function(){
    Game("s");
})
}
main();
