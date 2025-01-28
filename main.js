const form = document.querySelector('.hero form')
const input = document.querySelector('#dog-name')
const headerText = document.querySelector('.hero h1 strong')
const displayDogName = (event) => {
  event.preventDefault()
  const dogName = input.value
  headerText.innerText = dogName
}
form.addEventListener('submit', displayDogName)
