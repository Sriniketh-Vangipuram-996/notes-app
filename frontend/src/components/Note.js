import React from "react";

const Note = ({ note, onDelete }) => {
  return (
    <div className="note-card">
      <div className="note-header">
        <h3>{note.title}</h3>
        <button onClick={() => onDelete(note._id)} className="delete-btn">
          ×
        </button>
      </div>
      <p>{note.content}</p>
      <small>{new Date(note.createdAt).toLocaleDateString()}</small>
    </div>
  );
};

export default Note;
