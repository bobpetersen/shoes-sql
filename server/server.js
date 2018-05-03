const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const Pool = pg.Pool;

database = 'shoes';
const pool = new Pool({
  database: 'shoes',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
});

pool.on('connect', () => {
  console.log('Postgresql connected');
});

pool.on('error', error => {
  console.log('Error with Postgres pool', error);
});

const app = express();
const port = process.env.PORT || 5000;

const shoeArray = [
  {
    name: 'Doc Martins',
    cost: 199
  },
  {
    name: 'Chuck Taylors',
    cost: 45
  }
];

app.use(bodyParser.json());

app.get('/shoes', (req, res) => {
  res.send(shoeArray);
});

app.post('/shoes', (req, res) => {
  const shoe = req.body;
  pool
    .query(`INSERT INTO "shoes" ("name", "cost")
            VALUES ($1, $2);`, [shoe.name, shoe.cost])
    .then(results => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('error with SQL INSERT on shoe POST', error);
      res.sendStatus(500);
    });
});

// Serve back static files by default
app.use(express.static('server/public'));

app.listen(port, function(req, res) {
  console.log('Listening on port', port);
});

// INSERT INTO "shoes"("name", "cost")
// VALUES('Red Wing', '250'),
//     ('Puma Soliel V2', 40),
//     ('Space Boots', 10),
//     ('Adidas Superstar', 192),
//     ('Jordan XII', 178),
//     ('Converse Chuck Taylor low', 32),
//     ('Nike Roshe Run', 127),
//     ('Nike Huarache', 148);
