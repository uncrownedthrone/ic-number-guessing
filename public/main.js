// DONE: on page load, generate a random number
// DONE: when the user clicks the button, we check if the inputted number === generated number
// DONE: if the user guessed the correct number, display message of success

// DONE: Add a counter to count the number of times guessed
// DONE: limit the number of guesses to 7
// DONE: Add a message for too high/too low

// TODO: Add a message if a user has guessed the number already

let randomNumber = 0
let numberOfGuesses = 0
const guessedNumbers = []

const main = () => {
  randomNumber = Math.ceil(Math.random() * 10)
  console.log(randomNumber)
}

// param: the number checkout
// return value: true/false if the user has guessed the number

const hasUserGuessedTheNumber = (userGuess) => {
  console.log('checking is the user guess ', userGuess)
  for (let i = 0; i < guessedNumbers.length; i++) {
    if (guessedNumbers[i] === userGuess) {
      return true
    }
  }
  return false
}

const showHighLowMessage = (userGuess) => {
  if (randomNumber > userGuess) {
    document.querySelector('.output-message').classList.add('too-low')
    document.querySelector('.output-message').classList.remove('too-high')

    document.querySelector('.output-message').textContent =
      'Try Again with a bigger number!'
  } else if (randomNumber < userGuess) {
    document.querySelector('.output-message').textContent =
      'Try Again with a smaller number!'
    document.querySelector('.output-message').classList.add('too-high')
    document.querySelector('.output-message').classList.remove('too-low')
  }
}

const checkTheNumbers = () => {
  // get the number from the HTML input
  const userGuess = parseInt(document.querySelector('input').value)
  numberOfGuesses++

  const hasGuessed = hasUserGuessedTheNumber(userGuess)

  if (hasGuessed) {
    document.querySelector('.output-message').textContent =
      'Wait, you have guessed that already!'
    showHighLowMessage(userGuess)
  } else {
    guessedNumbers.push(userGuess)
    console.log(guessedNumbers)
    // check if the number === randomNumber
    if (randomNumber === userGuess && numberOfGuesses <= 7) {
      // if yes, show success message
      document.querySelector('.output-message').textContent =
        'Success! You guessed the number in ' + numberOfGuesses + ' tries'
    } else if (numberOfGuesses >= 7) {
      document.querySelector('.output-message').textContent =
        'Sorry, you have guessed too many times. Play again?'
      document.querySelector('button').disabled = true
    } else {
      showHighLowMessage(userGuess)
    }
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('button').addEventListener('click', checkTheNumbers)
