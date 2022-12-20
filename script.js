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

// Setto il setInterval per far scorrere il timer ogni secondo 
setInterval(function() {
    // Creo una costante la data odierna 
    const currentDate = new Date();
    console.log(currentDate);

    // Creo una costante con il giorno di natale 
    const  christmasDate = new Date(currentDate.getFullYear(), 11, 25);

    // Calcolo i millisecondi che mi separano da oggi a Natale 
    const secondsUntilChristmas = (christmasDate.getTime() - currentDate.getTime()) / 1000;

    // Calcolo il tempo rimanente per ciascun valore
    let days = Math.floor(secondsUntilChristmas / 86400);
    let hours = Math.floor((secondsUntilChristmas % 86400) / 3600);
    let minutes = Math.floor(((secondsUntilChristmas % 86400) % 3600) / 60);
    let seconds = Math.floor(((secondsUntilChristmas % 86400) % 3600) % 60);

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

}, 1000);
  