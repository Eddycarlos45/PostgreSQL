const pg = require('pg')
//config
const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'meuovo789',
  port: 5432,
})

module.exports = client
