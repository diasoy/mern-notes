import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import NoteRoutes from "./routes/NotesRoute.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/notes");

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

app.use(cors());
app.use(express.json());
app.use(NoteRoutes);

app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});
