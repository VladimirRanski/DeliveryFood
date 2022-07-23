export const auth = () => {
  const buttonAuth    = document.querySelector('.button-auth')
  const modalAuth     = document.querySelector('.modal-auth')
  const closeAuth     = document.querySelector('.close-auth')
  const logInForm     = document.getElementById('logInForm')
  const inputLogin    = document.getElementById('login')
  const inputPassword = document.getElementById('password')
  const buttonOut     = document.querySelector('.button-out')
  const userName      = document.querySelector('.user-name')
  
  const login = (user) => {
    buttonAuth.style.display = 'none'
    buttonOut.style.display = 'block'
    userName.innerHTML = user.login
    userName.style.display = 'block'
    modalAuth.style.display = 'none'
  }
  
  const logout = () => {
    buttonAuth.style.display = 'flex'
    buttonOut.style.display = 'none'
    userName.innerHTML = ''
    userName.style.display = 'none'
    localStorage.removeItem('user')
  }
  
  buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
  })
  
  closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
  })
  
  logInForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const user = {
      login: inputLogin.value,
      password: inputPassword.value
    }
    
    if (user.login.length === 0 && user.password.length === 0) {
      alert('Введите логин и пароль')
    } else if (user.login.length === 0) {
      alert('Введите логин')
    } else if (user.login.length < 4) {
      alert('Слишком короткий логин (меньше четырех символов)')
    } else if (user.password.length === 0) {
      alert('Введите пароль')
    } else {
      localStorage.setItem('user', JSON.stringify(user))
      login(user)
    }
  })
  
  buttonOut.addEventListener('click', () => {
    logout()
  })
  
  if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')))
  }
}

