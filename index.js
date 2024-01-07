function initGame() {    
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    function randomDice(number) {

        if (number === 1) {
            return "./images/dice1.png"
        }   else if (number === 2) {
            return "./images/dice2.png"
        }   else if (number === 3) {
            return "./images/dice3.png"
        }   else if (number === 4) {
            return "./images/dice4.png"
        }   else if (number === 5) {
            return "./images/dice5.png"
        }   else {
            return "./images/dice6.png"
        }
    }

    document.querySelector(".img1").setAttribute("src", randomDice(randomNumber1))

    document.querySelector(".img2").setAttribute("src", randomDice(randomNumber2))

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🏆 Player 1 WIN!"
    }   else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "🤝 It's a DRAW!"
    }   else {
        document.querySelector("h1").innerHTML = "Player 2 WIN! 🏆"
    }
}


window.onload = initGame();