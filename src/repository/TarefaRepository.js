import conexao from "./Connection.js";


export async function ListarTarefas() {
    let sql = 'select * from tb_tarefas';

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
}

export async function Inserir(tarefas) {
    let sql = 'insert into tb_tarefas (ds_tarefa, nr_ordem, bt_finalizado, dt_cadastro) values (? , ? , ? , ?)';

    let resp = await conexao.query(sql, [tarefas.desc, tarefas.ordem, tarefas.finalizado, tarefas.cadastro]);
    let dados = resp[0];

    tarefas.id = dados.insertId;
    return tarefas;
}

export async function Finalizado(){
    let sql = 'select ds_tarefa, bt_finalizado from tb_tarefas where bt_finalizado = true';

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
}

export async function AlterarTarefa(){
   let sql = `update tb_tarefas
   set ds_tarefa = 'acordar',
	   nr_ordem = 1,
       bt_finalizado = false,
       dt_cadastro = '2023-08-20'
 where id_tarefa = 1;`
 
    let resp = await conexao.query(sql);
    let dados = resp[0];

   return dados;
}

export async function Deletar(){
    let sql = `delete from tb_tarefas where id_tarefas = 2`

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
}