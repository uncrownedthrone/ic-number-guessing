// TODO: on page load, generate a random number
// TODO: when user clicks button, we check if input equals the generated number
// TODO: if user guesses correct number, display message
// TODO: if user guesses incorrect number, display message
const qs = (element) => document.querySelector(element)

let randomNumber = 0

const main = () => {
  randomNumber = Math.ceil(Math.random() * 10)
  console.log(randomNumber)
}

const checkTheNumbers = () => {
  // get the number from the HTML input
  // parseInt (turned string to number)
  const userGuess = parseInt(qs('input').value)
  console.log(userGuess)
  console.log(typeof userGuess)
  console.log(typeof randomNumber)
  // check if the number === randomNumber
  if (randomNumber === userGuess) {
    // if yes, show success message
    console.log('success')
    qs('.output-message').textContent = 'Success!'
  } else {
    // if no (else), show try again message
    console.log('nope')
    qs('.output-message').textContent = 'Nope. Try again!'
  }
}

document.addEventListener('DOMContentLoaded', main)
qs('button').addEventListener('click', checkTheNumbers)
