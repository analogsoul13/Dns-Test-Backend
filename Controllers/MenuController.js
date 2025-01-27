const Menu = require('../Models/Menu')

exports.createMenu = async (req, res) => {
    try {
        const { name, description } = req.body
        const menu = new Menu({name, description})
        await menu.save()
        res.status(201).json(menu)
    } catch (error) {
        res.status(500).json("Error occured ", error)
    }
}

