let gameseq=[];
let userseq=[];


let btns=["yellow","purple","red","green"];


let started=false;
let level=0;
let highscore=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
})
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`
    //random button to choose 
    let ranidx=Math.floor(Math.random()*3);
    let randColor=btns[ranidx];
    let btn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    btnflash(btn);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
            },300);
}


function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setInterval(levelup(),1000);
        }
    }
    else{
        
        if (level>highscore){
            highscore=level;
        }
        h2.innerText=`gameover press any key to start yourscore:${level} highscore:${highscore}`
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnflash(btn);
    let color=btn.getAttribute("id");
    userseq.push(color);
    checkAns(userseq.length-1);
}


    let allBtns=document.querySelectorAll(".btn");
    for(let btn of allBtns){
        btn.addEventListener("click",btnPress);
    }

    
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}