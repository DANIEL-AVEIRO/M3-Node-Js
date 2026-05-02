import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true, default: "Anonymous" },
    viewer: { type: Number, default: 0 },
    description: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model("Posts", postSchema);
