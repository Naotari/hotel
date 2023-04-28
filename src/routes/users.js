const { Router } = require("express");
const { User } = require('../db.js');

const users = Router();

users.get("/", async (req, res) => {
    try {
        const userList = []
        const users = await User.findAll();
        users.forEach(user => userList.push({
            id: user.id,
            name: user.name,
            address: user.address,
            phone: user.phone,
        }))

            res.status(201).send(userList);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

users.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const { name, address, phone } = req.body;
        if ( !name || !address || !phone ) throw Error("Falta informacion del usuario.")
        const newUser = await User.create({ name, address, phone });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = users;