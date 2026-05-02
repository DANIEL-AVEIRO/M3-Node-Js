import express from "express";
import connectDB from "../lib/db.js";
import "dotenv/config";
import postRouter from "../routes/post_routes.js"; //1

const app = express();
app.use(express.json())
const port = process.env.PORT;

app.use("/api/post", postRouter); //2

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDB();
});
