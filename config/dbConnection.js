const pgp = require('pg-promise')({});

const db = pgp({
    user: '<username>',
    password: '<password>',
    host: 'localhost',
    port: 5432,
    database: '<db>',
});

module.exports = db;