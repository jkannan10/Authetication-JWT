import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_DB);
  console.log("Connected to MOngo DB");
};
export default connectDB;
