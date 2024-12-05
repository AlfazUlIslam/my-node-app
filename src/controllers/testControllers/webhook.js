const webhook = (req, res) => {
    const bodyData = req.body

    res.status(200).json({bodyData})
    return
}

module.exports = webhook