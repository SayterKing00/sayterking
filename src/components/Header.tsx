export default function Header() {
  return (
    <header className="bg-brand-dark text-brand-light-text p-4 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold neon-text">
          SayterKing
        </div>
        <div className="space-x-6">
          <a href="#" className="hover:neon-text-pink transition-all duration-300">Ana Sayfa</a>
          <a href="#about" className="hover:neon-text-pink transition-all duration-300">Hakkımda</a>
          <a href="#videos" className="hover:neon-text-pink transition-all duration-300">Videolar</a>
          {/* Diğer bağlantılar eklenebilir */}
        </div>
      </nav>
    </header>
  );
} 