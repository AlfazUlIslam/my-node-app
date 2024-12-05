const dotenv = require("dotenv")
const express = require("express")
const { PORT } = require("./config/envs")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.status(200).json({message: "Hello world!!!"})
    return
})

app.post("/hook", (req, res) => {
    const bodyData = req.body

    res.status(200).json({bodyData})
    return
})

app.listen(PORT, () => {console.log(`App listening on port: ${PORT}`)})