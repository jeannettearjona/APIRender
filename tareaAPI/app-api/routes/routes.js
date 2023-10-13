const express = require ('express')
const router = express.Router()

router.use('/users', require('./users.js'))
router.use('/recetas', require('./recetas.js'))
router.use('/perfiles', require('./perfiles.js'))

module.exports = router;