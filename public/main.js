const qs = e => document.querySelector(e)

let randomNumber = 0
let numberOfGuesses = 0
const guessedNumbers = []

const main = () => {
  randomNumber = Math.ceil(Math.random() * 10)
}

const hasUserGuessedTheNumber = userGuess => {
  for (let i = 0; i < guessedNumbers.length; i++) {
    if (guessedNumbers[i] === userGuess) {
      return true
    }
  }
  return false
}

const showHighLowMessage = userGuess => {
  if (randomNumber > userGuess) {
    qs('.output-message').classList.add('too-low')
    qs('.output-message').classList.remove('too-high')

    qs('.output-message').textContent = 'Try Again with a bigger number!'
  } else if (randomNumber < userGuess) {
    qs('.output-message').textContent = 'Try Again with a smaller number!'
    qs('.output-message').classList.add('too-high')
    qs('.output-message').classList.remove('too-low')
  }
}

const checkTheNumbers = () => {
  const userGuess = parseInt(qs('input').value)
  numberOfGuesses++

  const hasGuessed = hasUserGuessedTheNumber(userGuess)

  if (hasGuessed) {
    qs('.output-message').textContent = 'Wait, you have guessed that already!'
    showHighLowMessage(userGuess)
  } else {
    guessedNumbers.push(userGuess)
    if (randomNumber === userGuess && numberOfGuesses <= 7) {
      qs('.output-message').textContent =
        'Success! You guessed the number in ' + numberOfGuesses + ' tries'
    } else if (numberOfGuesses >= 7) {
      qs('.output-message').textContent =
        'Sorry, you have guessed too many times. Play again?'
      qs('button').disabled = true
    } else {
      showHighLowMessage(userGuess)
    }
  }
}

document.addEventListener('DOMContentLoaded', main)
qs('button').addEventListener('click', checkTheNumbers)
