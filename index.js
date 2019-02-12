'use strict';
// データベースに保存する
const Parse = require('./csvParse');
const Fixture = require('./models/fixtures');
Parse.forEach((f,i) =>{
  console.log(i);
  Fixture.upsert({
    gameNumber: f.gameNumber,
    fixtureDate: f.fixtureDate,
    fixtureSort: f.fixtureSort
  });
});