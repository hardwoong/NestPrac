import * as express from 'express';

const app: express.Express = express();

const port: number = 8000;

app.get('/testqqq', (req: express.Request, res: express.Response) => {
  console.log(req);
  // res.send({ name: 'ingosa', age: 25, friends: ['qq', 'ww'] });
  res.send("hi")

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
