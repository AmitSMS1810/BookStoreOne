import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String,
});

export default mongoose.model("Book", bookSchema);