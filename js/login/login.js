document.addEventListener('DOMContentLoaded', () => {
  const formLogin = document.querySelector('.form-login')
  const errorAlert = document.querySelector('.alerta-error')

  formLogin.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(formLogin)
    const data = {}
    formData.forEach((value, key) => {
      data[key] = value
    })

    fetch('http://localhost:3000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return response.json().then(errorData => {
            throw new Error(errorData.message || 'Error al iniciar sesión')
          })
        }
      })
      .then(data => {
        localStorage.setItem('access_token', data.access_token)

        // Fetch the "Check" endpoint using the token
        return fetch('http://localhost:3000/api/v1/auth/check', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.access_token}` // Pass the token here
          }
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return response.json().then(errorData => {
            throw new Error(errorData.message || 'Error al verificar el token')
          })
        }
      })
      .then(data => {
        localStorage.setItem('payload', JSON.stringify(data.payload))
        formLogin.reset() // Reset the form only once after all fetch operations
      })
      .catch(error => {
        console.error('Error en el proceso:', error)
        showErrorAlert(error.message)
      })
  })

  function showErrorAlert (message) {
    errorAlert.textContent = message
    errorAlert.classList.add('visible')
    setTimeout(() => {
      errorAlert.classList.remove('visible')
    }, 3000)
  }
})
