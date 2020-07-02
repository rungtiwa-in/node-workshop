const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/', userController.getAllUser)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)

module.exports = router

