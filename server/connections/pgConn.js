require('dotenv').config()

const {Client} = require('pg')

const {DB_HOSTNAME, DB_DATABASE, DB_PORT, DB_USERNAME, DB_PASS} = process.env

const client = new Client ({
    host: DB_HOSTNAME,
    database: DB_DATABASE,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASS
})
console.log(client)
client.connect()

module.exports = client; 