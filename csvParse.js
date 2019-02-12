'use strict';

const fs = require('fs');
const csvParse = require('csv-parse/lib/sync'); // requiring sync module

const file = 'input.csv';
let data = fs.readFileSync(file);

let res = csvParse(data, {
  delimiter: ',', 
  rowDelimiter: 'auto', 
  quote: '"', 
  escape: '"', 
  columns: true, 
  comment: '#', 
  skip_empty_line: true, 
  trim: false
});

console.log(res);
console.log(res[3]);
console.log(res[3].gameNumber);
console.log(res[3]['gameNumber']);
console.log(res[3].fixtureDate);