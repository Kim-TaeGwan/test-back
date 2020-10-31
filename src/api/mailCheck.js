const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", async (req, res) => {
  let smtpTransport = nodemailer.createTransport({
    service: "Naver",
    honst: "smtp.naver.com",
    port: 587,
    auth: {
      user: "ab154@naver.com",
      pass: "adslzz00",
    },
  });

  let mailOptions = {
    from: "ab154@naver.com",
    to: "rlaxorhks154@gmail.com",
    subject: "메일 test",
    text: "메일 test",
  };

  await smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      // res.json({ msg: "err" });
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      // res.json({ msg: "sucess" });
    }
    smtpTransport.close();
  });
});
