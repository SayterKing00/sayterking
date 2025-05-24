export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-secondary-text p-6 mt-12 border-t border-neon-purple/30">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} SayterKing. Tüm hakları saklıdır.</p>
        <p className="text-sm mt-2">
          Neon tema <span className="text-neon-pink">♥</span> ile tasarlandı.
        </p>
        {/* Sosyal medya ikonları eklenebilir */}
      </div>
    </footer>
  );
} 