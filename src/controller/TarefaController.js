import { Router } from "express";
import { ListarTarefas, Inserir, Finalizado, AlterarTarefa, Deletar } from "../repository/TarefaRepository.js";

let endpoints = Router();

endpoints.get('/tarefas/listar', async (req, resp) => {
    let dados= await ListarTarefas();
    resp.send(dados);
})

endpoints.post('/tarefas', async (req, resp) => {
    let tarefas =req.body;

    let dados = await Inserir(tarefas);
    resp.send(dados);
})

endpoints.get('/tarefas/finalizadas', async (req, resp) => {
    let dados = await Finalizado();
    resp.send(dados);
})

endpoints.put('/tarefas/:id', async (req, resp) =>{
    let dados = await AlterarTarefa();
    resp.send(dados)
})

endpoints.delete('/tarefas/deletar', async (req, resp) =>{
    let dados = await Deletar();
    resp.send(dados);
})

export default endpoints;