//1.-Dependendencias de desarrollo para trabajar typescript con node y express
// @types/express, @types/node, ts-node, typescript,
//2.-ejecutar tsc --init
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'hello mundo' });
});

app.listen(4000, () => {
  console.log('Escuchando');
});
