import React, { useState } from 'react'
import arrow from '../img/arrow.png'

function AddNote( {addNote} ) {

  const [newNote, setNewNote] = useState('');

  const newNoteChange = e => {
    setNewNote(e.target.value);
  }

  const addNewNote = e => {
    e.preventDefault();
    if(newNote) {
      addNote(newNote);
      setNewNote('');
    }    
  }

  return (
    <div className="add-note">
      <h2>Добавить запись</h2>
      <form>
        <textarea value={newNote} onChange={newNoteChange} />
        <button type="button" onClick={addNewNote}>
          <img src={arrow} alt="Добавить" />
        </button> 

      </form>
    </div>
  );
}

export default AddNote;