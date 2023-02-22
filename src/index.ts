//1.-Dependendencias de desarrollo para trabajar typescript con node y express
// @types/express, @types/node, ts-node, typescript,
//2.-ejecutar tsc --init
import express from 'express';

type Usuario = {
  id: string;
  name: string;
};

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'hello mundo' });
});

app.post('/', (req, res) => {
  const { name } = req.body as Usuario;
  console.log(name);
  res.send(`ok`);
});

app.listen(4000, () => {
  console.log('Escuchando');
});
