// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


document.querySelector(".mail-adress-icon").addEventListener( 'click', ()=>{
  navigator.clipboard.writeText("saskia.zailskas@outlook.de")
  showCopyMessage()
})

function showCopyMessage() {
  var sb = document.getElementById("copy-message");
  sb.classList.add("show");
  setTimeout(()=>{ sb.classList.remove("show"); }, 1000);
}

// --- contact form

// const constraints = {
//   name: {
//       presence: { allowEmpty: false }
//   },
//   email: {
//       presence: { allowEmpty: false },
//       email: true
//   },
//   message: {
//       presence: { allowEmpty: false }
//   }
// }

// const form = document.getElementById('contact-form')

// form.addEventListener('submit', function (event) {
// const formValues = {
//     name: form.elements.name.value,
//     email: form.elements.email.value,
//     message: form.elements.message.value
// }

// const errors = validate(formValues, constraints)

// if (errors) {
//   event.preventDefault();
//   const errorMessage = Object
//       .values(errors)
//       .map(function (fieldValues) { return fieldValues.join(', ')})
//       .join("\n")

//   alert(errorMessage)
// }
// }, false)
