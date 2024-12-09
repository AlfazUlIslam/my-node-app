const helloWorld = (req, res) => {
    console.log("Hello world!")
    res.status(200).json({message: "Hello world!"})
    return
}

module.exports = helloWorld