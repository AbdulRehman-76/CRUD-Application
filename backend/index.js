//just for practice
const express = require('express');
const connectDB = require('./db');
const users = require('./routes/users');

const app = express();
const PORT = 3000;
//body parser
app.use(express.json());

//connect to database
connectDB();
app.use('/api', users);

app.get('/', (req, res) => {
	console.log('Get Request');
	res.send('Hello Sending getting request');
});

app.listen(PORT, () => {
	console.log('Server started!');
});
