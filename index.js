import express from 'express';

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'hello' });
});

app.listen(PORT);
