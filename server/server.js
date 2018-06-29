const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');


const PORT = 3000;
//init express app
const app = express();

//Using body parser middleware
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello from server')
})

//Listening to server
app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
})