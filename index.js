const express = require("express");
const routes = require("./src/routes/index.js");
const { connect } = require('./src/db.js');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const server = express();

server.name = "API";
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Range, Origin, X-Requested-With, Content-Type, Accept, Range"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Range");
  next();
});



//rutas
server.use('/', routes);


connect.sync({ force: true }).then(() => { //force true para volver a crear la DB 
    server.listen(3000)
    console.log("server started on ", 3000);
});


