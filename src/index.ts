import express, { Application } from 'express';
import Router from './routes';
import morgan from 'morgan';
import connectDB from './config/database';
import 'dotenv/config';

const PORT = process.env.SERVER_PORT || 8000;

const app: Application = express();

connectDB;

app.get('/', async (_req, res) => {
  res.send({
    message: 'Typescript CRUD API',
  });
});

app.use(Router);

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
