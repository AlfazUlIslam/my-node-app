const sayHi = (req, res) => {
    const name = req.body.name

    res.status(200).json({message: `Hi ${name}!`})
    return
}

module.exports = sayHi