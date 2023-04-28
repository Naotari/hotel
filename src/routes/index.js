const { Router } = require("express");
const  rooms = require("./rooms.js");
const  users = require("./users.js");
const  booking = require("./booking.js");

const router = Router(); //para añadir rutas


//rutas
router.use("/users", users)
router.use("/rooms", rooms)
router.use("/booking", booking)


module.exports = router;