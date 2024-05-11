/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getNoteById();
  }, []);

  const getNoteById = async () => {
    const response = await axios.get(`http://localhost:8080/notes/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
  };

  const updateNote = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8080/notes/${id}`, {
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
          <h1 className="font-bold text-xl text-center mt-10">Edit Note</h1>
          <form onSubmit={updateNote} className="flex flex-col gap-4">
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
                  maxLength="40"
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
                  maxLength="200"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 px-3 py-1 rounded-md text-white"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditNote;
