import React, { useState, useEffect } from 'react'
import NotesList from './NotesList'
import NotesHeader from './NotesHeader'
import AddNote from './AddNote';

function Notes() {

  const [notes, setNotes] = useState([]);

  // const [newNote, setNewNote] = useState('');

  const url = 'http://localhost:7070/notes'

  const getNotes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNotes(data);
  }

  const postNotes = async (newNote) => {
    const note = {
      "id": 0,
      "content": newNote
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(note)
    }
    await fetch(url, options);

    getNotes();
  }

  const removeNotes = async (id) => {
    const options = {
      method: 'DELETE'
    }
    await fetch(url + '/' + id, options);

    getNotes();
  }

  useEffect(() => {
    getNotes();
  }, [])

  return (
    <div className="notes">

      <NotesHeader update={getNotes} />

      <NotesList
        notes={notes}
        onRemove={removeNotes}
      />

      <AddNote
        addNote={newNote => postNotes(newNote)}    
      />

    </div>
  );
}

export default Notes;