var one=Math.random()*6;
one=Math.floor(one)+1;
var d1="dice"+one+".png";
var randImage1="images/"+d1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randImage1);


var two=Math.random()*6;
two=Math.floor(two)+1;
var d2="dice"+two+".png";
var randImage2="images/"+d2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randImage2);


if(one>two){
    var head=document.querySelector("h1")
    head.innerHTML="Player 1 Wins!🎆";
}
else if(two>one){
    var head=document.querySelector("h1");
    head.innerHTML="Player 2 Wins!🎆";
}
else{
    var head=document.querySelector("h1");
    head.innerHTML="It's a Draw⚔️";
}