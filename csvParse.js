'use strict';

const fs = require('fs');
const csvParse = require('csv-parse/lib/sync'); // requiring sync module

const file = 'input.csv';
let data = fs.readFileSync(file);

let Parse = csvParse(data, {
  delimiter: ',', 
  rowDelimiter: 'auto', 
  quote: '"', 
  escape: '"', 
  columns: true, 
  comment: '#', 
  skip_empty_line: true, 
  trim: false
});

console.log(Parse);

module.exports = Parse;
/*
console.log(res[3]['gameNumber']);
console.log(res[3].fixtureDate);
*/


