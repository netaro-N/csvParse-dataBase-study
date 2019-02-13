'use strict';
const Fixture = require('./models/fixtures');

Fixture.findAll({order:[['fixtureDate', 'ASC']]}).then((fixtures) => {
  let dateArray = [];
  fixtures.forEach((f,i) => {
  dateArray[i] = f.fixtureDate;
  });
  console.log(dateArray);//色々な値がデータベースには保存されていた。
});