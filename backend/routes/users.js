//practice just
const express = require('express');
const router = express.Router();

const User = require('../models/UserModels');
//routes
//CRUD operation
//Read/View
router.get('/users', async (req, res) => {
	try {
		console.log('Users Get request');
		//below query is to fetch all users
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err.message,
		});
	}
});
//Create
//here first i extract data then i will insert into db
router.post('/users', async (req, res) => {
	try {
		const { name, age, weight } = req.body;
		const newUser = new User({ name, age, weight });
		await newUser.save();
		//save is use to add data
		res.status(200).json({
			success: true,
			user: newUser,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err.message,
		});
	}
});

module.exports = router;
