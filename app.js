let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    if (inp.value.trim() === "") {
        alert("Please enter something");
        return;   // ❗ stops execution here
    }
    let item=document.createElement("li");
    item.innerText=inp.value.toUpperCase();
    let btn=document.createElement("button");
    btn.innerText= "delete";
    ul.appendChild(item);
    item.appendChild(btn);
    inp.value ="";
});


ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
       let listItems= event.target.parentElement;
       listItems.remove();
    }
    // console.log(event.target);
    // console.log("button clicked");
});
let first=document.querySelectorAll(".first");
first[1].addEventListener("scroll",function(event){
    console.log("second section scrolling");

})
// simon game
let gameseq=[];
let usersq=[];

let btns=["yellow","red","purple","green"];

let started =false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(event){
    if(started==0){
        console.log("game started")
    started= true;
     levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    level++;
    h2.innerText=`Level${level}`;

    let randIdx= Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    btnflash(randBtn);
    
}

 function checkans(){
    let idx=level
}

function btnPress(){
    let btn= this;
    userflash(btn);

    usercolor= btn.getAttribute("id");
    console.log(usercolor);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function one(){
    return 1;
}
function two(){
    return one()+ one();
}
function three(){
    return two()+one();
}
three();