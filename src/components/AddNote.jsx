// src/components/AddNote.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notesSlice';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addNote({ title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;
