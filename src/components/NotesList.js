import Note from './Note'

function NotesList({notes, onRemove}) {
  return (
    <div className="notes-list">
      {notes.map(note => 
        <Note
          key={note.id}
          note={note}
          onRemove={onRemove}
        />
      )}
      

    </div>
  );
}

export default NotesList;
