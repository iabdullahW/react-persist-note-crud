// src/features/notesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        content: action.payload.content,
      });
    },
    deleteNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const note = state.find(note => note.id === action.payload.id);
      if (note) {
        note.title = action.payload.title;
        note.content = action.payload.content;
      }
    },
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;
