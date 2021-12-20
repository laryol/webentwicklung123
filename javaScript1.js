function abfrage() {

    const mail = "huehne@htw-berlin.de"
    const passwort = "hunter2"
    var pwInput = document.querySelector('#password')
    var mailInput = document.querySelector('#E-mail')
    if (mail == mailInput.value && passwort == pwInput.value) {
        setTimeout(function () {
            window.location = "Startseite_nach_Login.html"

        }), 500;
        //    window.location = "Startseite_nach_Login.html"
        window.alert("Login erfolgreich")
    } else {
        window.alert((pwInput.value))
        window.alert("E-Mail und Passwort stimmen nicht überein")
    }

}

const input = document.querySelector('#password')
input.addEventListener('keyup', () => {
    console.log(input.value.length)
})