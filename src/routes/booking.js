const { Router } = require("express");
const { Booking } = require('../db.js');

const booking = Router();

booking.get("/", async (req, res) => {
    try {
        const bookingList = []
        const bookings = await Booking.findAll();
        bookings.forEach(booking => bookingList.push({
            id: booking.id,
            date_start: booking.date_start,
            date_end: booking.date_end,
            userId: booking.userId,
            roomId: booking.roomId,
        }))
            res.status(201).send(bookingList);
    } catch (error) {
        res.status(400).send(error.message);
    }
})


booking.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const { date_start, date_end, user_id, room_id } = req.body;
        if ( !date_start || !date_end || !user_id || !room_id ) throw Error("Falta informacion de la reserva.")
        const newBooking = await Booking.create({ date_start, date_end, user_id, room_id });
        await newBooking.setUser(user_id);
        await newBooking.setRoom(room_id);
        res.status(201).send(newBooking);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = booking;