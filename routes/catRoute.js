const express = require('express')
const router = express.Router()

router.get('/eat', function (req, res) {
    res.send('cat walk')
})

router.get('/sleep', function (req, res) {
    res.send('cat sleep')
})

module.exports = router