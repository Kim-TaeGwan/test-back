const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kys6704!@",
  database: "test",
});

connection.connect();

connection.query("SELECT * FROM test.userInfo", function (err, rows, fields) {
  if (err) throw err;

  console.log("User List", rows);
});

connection.end();
