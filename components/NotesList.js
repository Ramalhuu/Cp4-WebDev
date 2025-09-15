
'use client';

import NoteItem from './NoteItem';

// Componente para exibir a lista de anotações
export default function NotesList({ notes, onDeleteNote }) {
  return (
    <div>
      {/* Mapeia cada anotação para um componente NoteItem */}
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
}


