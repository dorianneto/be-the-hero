const knex = require('knex');
const configuration = require('../../knexfile');

const envConfig = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(envConfig);

module.exports = connection;
