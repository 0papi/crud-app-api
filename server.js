const express = require("express");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const port = process.env.port || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/data", require("./routes/routes"));

app.use(errorHandler);
app.use(cors());

// cors middleware
app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Acces-Contorl-Allow-Methods", "Content-Type", "Authorization");
  next();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
