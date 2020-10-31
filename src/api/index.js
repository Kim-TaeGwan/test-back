const express = require("express");

// const MailCheckApi = require("./mailCheck");
const userListApi = require("./userList");

const router = express.Router();

router.get("/", function (req, res) {
  res.send("api");
});

// router.use("/mailCheck", MailCheckApi);
router.use("/user", userListApi);

module.exports = router;
