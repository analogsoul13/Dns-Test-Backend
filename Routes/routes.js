const express = require('express')
const { createMenu, getAllMenu, getMenuItems, addMenuItem } = require('../Controllers/MenuController')

const router = express.Router()

router.post("/menu", createMenu)
router.get("/menu", getAllMenu)
router.get("/menu/:id", getMenuItems)
router.post("/menu/:id/items", addMenuItem)

module.exports = router