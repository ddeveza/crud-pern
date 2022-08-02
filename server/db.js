const Pool = require('pg').Pool;
const { Client } = require('pg');

require('dotenv').config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

console.log({ user, password, database });

const pool = new Pool({
  user,
  password,
  host: 'localhost',
  port: 5432,
  database,
  log: console.log,
});

module.exports = pool;
