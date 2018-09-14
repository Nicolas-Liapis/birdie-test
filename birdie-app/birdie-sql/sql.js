const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

//SQL queries

const education = 'SELECT Education AS Variable, COUNT(education) AS Count, CAST(AVG (age) AS DECIMAL (12,2)) AS Average_Age FROM census_learn_sql GROUP BY education ORDER BY COUNT(education) DESC LIMIT 100';


const connection = mysql.createConnection({
  host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  user: 'test-read',
  password: 'xnxPp6QfZbCYkY8',
  database: 'birdietest'
});

connection.connect(err => {
  if(err) {
    return err;
  }
});

app.use(cors());

app.get('/', (req,res) => {
  connection.query(education, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      })
    }
  });
});

app.listen(4000, () => {
  console.log('App listening on port 4000')
});
