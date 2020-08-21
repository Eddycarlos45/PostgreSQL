const db = require('./_database')

async function updateData(){
    await db.connect()
    const queryUpdate  = "UPDATE participante SET nome = ($1) WHERE id = 1"
    await db.query(queryUpdate,['Carlos Augusto'])
    console.log("Atualizado")
}

async function deleteData(){
    const queryUpdate  = "DELETE FROM evento_participante WHERE participante_id = ($1)"
    await db.query(queryUpdate,['1'])
    console.log("Deletado")
}
deleteData()
updateData()

