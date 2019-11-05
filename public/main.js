// DONE: on page load, generate a random number
// DONE: when user clicks button, we check if input equals the generated number
// DONE: if user guesses correct number, display message
// DONE: if user guesses incorrect number, display message

// DONE: add a counter to see how many guesses
// TODO: limit number of guesses to 7
// TODO: add a too high/too low message

const qs = (element) => document.querySelector(element)

let randomNumber = 0
let numberOfGuesses = 0

const main = () => {
  randomNumber = Math.ceil(Math.random() * 10)
  console.log(randomNumber)
}

const checkTheNumbers = () => {
  // get the number from the HTML input
  // parseInt (turned string to number)
  const userGuess = parseInt(qs('input').value)
  numberOfGuesses++
  console.log(userGuess)
  console.log(typeof userGuess)
  console.log(typeof randomNumber)
  // check if the number === randomNumber
  if (randomNumber === userGuess && numberOfGuesses <= 7) {
    // if yes, show success message
    console.log('success')
    qs('.output-message').textContent =
      'Success! You guessed the number in ' + numberOfGuesses + ' tries!'
  } else if (numberOfGuesses >= 7) {
    qs('.output-message').textContent =
      'Sorry, you guessed too many times. Play again?'
    qs('button').disabled = true
  } else {
    // if no (else), show try again message
    if (randomNumber > userGuess) {
      qs('.output-message').classList.add('too-low')
      qs('.output-message').classList.remove('too-high')
      qs('.output-message').textContent =
        'Nope. Try again with a bigger number.'
    } else if (randomNumber < userGuess) {
      qs('.output-message').textContent =
        'Nope. Try again with a smaller number.'
      qs('.output-message').classList.add('too-high')
      qs('.output-message').classList.remove('too-low')
    }
  }
  console.log('nope')
  qs('.output-message').textContent = 'Nope. Try again!'
}

document.addEventListener('DOMContentLoaded', main)
qs('button').addEventListener('click', checkTheNumbers)
