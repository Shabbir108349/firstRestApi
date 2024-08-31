const express = require('express')
const controller = require('../Controller/controller')

const router = express.Router()


router.get('/api/get',controller.getAllController)
router.post('/api/post',controller.postAllController)
router.put('/api/put/:id',controller.putAllController)


module.exports = router