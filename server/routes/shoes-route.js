const express = require('express');
const router = express.Router(); //// require('express').Router();



// router.get('/shoes', (req, res) => {
//     res.send(shoeArray);
// });

// router.post('/shoes', (req, res) => {
//     const shoe = req.body;
//     pool
//         .query(`INSERT INTO "shoes" ("name", "cost")
//             VALUES ($1, $2);`, [shoe.name, shoe.cost])
//         .then(results => {
//             res.sendStatus(200);
//         })
//         .catch(error => {
//             console.log('error with SQL INSERT on shoe POST', error);
//             res.sendStatus(500);
//         });
// });

// router.get('/', (req, res) => {
//     console.log('router get', req.body);
//     res.send(shoeArray);
// });