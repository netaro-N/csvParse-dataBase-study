'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/csv_parse_database',
  {
    logging: false,
    operatorsAliases: false 
  });
const Fixture = sequelize.define('fixtures', {
  gameNumber: {
    type: Sequelize.INTEGER,
    //autoIncrement: true,
    primaryKey: true
  },
  fixtureDate: {
    type: Sequelize.DATE
  },
  fixtureSort: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true,
  timestamps: true
});

Fixture.sync();
module.exports = Fixture;