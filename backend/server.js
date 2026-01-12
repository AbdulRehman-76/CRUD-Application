const app = require("./app");
const dotenv = require('dotenv');

//const port = process.env.PORT;
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server running on port 4000");
});
//module.exports = app;
