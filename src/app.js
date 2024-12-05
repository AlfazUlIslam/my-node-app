const dotenv = require("dotenv")
const express = require("express")
const { PORT } = require("./config/envs")
const { testRouter } = require("./routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/test", testRouter)

app.listen(PORT, () => {console.log(`App listening on port: ${PORT}`)})