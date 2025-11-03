import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import "./App.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/notes`);
      setNotes(response.data);
    } catch (error) {
      console.log("Error fetching notes");
    }
  };

  const addNote = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      await axios.post(`${API_URL}/api/notes`, {
        title,
        content,
      });
      setTitle("");
      setContent("");
      fetchNotes();
    } catch (error) {
      console.log("Error adding note");
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.log("Error deleting note");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>My Notes</h1>
          <p>Simple notes app</p>
        </header>

        <form onSubmit={addNote} className="note-form">
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
          <textarea
            placeholder="Note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea"
          ></textarea>
          <button type="submit" className="btn">
            Add Note
          </button>
        </form>

        <div className="notes-grid">
          {notes.map((note) => (
            <Note key={note._id} note={note} onDelete={deleteNote} />
          ))}
        </div>

        {notes.length === 0 && (
          <div className="empty">
            <p>No notes yet. Add one above!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
