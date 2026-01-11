const User = require("../models/UserModels");

exports.createUser = async (req, res) => {
  const { name, age, weight } = req.body;
  const user = await User.create({ name, age, weight });
  res.json(user);
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
