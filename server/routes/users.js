const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/new', (req, res) => {
    res.send('New World')
})

module.exports = router