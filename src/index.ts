import express, { Application } from 'express';
import Router from './routes';
import morgan from 'morgan';

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.get('/', async (_req, res) => {
  res.send({
    message: 'Typescript CRUD API',
  });
});

/*app.get('/hello', async (_req, res) => {
  res.send({
    message: 'Hello Allen Jones',
  });
});*/

app.use(Router);

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
