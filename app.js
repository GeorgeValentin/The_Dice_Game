// Generate random numbers between 1 and 6
function generateRandomNumber() {
    var randomNumber = Math.floor((Math.random() * 6) + 1)

    return randomNumber
}

// Select the images with dices
function selectDiceImage(number) {
    var diceImage = document.querySelector(".img" + number)

    return diceImage
}

// Function to set the src attribute of the .img to a random dice image
function setRandomDices(diceImage, randomNumber) {
    diceImage.setAttribute("src", "images/dice" + randomNumber +".png")

    return diceImage
}

// Select a HTMl tag
function selectHTMLTag(tagName) {
    var tag = document.querySelector(tagName)

    return tag
}

// Determine the winner of the game
function determineWinner(randomNumber1, randomNumber2, pageTitle, player1Winning, player2Winning, draw) {
    if(randomNumber1 > randomNumber2) {
        pageTitle.innerHTML = player1Winning
    } else if (randomNumber1 < randomNumber2) {
        pageTitle.innerHTML = player2Winning
    } else {
        pageTitle.innerHTML = draw
    }
}

// Variables holding random numbers
var randomNumber1 = generateRandomNumber()
var randomNumber2 = generateRandomNumber()

// Variables holding the images of the dices
var diceImage1 = selectDiceImage(1)
var diceImage2 = selectDiceImage(2)

// Variables holding the text to display when the game ends
var player1Winning = "🚩 Player 1 Wins!"
var player2Winning = "Player 2 Wins! 🚩"
var draw = "Draw!"

// Call the setRandomDices 
diceImage1 = setRandomDices(diceImage1, randomNumber1)
diceImage2 = setRandomDices(diceImage2, randomNumber2)

var pageTitle = selectHTMLTag("h1")

determineWinner(randomNumber1, randomNumber2, pageTitle, player1Winning, player2Winning, draw)
