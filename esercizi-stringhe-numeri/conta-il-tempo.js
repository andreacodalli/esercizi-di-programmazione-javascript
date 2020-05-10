/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var x = 100000;
var sec_min = 60;
var sec_ora = 3600;

var ora = Math.floor(x/sec_ora);
var min = Math.floor((x-ora*sec_ora)/sec_min);
var sec = Math.floor(x-ora*sec_ora-min*sec_min);

console.log(`${ora} ore, ${min} minuti e ${sec} secondi`);
