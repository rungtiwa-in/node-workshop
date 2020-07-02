const express = require('express')
const router = express.Router()
const { index, getPostById, createPost, updatePost } = require('../controllers/postController')

router.get('/', index)
router.get('/:id', getPostById)
router.post('/', createPost)
router.put('/', updatePost)

module.exports = router

