import express, { Application } from 'express';

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.get('/', async (_req, res) => {
  res.send({
    message: 'Typescript CRUD API',
  });
});

app.get('/hello', async (_req, res) => {
  res.send({
    message: 'Hello Allen Jones',
  });
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
