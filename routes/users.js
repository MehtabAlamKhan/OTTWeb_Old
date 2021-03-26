const router = require("express").Router();
const User = require("../models/users.model");
const { registerValidation } = require("../userValidations");

router.post("/users", async (req, res) => {
  let msg = "";

  if (req.body.email) {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else msg = "allowed";
  }

  const usernameExist = await User.findOne({ username: req.body.username });
  if (usernameExist) return res.status(400).send("Username already exist");
  else msg = "allowed";

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exist");
  else msg = "allowed";
  if (msg) res.status(200).send("allowed");
});

module.exports = router;
