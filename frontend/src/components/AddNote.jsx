import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const saveNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/notes", {
        title,
        description,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex w-full justify-center items-center mx-2">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl text-center mt-10">Tambah Note</h1>
          <form onSubmit={saveNote} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-medium">
                Title <p className="font-light text-sm">(max 40)</p>
              </label>
              <div className="border rounded">
                <input
                  type="text"
                  className="px-2 py-1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  maxLength="50"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium">
                Description <p className="font-light text-sm">(max 200)</p>
              </label>
              <div className="border rounded">
                <textarea
                  type="text"
                  className="px-2 py-1 w-full"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  maxLength="200"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 px-3 py-1 rounded-md text-white"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNote;
