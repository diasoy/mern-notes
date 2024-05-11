import mongoose from "mongoose";
import moment from "moment";

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: () => moment().format("DD-MM-YYYY HH:mm"),
  },
});

export default mongoose.model("Notes", NoteSchema);
