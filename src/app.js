const dotenv = require("dotenv")
const express = require("express")

dotenv.config()

const app = express()
const port = process.env.PORT

app.post("/hook", (req, res) => {
    res.status(200).json({message: "Hi!"})
    return
})

app.listen(port, () => {console.log(`App listening on port: ${port}`)})