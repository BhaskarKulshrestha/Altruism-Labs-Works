const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api/random', (req, res) => {
  const randomNumber = Math.random() * 100;

  const data = {
    value: randomNumber
  };

  res.send(data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
