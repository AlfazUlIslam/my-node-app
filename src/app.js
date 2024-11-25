const dotenv = require("dotenv")
const express = require("express")

dotenv.config()

const app = express()
const port = process.env.PORT

app.get("/", (req, res) => {
    res.status(200).json({message: "Hello world!"})
    return
})

app.post("/hook", (req, res) => {
    const bodyData = req.body

    res.status(200).json({bodyData})
    return
})

app.listen(port, () => {console.log(`App listening on port: ${port}`)})