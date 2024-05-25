import express, { Request, Response } from "express";
// import cors from 'cors';
const cors = require('cors');
// const json = require('json');

const app = express();
const port = 4000;

app.use(cors());
// app.use(json());

app.get('/api/greeting', (req: Request, res: Response) => {
  res.json({ message: 'React | TypeScript | Express | Axios' });
});

app.listen(port, () => {
  console.log(`サーバーが立ち上がりました🐈。`);
});