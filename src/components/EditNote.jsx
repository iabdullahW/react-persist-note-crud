// src/components/EditNote.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote } from '../features/notesSlice';

const EditNote = ({ note, setEditId }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editNote({
      id: note.id,
      title,
      content,
    }));
    setEditId(null);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleEdit}>Save</button>
      <button onClick={() => setEditId(null)}>Cancel</button>
    </div>
  );
};

export default EditNote;
