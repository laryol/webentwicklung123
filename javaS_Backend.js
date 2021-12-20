//fetch('GET http://localhost/')
//const cors = require('cors')

function abfrage2() {
    window.alert("alert1")
    const form = document.querySelector('form')
    const email = document.querySelector('[name=email]')
    const password = document.querySelector('[name=password]')

    const loginError = document.querySelector('.error')

    const BASE_URL = "https://webentwicklungbe.herokuapp.com"

    const login = async (email, password) => {
        const loginUrl = `${BASE_URL}/login`
        const result = await fetch(loginUrl, {

            method: 'Post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        return result.status === 200;
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(email.value)
        window.alert("yes!")
        login(email.value, password.value)
            .then(wasSuccessfullLogin => {
                if (wasSuccessfullLogin) {
                    console.log('it worked');
                    //loginError.classList.add('hidden')
                }
            })
    })
}