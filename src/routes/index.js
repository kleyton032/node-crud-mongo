const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    res.status(200).send({
        Title: 'Node API',
        Version: '0.0.1'
    })
})

module.exports = router