const Item = require('../Models/Item')
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

exports.getAllMenu = async (req,res) => {
    try {
        const menus = await Menu.find()
        res.json(menus)
    } catch (error) {
        res.status(500).json("Error while loading menus", error)
    }
}

exports.getMenuItems = async (req,res) => {
    try {
        const items = await Item.find({menuId: req.params.id})
        res.json(items)
    } catch (error) {
        res.status(500).json("Error loading menu items", error)
    }
}