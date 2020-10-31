const express = require("express");
const morgan = require("morgan");

const api = require("./api");

const app = express();
const cors = require("cors");

const port = 4000;

app.use(cors({ origin: true })); // 자기와 다른 origin 접근 가능하도록 허용
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", api);

app.get("/", function (req, res) {
  console.log(req.query);
  console.log(req.body);
  res.send("main");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
