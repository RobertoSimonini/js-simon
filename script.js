console.log('OK JS')

/*
    # CONSEGNA

    In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!  Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre!

    Vi sono forniti in allegato HTML e CSS, cercate di analizzarli per capire come intervenire sul countdown.

    Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
    ? Da quante ore è composto un giorno?

    ? Da quanti minuti è composta un'ora?

    ? Da quanti secondi è composto un minuto?

    ? Da quanti millisecondi è composto un secondo?

    ? Quanti millisecondi mi separano dal Natale?

    ? Esiste un oggetto JS in grado di gestire le date?

    ?Esistono dei metodi per trasformare una data in millisecondi?
*/

// Prendo gli elementi dal DOM 
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const message = document.getElementById('message');

// Setto il setInterval per far scorrere il timer ogni secondo 
const christmasTimer = setInterval(() => {
    // Creo una costante per la data odierna 
    const currentDate = new Date();

    // Creo una costante con il giorno di natale 
    const  christmasDate = new Date("December 25, 2022").getTime();

    // Calcolo i millisecondi che mi separano da oggi a Natale 
    const distance = christmasDate - currentDate;

    // Calcolo il tempo rimanente per ciascun valore
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Aggiungo lo 0 davanti ai valori minori di 10
    if (days < 10) {
        days = '0' + days;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    // Mostro il tempo rimanente in pagina 
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

    // Creo un messaggio quando il Coutndwon sarà finito e blocco il timer
    if (distance < 0) {
        clearInterval(christmasTimer);
        message.innerText = "Tanti auguri di buon Natale!!";
    }
}, 1000);

