const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password14',
  database: 'fomo-app'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

//fetch all posts
app.get('/posts', (req, res) => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Create a new post
app.post('/posts', (req, res) => {
  const { name, nickname, location, content, media_url, tag } = req.body;

  db.query(
    'INSERT INTO posts (name, nickname, location, content, media_url, tag) VALUES (?, ?, ?, ?, ?, ?)',
    [name, nickname, location, content, media_url, tag],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ id: results.insertId, name, nickname, location, content, media_url, tag });
      }
    }
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});