import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ messge: 'hello world' });
});

app.listen(3333, () => console.log('server is running'));
