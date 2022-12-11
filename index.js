import express from "express";
import bodyParser from "body-parser";
import usersRoute from "./routes/users.js";

const app = express();
const PORT = 5001;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome from homepage!");
});

// Use bodyParser middleware to handle only JSON Data
app.use(bodyParser.json());

// Users Route(/users)
app.use("/users", usersRoute);

// Run express server
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
