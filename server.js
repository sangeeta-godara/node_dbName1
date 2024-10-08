// server.js
require("dotenv").config();
require("./config/db.js");
const express = require("express"); 
const bodyParser = require("body-parser");
const personRoutes = require('./routes/personRoute.js');
const menuRoutes = require('./routes/menuRoute.js');

const app = express();


app.use(bodyParser.json());
app.use("/person", personRoutes)
app.use("/menu", menuRoutes)



app.get("/", async (req, res) => {
  await res.send(" hello! .....How can i help you?");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
