'use strict';
const Fixture = require('./models/fixtures');

Fixture.findAll().then((fixtures) => {
  console.log(fixtures);//色々な値がデータベースには保存されていた。
})