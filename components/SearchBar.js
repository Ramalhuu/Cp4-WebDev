
'use client';

// Componente de barra de busca
export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)} // Atualiza o termo de busca
    />
  );
}


