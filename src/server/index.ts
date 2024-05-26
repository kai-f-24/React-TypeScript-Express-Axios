import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());

app.get('/api/greeting', (req: Request, res: Response) => {
  res.json({ message: 'React | TypeScript | Express | Axios' });
});

app.listen(port, () => {
  console.log(`サーバーが立ち上がりました🐈。`);
});