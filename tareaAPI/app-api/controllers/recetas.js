const RecetaServices = require ('../services/recetas.js')
module.exports = {

    getAllRecetas : async (req,res,next) => {
        try {
            const recetas = await RecetaServices.getAllRecetas();
            res.json({recetas})
        }
        catch(err) {
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})

        }
    },
    getReceta : async (req, res) => {
        const id = req.params.id
        try {
            const receta = await RecetaServices.getReceta(id);
            res.json({receta})
        }
        catch(err) {
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }
    },
    addReceta : async (req, res) => {
        try {
            const receta = await RecetaServices.addReceta(req.body);
            res.json({receta})
        }
        catch(err) {
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }
    },
    deleteReceta : async (req, res) => {
        try {
            const id = req.params.id
            const receta = await RecetaServices.deleteReceta(id);
            res.json({receta})
        }
        catch(err) {
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }
    }
}