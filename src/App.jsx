// src/App.js
import React from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

function App() {
  return (
    <div style={{ backgroundColor: '#333', color: '#FFF', minHeight: '100vh', padding: '20px' }}>
      <h1>Notes App</h1>
      <AddNote />
      <NotesList />
    </div>
  );
}

export default App;
