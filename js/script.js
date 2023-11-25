// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Creo la lista delle mail che possono accedere

const mailRegistered = ['andrea@parrini.it', 'mario@rossi.it', 'pippo@pluto.it', 'tizio@caio.it'];
console.log(mailRegistered);

// Creo la variabile dove salverò la mail inserito

let userMail = "";

// Salvo il valore che l'utente ha inserito in una variabile, quando clicca sul tasto login

document.getElementById('login').addEventListener('click', function () {

    //assegno il valore alla variabile creata in precedenza
    userMail = document.getElementById('usermail').value;
    console.log(userMail);

    // creo una variabile per capire se la mail inserita è presente oppure no nella lista, e la valorizzo subito con false
    let controlAccess = false;

    //scorro nella lista
    for (let i = 0; i < mailRegistered.length; i++) {

        const element = mailRegistered[i];
        console.log(element);

        // confronto la mail inserita dall'utente con le mail della lista
        if (element === userMail) {

            // se è presente, e quindi una mail nella lista è uguale a quella inserita metto la variabile a true 
            controlAccess = true;

        }

    }

    // controllo la variabile se true faccio accedere l'utente altrimenti no
    if (controlAccess === true) {

        document.getElementById('sectionLogin').classList.add('d-none');
        document.getElementById('sectionPlay').classList.remove('d-none');
        document.getElementById('user').innerHTML = userMail;

    } else {
        document.getElementById('sectionLogin').classList.add('d-none');
        document.getElementById('sectionErrorMail').classList.remove('d-none');
        document.getElementById('nameUser').innerHTML = userMail;
    }
    console.log(controlAccess);

})

document.getElementById('annulla').addEventListener('click', function () {

    document.getElementById('usermail').value = "";

})

document.getElementById('tryagain').addEventListener('click', function () {

    document.getElementById('sectionLogin').classList.remove('d-none');
    document.getElementById('sectionErrorMail').classList.add('d-none');
    document.getElementById('usermail').value = userMail;

})

document.getElementById('registration').addEventListener('click', function(){

    document.getElementById('sectionRegistration').classList.remove('d-none');
    document.getElementById('sectionErrorMail').classList.add('d-none');

})

document.getElementById('adduser').addEventListener('click', function(){

    const newUserMail = document.getElementById('newusermail').value;
    console.log(newUserMail);

    let controlAccess = false;

    for (let i = 0; i < mailRegistered.length; i++) {

        const element = mailRegistered[i];
        console.log(element);

        if (element === newUserMail) {

            controlAccess = true;

        }

    }

    if (controlAccess === true) {

        alert('Mail già usata per un altro account')

    } else {
       
        mailRegistered.push(newUserMail);
        document.getElementById('sectionLogin').classList.remove('d-none');
        document.getElementById('sectionRegistration').classList.add('d-none');
        document.getElementById('usermail').value = "";

    }

    console.log(mailRegistered);

})

document.getElementById('play').addEventListener('click', function () {

    const userNumber = Math.round(Math.random() * 5) + 1;
    document.getElementById('usernumber').innerHTML = userNumber;
    console.log(userNumber);

    const computerNumber = Math.round(Math.random() * 5) + 1;
    document.getElementById('computernumber').innerHTML = computerNumber;
    console.log(computerNumber);

    if (userNumber > computerNumber) {
        alert(`Complienti ${userMail} hai vinto`);
    } else if (userNumber < computerNumber) {
        alert(`Mi dispiace ${userMail} hai perso`);
    } else {
        alert('La partita è finita in parità')
    }

})