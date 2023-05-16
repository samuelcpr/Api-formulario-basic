import express from 'express';
import { cadastrosUser } from './routes';

const app = express();

app.get("/",cadastrosUser);

app.listen(3333);