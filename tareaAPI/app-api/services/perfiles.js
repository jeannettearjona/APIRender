const dbService = require ('../config/db.js')

module.exports = {
    getAllPerfiles : () => {
        sql='SELECT id, nombre, apellido, edad, genero, altura, peso FROM perfil'
        return dbService.querypromise(sql)

    },
    getPerfil : (id) => {
        sql = ` SELECT id, nombre, apellido, edad, genero, altura, peso 
                FROM perfil
                WHERE id=${id}`
        return dbService.querypromise(sql)

    },
    addPerfil : (body) => {
        const { nombre, apellido, edad, genero, altura, peso } = body;

        const sql = `
        INSERT INTO perfil (nombre, apellido, edad, genero, altura, peso)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`;
    
        const values = [nombre, apellido, edad, genero, altura, peso];
        return dbService.querypromise2(sql, values);

    },
    updatePerfil : (id,body) => {
        const { nombre, apellido, edad, genero, altura, peso } = body;

        sql = ` UPDATE perfil 
                SET nombre = '${nombre}',
                apellido = '${apellido}', 
                edad = ${edad}, 
                genero = '${genero}', 
                altura = ${altura}, 
                peso = ${peso}
                WHERE id = ${id}
                RETURNING *`
        return dbService.querypromise(sql)

    },
    deletePerfil : (id) => {
        //const {email}=body
        sql = `DELETE FROM perfil WHERE id = ${id}
               RETURNING *`
        return dbService.querypromise(sql)

    }
}