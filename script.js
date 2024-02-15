
let form = document.querySelector('form')

function isInvalid(champ) {
    if (champ.classList.contains('success')) {
        champ.classList.remove('success')
        champ.classList.add('error')
    }else{
        champ.classList.add('error')
    }
}

function isValid(champ) {
    if (champ.classList.contains('error')) {
        champ.classList.remove('error')
        champ.classList.add('success')
    }else{
        champ.classList.add('success')
    }
}

function verifyInput(champ){
    if (champ.value == "") {
        isInvalid(champ)
        return false
    }else{
        isValid(champ)
        return true
    }
}

function verifyEmail(champ){
    const emailRegex = new RegExp('[a-zA-Z0-9_-]+@[a-zA-Z]+\.com')
    const condition = emailRegex.test(champ.value)
    if (condition) {
        isValid(champ)
        return true
    } else {
        isInvalid(champ)
        return false
    }
}

function verifyPassword(champ) {
    const passwordRegex = new RegExp('[a-b0-9]+')
    const length = 8
    const condition = (passwordRegex.test(champ.value)) && (champ.value.length >= length)
    if (condition) {
        isValid(champ)
        return true
    }else{
        isInvalid(champ)
        return false
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault()
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let varName = verifyInput(name)
    let varEmail = verifyEmail(email)
    let varPassword = verifyPassword(password)
    if(varEmail && varName && varPassword){
        form.setAttribute('hidden', true)
        let content = document.querySelector('.form-signin')
        let message = document.createElement('h1')
        message.innerText = "Valid form"
        let btn = document.createElement('a')
        btn.setAttribute('href', 'index.html')
        btn.setAttribute('class', 'btn btn-secondary')
        btn.innerText = 'Go to form again'
        content.appendChild(message)
        content.appendChild(btn)
    }
})