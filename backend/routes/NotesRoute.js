import express from "express";
import {
  getNotes,
  getNoteById,
  saveNote,
  updateNote,
  deleteNote,
} from "../controllers/NotesController.js";

const router = express.Router();

router.get("/notes", getNotes);
router.get("/notes/:id", getNoteById);
router.post("/notes", saveNote);
router.patch("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

export default router;
