const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password: '257050',
    database: 'tododb',
    host: 'localhost',
    port: 5432
});

module.exports = pool;