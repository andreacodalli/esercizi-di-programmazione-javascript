/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

var cats = 44;
var cats_4_line = 6;

var n_of_lines = Math.ceil(cats/cats_4_line);
var n_of_missing_cats = n_of_lines*cats_4_line-cats;

console.log('cats  =  ' + cats);
console.log('cats_4_line  =  ' + cats_4_line);

console.log(`${cats} gatti in fila per ${cats_4_line} si unirono compatti in ${n_of_lines} file. Nell'ultima fila rimasero ${n_of_missing_cats} posti gatto disponibili`);
