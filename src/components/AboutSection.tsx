export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 
          className="text-5xl font-bold text-center mb-10 neon-text-static"
        >
          Hakkımda
        </h2>
        <div className="bg-brand-dark/30 p-8 rounded-xl shadow-lg border border-neon-green/30 max-w-3xl mx-auto">
          <p className="text-lg text-brand-light-text leading-relaxed mb-4">
            Merhaba! Ben SayterKing. YouTube kanalımda farklı konular üzerine videolar paylaşıyorum.
            Amacım sizlere keyifli ve eğlenceli zaman geçirmenizi sağlamak.
          </p>
          <p className="text-md text-brand-secondary-text leading-relaxed">
            Kanalıma göz atmayı ve en son içeriklerimden haberdar olmak için abone olmayı unutmayın! 
            Videolarımı beğenirseniz ve yorum yaparsanız çok sevinirim.
          </p>
         
          <div className="mt-8 text-center">
            <a 
              href="https://www.youtube.com/@sayterking0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block neon-text-static hover:neon-text px-8 py-3 border border-neon-cyan/30 hover:border-neon-cyan rounded-lg font-semibold transition-all duration-300"
            >
              Kanalıma Göz Atın!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 