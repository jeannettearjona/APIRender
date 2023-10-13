const express = require ('express')
const router = express.Router()
const RecetasControllers = require('../controllers/recetas.js')

router.get('/', RecetasControllers.getAllRecetas)
router.get('/:id', RecetasControllers.getReceta)
router.post('/add', RecetasControllers.addReceta)
//router.put('/update/:id', RecetasControllers.updateReceta)
router.delete('/delete/:id', RecetasControllers.deleteReceta)

module.exports = router;