/*
Example REST API using json-server and lowDB
Made by: Maxim Tyuterev
*/

// Imports
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Server vars
const PORT = 3001;

// Setup the db so that I can make changes with PUT
const adapter = new FileSync('data/db.json');
const db = low(adapter);

// Setup express
const app = express();

// Id for
let id;

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  console.log("Fetching");
  const data = db.get('posts').value();
  return res.json(data);
});
app.get('/posts/latestId', (req, res) => {
  id = db.get('posts').size().value();
  return res.json(id);
});

app.post('/posts/new', (req, res) => {
  const post = req.body;
  console.log('POST: ' + JSON.stringify(post));
  if (db.get('posts').size().value() < post.id) {
    db.get('posts').push(post).write();
    console.log('Accepted');
    res.json({ success: true });
  } else {
    console.log('Rejected');
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
