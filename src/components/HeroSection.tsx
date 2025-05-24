"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface VideoData {
  id: number;
  title: string;
  videoId: string;
  youtubeLink: string;
}

// YouTube'dan küçük resim URL'si oluşturan yardımcı fonksiyon
const getYouTubeThumbnailUrl = (videoId: string) => {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
};

export default function HeroSection() {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        const response = await fetch('/videos.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVideos(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Videolar yüklenirken bir hata oluştu.');
        }
        console.error("Failed to fetch videos:", e);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section id="videos" className="py-16 min-h-[400px] flex items-center justify-center">
        <div className="container mx-auto text-center">
          <p className="text-xl text-neon-cyan">Videolar yükleniyor...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="videos" className="py-16 min-h-[400px] flex items-center justify-center">
        <div className="container mx-auto text-center">
          <p className="text-xl text-neon-pink">Hata: {error}</p>
          <p className="text-brand-secondary-text mt-2">Lütfen 'public/videos.json' dosyasının doğru formatta (videoId içermeli) ve erişilebilir olduğundan emin olun.</p>
        </div>
      </section>
    );
  }

  if (videos.length === 0) {
    return (
      <section id="videos" className="py-16 min-h-[400px] flex items-center justify-center">
        <div className="container mx-auto text-center">
          <p className="text-xl text-neon-purple">Gösterilecek video bulunamadı.</p>
          <p className="text-brand-secondary-text mt-2">Lütfen 'public/videos.json' dosyasına video eklediğinizden emin olun.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="videos" className="py-16">
      <div className="container mx-auto px-4">
        <h2 
          className="text-5xl font-bold text-center mb-12 neon-text-static"
        >
          Videolarım
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a 
              key={video.id} 
              href={video.youtubeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-brand-dark/50 border border-neon-purple/30 rounded-xl p-1 shadow-lg hover:shadow-neon-glow-purple transition-all duration-300 block hover:scale-105 transform"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 relative overflow-hidden rounded-lg">
                <Image 
                  src={getYouTubeThumbnailUrl(video.videoId)} 
                  alt={video.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="group-hover:opacity-80 transition-opacity duration-300"
                />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-2 px-3 pb-3 text-brand-light-text group-hover:text-neon-cyan transition-colors duration-300 truncate">
                {video.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 