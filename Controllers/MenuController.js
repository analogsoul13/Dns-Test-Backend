const Item = require('../Models/Item')
const Menu = require('../Models/Menu')

exports.createMenu = async (req, res) => {
    try {
        const { name, description } = req.body
        const menu = new Menu({ name, description })
        await menu.save()
        res.status(201).json(menu)
    } catch (error) {
        res.status(500).json("Error occured ", error)
    }
}

exports.getAllMenu = async (req, res) => {
    try {
        const menus = await Menu.find()
        res.json(menus)
    } catch (error) {
        res.status(500).json("Error while loading menus", error)
    }
}

exports.getMenuItems = async (req, res) => {
    try {
        const items = await Item.find({ menuId: req.params.id })
        res.json(items)
    } catch (error) {
        res.status(500).json("Error loading menu items", error)
    }
}

exports.addMenuItem = async (req, res) => {
    try {
        const { name, description, price } = req.body
        const existingItem = await Item.findOne({ menuId: req.params.id, name });

        if (existingItem) {
            return res.status(400).json({ message: 'Item already exists in this menu' });
        }
        
        const item = new Item({ menuId: req.params.id, name, description, price })
        await item.save()
        res.status(201).json(item)
    } catch (error) {
        res.status("Error adding item", error)
    }
}