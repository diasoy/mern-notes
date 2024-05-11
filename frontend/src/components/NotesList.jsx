import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NotesList = () => {
  const [notes, setNote] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await axios.get("http://localhost:8080/notes");
    setNote(response.data);
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/notes/${id}`);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-start">
      <div className="w-full mb-4">
        <h1 className="font-bold text-xl text-center my-5">Data Notes</h1>
        <Link
          to="add"
          className="bg-green-100 text-lg font-semibold px-3 py-2 rounded-lg ml-4"
        >
          Add New
        </Link>
      </div>
      {notes.map((note) => (
        <div
          key={note._id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-3 mb-6"
        >
          <div className="bg-white rounded shadow p-4">
            <h2 className="font-bold text-lg mb-2 overflow-x-auto">
              {note.title}
            </h2>
            <p className="text-gray-700 mb-2 overflow-auto">
              {note.description}
            </p>
            <p className="text-gray-500 text-sm mb-4">{note.createdAt}</p>
            <div className="flex items-center">
              <Link
                to={`/edit/${note._id}`}
                className="bg-sky-100 px-3 py-1 rounded-lg"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteNote(note._id)}
                className="bg-red-100 px-3 py-1 rounded-lg ml-3"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
