import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import TarefaController from './src/controller/TarefaController.js'

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(TarefaController);

servidor.listen(process.env.PORT, () => console.log('API subiu!'));