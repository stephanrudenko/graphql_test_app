const express = require("express");
require("dotenv").config({ path: "./server/.env" });
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

const app = express();

// Connect to database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server runned on port ${port}`));
