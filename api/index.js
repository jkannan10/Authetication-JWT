import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connectDB.js";
import Student from "./model/student.js";
import afford from "./afford.js";
/* config */
const app = express();
dotenv.config();

/* in-built middleware */
app.use(express.json());
app.use(cors());

app.use("/api", afford);
/* Middle ware */
app.post("/register", async (req, res) => {
  const newStudent = await new Student(req.body).save();
  res.status(200).json(newStudent);
});
app.get("/primes", (req, res) => {
  res.status(200).send([2, 3, 5, 7]);
});
app.get("/odd", (req, res) => {
  res.status(200).send([1, 3, 5, 7]);
});
app.get("/json", (req, res) => {
  const { key } = req.query;
  console.log(key);
  res.status(200).json(key);
});

app.listen(5005, (req, res) => {
  console.log("Listening to port 5005");
  //connectDB();
});
