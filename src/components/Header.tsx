import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-brand-dark text-brand-light-text p-4 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold neon-text">
          SayterKing
        </Link>
        <div className="space-x-4 md:space-x-6 text-sm md:text-base">
          <Link href="/" className="hover:neon-text-pink transition-all duration-300">Ana Sayfa</Link>
          <Link href="/#about" className="hover:neon-text-pink transition-all duration-300">Hakkımda</Link>
          <Link href="/#videos" className="hover:neon-text-pink transition-all duration-300">Videolar</Link>
          <Link href="/ai" className="hover:neon-text-pink transition-all duration-300 text-[rgba(0,224,255,0.9)]">AI Sohbet</Link>
        </div>
      </nav>
    </header>
  );
} 