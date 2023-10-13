const dbService = require ('../config/db.js')

module.exports = {
    getAllRecetas : () => {
        sql='SELECT id, rNombre, ingredientes, pasos, tiempo FROM recetas'
        return dbService.querypromise(sql)

    },
    getReceta : (id) => {
        sql = ` SELECT id, rNombre, ingredientes, pasos, tiempo 
                FROM recetas
                WHERE id=${id}`
        return dbService.querypromise(sql)

    },
    addReceta : (body) => {
        const { nombre, ingredientes, pasos, tiempo } = body;

        const sql = `
        INSERT INTO Recetas (rNombre, ingredientes, pasos, tiempo)
        VALUES ($1, $2::text[], $3::text[], $4)
        RETURNING *`;
    
        const values = [nombre, ingredientes.split(', '), pasos.split(', '), tiempo];
        return dbService.querypromise2(sql, values);

    },
    deleteReceta : (id) => {
        //const {email}=body
        sql = `DELETE FROM Recetas WHERE id = ${id}
               RETURNING *`
        return dbService.querypromise(sql)

    }
}