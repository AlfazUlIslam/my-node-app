const webhook = (req, res) => {
    const bodyData = req.body

    console.log(bodyData)
    res.status(200).send("Webhook data recieved")
    return
}

module.exports = webhook