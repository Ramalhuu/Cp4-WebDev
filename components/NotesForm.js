
'use client';

import { useState } from 'react';

// Componente de formulário para criar novas anotações
export default function NotesForm({ onAddNote }) {
  // useState para gerenciar o título do formulário
  const [title, setTitle] = useState('');
  // useState para gerenciar o conteúdo do formulário
  const [content, setContent] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se título e conteúdo não estão vazios
    if (title.trim() && content.trim()) {
      onAddNote(title, content); // Chama a função onAddNote passada via props
      setTitle(''); // Limpa o campo de título
      setContent(''); // Limpa o campo de conteúdo
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
}


