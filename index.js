var m = Math.random() * 6;
var a = Math.floor(m) + 1;

var n = Math.random() * 6;
var b = Math.floor(n) + 1;


if(a == 1){
    document.getElementById("img-1").src = "images/dice1.png";

} else if(a == 2){
    document.getElementById("img-1").src = "images/dice2.png";

} else if(a == 3){
    document.getElementById("img-1").src = "images/dice3.png";

} else if(a == 4){
    document.getElementById("img-1").src = "images/dice4.png";

} else if(a == 5){
    document.getElementById("img-1").src = "images/dice5.png";

} else {
    document.getElementById("img-1").src = "images/dice6.png";

}

if(b == 1){
    document.getElementById("img-2").src = "images/dice1.png";

} else if(b == 2){
    document.getElementById("img-2").src = "images/dice2.png";

} else if(b == 3){
    document.getElementById("img-2").src = "images/dice3.png";

} else if(b == 4){
    document.getElementById("img-2").src = "images/dice4.png";

} else if(b == 5){
    document.getElementById("img-2").src = "images/dice5.png";

} else {
    document.getElementById("img-2").src = "images/dice6.png";

}

if(a > b){
    document.getElementById("tag").innerHTML = "🥇Player 1 Won";

} else if(a < b){
    document.getElementById("tag").innerHTML = "Player 2 Won🥇";

} else {
    document.getElementById("tag").innerHTML = "Uhh..Nobody Won.";

}

