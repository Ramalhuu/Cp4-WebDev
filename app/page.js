'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import NotesForm from '../components/NotesForm';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';

export default function Home() {
  // useState para gerenciar a lista de anotações
  const [notes, setNotes] = useState([]);
  // useState para gerenciar o termo de busca
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  // useEffect para carregar as anotações do sessionStorage quando o componente é montado
  useEffect(() => {
    const storedNotes = JSON.parse(sessionStorage.getItem('notes') || '[]');
    setNotes(storedNotes);
  }, []);

  // useEffect para salvar as anotações no sessionStorage sempre que a lista de anotações muda
  useEffect(() => {
    sessionStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Função para adicionar uma nova anotação
  const handleAddNote = (title, content) => {
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  // Função para deletar uma anotação
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Filtra as anotações com base no termo de busca
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <h1>My Notes</h1>

      {/* Componente de formulário para adicionar novas anotações */}
      <NotesForm onAddNote={handleAddNote} />

      {/* Componente de barra de busca */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Componente de lista de anotações */}
      <NotesList notes={filteredNotes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}