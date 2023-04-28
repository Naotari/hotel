const { Router } = require("express");
const { Room } = require('../db.js');

const rooms = Router();

rooms.get("/", async (req, res) => {
    try {
        const roomList = []
        const rooms = await Room.findAll();
        rooms.forEach(room => roomList.push({
            id: room.id,
            number: room.number,
            type: room.type,
            price: room.price,
            available: room.available
        }))

            res.status(201).send(roomList);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

rooms.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const { number, type, price } = req.body;
        if ( !number || !type || !price ) throw Error("Falta informacion del cuarto.")
        const newRoom = await Room.create({ number, type, price });
        res.status(201).send(newRoom);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = rooms;