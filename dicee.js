var randomNumber1=  Math.floor(Math.random()*6)+1;
var randomDiceImage1= "images/dice"+randomNumber1+".png"; //to select a random dice image from dice1 to dice6
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage2= "images/dice"+randomNumber2+".png"; //to select a random dice image from dice1 to dice6
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(randomNumber1>randomNumber2){ //if Player 1 wins
  document.querySelector("h1").textContent= "Player 1 wins! :)";
}

else if(randomNumber1<randomNumber2){ //if Player 2 wins
  document.querySelector("h1").textContent= "Player 2 wins! :)";
}

else{ //if Player 1's dice value is equal to Player 2's dice value
  document.querySelector("h1").textContent= "Oops! That was a draw ;)";
}
