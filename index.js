const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");

const app = express();
const port = 3001;

connectToMongo();

app.use(cors());
app.use(express.json());
app.use("/api/crud", require("./routes/crud"));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
