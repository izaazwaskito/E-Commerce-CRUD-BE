const express = require("express");
require("dotenv").config();
const createError = require("http-errors");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const morgan = require('morgan')
const mainRouter = require("./src/routes/index");
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(morgan('dev'))

const port = 3000;
app.use("/", mainRouter);

app.all("*", (req, res, next) => {
  next(new createError.NotFound());
});
app.use((err, req, res, next) => {
  const messageError = err.message || "internal server error";
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: messageError,
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
