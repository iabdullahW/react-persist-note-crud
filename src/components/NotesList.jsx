// src/components/NotesList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../features/notesSlice';
import EditNote from './EditNote';

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
          <button onClick={() => setEditId(note.id)}>Edit</button>
          {editId === note.id && (
            <EditNote note={note} setEditId={setEditId} />
          )}
        </div>
      ))}
    </div>
  );
};

export default NotesList;
