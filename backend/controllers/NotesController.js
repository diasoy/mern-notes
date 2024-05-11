import Note from "../models/NotesModel.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveNote = async (req, res) => {
  const note = new Note(req.body);
  try {
    const insertedNote = await note.save();
    res.status(201).json(insertedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const updatedNote = await Note.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
