import * as express from 'express';

const app: express.Express = express();

const port: number = 3000;

app.get('/test', (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ name: 'ingosa', age: 25, friends: ['qq', 'ww'] });
});

app.post('/test', (req: express.Request, res: express.Response) => {
  res.send({ person: "park" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
