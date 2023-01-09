const express = require('express');

const app = express();

app.get('/', (req, res) => {
  //res.status(200).send('Hello from the server side!');
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
//REST: Representational States Transfer
//Para hoy: 12 +15 +12 =39+10=40+7+5+9=61+10+7+8=86
