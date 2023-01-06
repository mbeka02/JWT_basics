const { BadRequest } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    // console.log("err");
    throw new BadRequest("Please provide an email and password");
  }
  //FOR DEMO PURPOSES ONLY
  const id = new Date().getDate();
  //signs token and provides it in response
  const token = jwt.sign({ id, username }, process.env.SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "User created", token });
};

const dashboard = async (req, res) => {
  const { username } = req.user;
  const random = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${username}`,
    secret: `your lucky number is: ${random}`,
  });
};

module.exports = { login, dashboard };
