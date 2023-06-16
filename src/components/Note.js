import close from '../img/close.png'

function Note({note, onRemove}) {
  return (
    <div className="note">
      {note.content} <img src={close} onClick={() => onRemove(note.id)} />
    </div>
  );
}

export default Note;
