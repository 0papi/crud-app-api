const express = require("express");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.port || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/data", require("./routes/routes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
