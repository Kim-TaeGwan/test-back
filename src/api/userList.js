const express = require("express");
const router = express.Router();

const mysql = require("mysql2");
const dbconfig = require("../db");
const connection = mysql.createConnection(dbconfig);

router.get("/", (req, res) => {
  connection.query("SELECT * FROM test.userInfo", (error, rows) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "kys6704!@",
//   database: "test",
// });
// router.get("/", (req, res) => {
//   connection.connect();

//   connection.query("SELECT * FROM test.userInfo", function (err, rows, fields) {
//     if (err) throw err;

//     console.log("User List", rows);
//     res.send(rows);
//   });

//   connection.end();
// });

module.exports = router;
