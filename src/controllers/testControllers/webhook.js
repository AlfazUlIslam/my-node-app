const webhook = (req, res) => {
    const bodyData = req.body

    res.status(200).send("Webhook data recieved")
    return
}

module.exports = webhook