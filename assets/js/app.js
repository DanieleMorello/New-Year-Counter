/*-------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                               DOM ELEMENTS
---------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Selezioniamo gli elementi del DOM che rappresentano i giorni, le ore, i minuti e i secondi rimanenti
const daysElm = document.querySelector("#days");
const hoursElm = document.querySelector("#hours");
const minutesElm = document.querySelector("#minutes");
const secondsElm = document.querySelector("#seconds");
const panelElm = document.querySelector(".panel");

// daysElm.innerHTML = 25; // Possiamo utilizzare questa riga di codice per impostare manualmente il numero di giorni rimanenti, ad esempio per scopi di test.

// data di fine
const endDate = new Date("January 01 2024"); // Definiamo la data di fine, ovvero il Capodanno del 2024
const endDateInMs = endDate.getTime(); // Convertiamo la data di fine in millisecondi

// tabella in millisecondi
const secondInMs = 1000; // 1 secondo = 1000 millisecondi
const minuteInMs = 60 * secondInMs; // 1 minuto = 60 secondi
const hourInMs = 60 * minuteInMs; // 1 ora = 60 minuti
const dayInMs = 24 * hourInMs; // 1 giorno = 24 ore

// Impostiamo un intervallo di tempo per eseguire la funzione "timer" ogni secondo
const counterTimer = setInterval(timer, 1000);

// Questa funzione viene eseguita ogni secondo dall'intervallo di tempo definito sopra
function timer() {
  // oggi in millisecondi
  const nowInMs = new Date().getTime(); // Convertiamo la data corrente in millisecondi

  // Calcoliamo la differenza in millisecondi tra la data di fine e la data corrente
  const diff = endDateInMs - nowInMs;

  // Se la differenza è maggiore di zero, continuiamo a mostrare il conto alla rovescia
  if (diff > 0) {
    // Calcoliamo il numero di giorni, ore, minuti e secondi rimanenti
    daysElm.innerHTML = Math.floor(diff / dayInMs);
    hoursElm.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
    minutesElm.innerHTML = Math.floor((diff % hourInMs) / minuteInMs);
    secondsElm.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);
  }
  // Altrimenti, se la differenza è inferiore o uguale a zero, il Capodanno è arrivato!
  else {
    // Cancella l'intervallo di tempo
    clearInterval(timer);
    // Mostra un messaggio di auguri
    panelElm.innerHTML = "<h1>Buon Anno!!! &#10084;</h1>";
  }
}
