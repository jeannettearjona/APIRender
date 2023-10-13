const express = require ('express')
const router = express.Router()
const PerfilesControllers = require('../controllers/perfiles.js')

router.get('/', PerfilesControllers.getAllPerfiles)
router.get('/:id', PerfilesControllers.getPerfil)
router.post('/add', PerfilesControllers.addPerfil)
router.put('/update/:id', PerfilesControllers.updatePerfil)
router.delete('/delete/:id', PerfilesControllers.deletePerfil)

module.exports = router;