
'use client';

import { useRouter } from 'next/navigation';

// Componente para exibir um item individual da anotação
export default function NoteItem({ note, onDeleteNote }) {
  const router = useRouter();

  return (
    <div>
      <h2>{note.title}</h2>
      {/* Exibe uma prévia do conteúdo da anotação */}
      <p>{note.content.substring(0, 100)}...</p>
      {/* Exibe a data de criação formatada */}
      <p>Created at: {new Date(note.createdAt).toLocaleString()}</p>
      {/* Botão para ver detalhes da anotação, usando Next Router */}
      <button onClick={() => router.push(`/notes/${note.id}`)}>View Details</button>
      {/* Botão para deletar a anotação */}
      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    </div>
  );
}


