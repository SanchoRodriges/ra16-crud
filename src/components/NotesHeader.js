import refresh from '../img/refresh.png'

function NotesHeader({update}) {

  return (
    <div className="notes-header">
      <h1>Notes</h1>
      <img src={refresh} onClick={update} />
    </div>
  );
}

export default NotesHeader;
