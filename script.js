//Side Menu 
const toggleBtn = document.querySelector('.navbar ul li:first-child'),
  sidebar = document.getElementId('nav')

  toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
  })

// Typing Effect Animation
const textDisplay = document.getElementById('text')
const phrases = ['Testing', '1', '2', '4', '3']
let i = 0
let j = 0
let currentPhase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false 
  textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {

      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j])
        j++
        console.log('add a letter', j)
      }

      if(isDeleting && j <= phrases[i].length) {
        currentPhrase.pop(phrases[i][j])
        j--
        console.log('remove a letter', j)
      }

      if (j == phrases[i].length) {
        isEnd = true
        isDeleting = true
      }

      if (isDeleting && j == 0) {
        currentPhrase = []
        isDeleting = false
        i++
        if (i == phrases.length) {
          i = 0
        }
      }
    }
    const spedUP = Math.random() * (80 -50) + 50
    const normalSpeed = Math.random() * (300 -200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedUp
    setTimeout(loop, 500)
}

loop()

// Form Validation
const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) 
  {messages.push('Name is required')
}

if (email.value.length < 10) {
  messages.push('Please enter a valid email')
}

if (messages.length > 0) {
  e.preventDefault()
  errorElement.innerText = messages.join(',')
}

})
