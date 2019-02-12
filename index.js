'use strict';
// データベースに保存する
const Parse = require('./csvParse');
const Fixture = require('./models/fixtures');
Parse.forEach((f,i) =>{
  console.log(i);
  //保存時はmoment-timeモジュールによって( DD/MM/YYYY HH:hh → YYYY/MM/DD HH:hh )表記へ
  Fixture.upsert({
    gameNumber: f.gameNumber,
    fixtureDate: f.fixtureDate,
    fixtureSort: f.fixtureSort
  });
});