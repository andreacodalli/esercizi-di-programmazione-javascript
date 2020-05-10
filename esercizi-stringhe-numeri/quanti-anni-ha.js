/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var cats = 44;
var cats_4_line = 6;

var n_of_lines = Math.ceil(cats/cats_4_line);
var n_of_missing_cats = n_of_lines*cats_4_line-cats;

console.log('cats  =  ' + cats);
console.log('cats_4_line  =  ' + cats_4_line);

console.log(`${cats} gatti in fila per ${cats_4_line} si unirono compatti in ${n_of_lines} file. Nell'ultima fila rimasero ${n_of_missing_cats} posti gatto disponibili`);
