
import Link from 'next/link';

// Componente Header para navegação
export default function Header() {
  return (
    <header>
      <nav>
        {/* Link para a página inicial */}
        <Link href="/">
          Home
        </Link>
      </nav>
    </header>
  );
}


