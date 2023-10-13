const PerfilesServices = require ('../services/perfiles.js')
module.exports = {

    getAllPerfiles : async (req,res,next) => {
        try {
            const perfiles = await PerfilesServices.getAllPerfiles();
            res.json({perfiles})
        }
        catch(err) {
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})

        }
    },
    getPerfil : async (req, res) => {
        const id = req.params.id
        try {
            const perfil = await PerfilesServices.getPerfil(id);
            res.json({perfil})
        }
        catch(err) {
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }
    },
    addPerfil : async (req, res) => {
        try {
            const perfil = await PerfilesServices.addPerfil(req.body);
            res.json({perfil})
        }
        catch(err) {
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }
    },
    updatePerfil : async (req, res) => {
        try {
            const id = req.params.id
            const perfil = await PerfilesServices.updatePerfil(id, req.body);
            res.json({perfil})
        }
        catch(err) {
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }
    },
    deletePerfil : async (req, res) => {
        try {
            const id = req.params.id
            const perfil = await PerfilesServices.deletePerfil(id);
            res.json({perfil})
        }
        catch(err) {
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }
    }
}