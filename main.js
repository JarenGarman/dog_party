const form = document.querySelector('.hero form')
const input = document.querySelector('#dog-name')
const headerText = document.querySelector('.hero h1 strong')
form.addEventListener('submit', function (event) {
  event.preventDefault()
  const dogName = input.value
  headerText.innerText = dogName
})
