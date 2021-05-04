const express = require("express");
const router = express.Router()
const { records } = require('../services/recods')

router
    .get('/', (req, res) => { res.send("Hello from api route....!!") })
    .get('/records', records)

module.exports = router
