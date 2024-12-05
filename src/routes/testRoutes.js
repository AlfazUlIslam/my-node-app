const express = require("express")
const router = express.Router()
const { helloWorld, sayHi, webhook } = require("../controllers")

router.get("/", helloWorld)
router.post("/say-hi", sayHi)
router.post("/webhook", webhook)

module.exports = router