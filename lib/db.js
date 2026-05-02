import mongoose from "mongoose";
import "dotenv/config"; //1

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI) //2
    .then(() => console.log("DB is connected"));
};

export default connectDB;
