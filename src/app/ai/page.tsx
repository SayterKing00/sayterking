import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20 px-4 md:px-8 bg-brand-dark/90 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(0,224,255,0.05)] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgba(255,0,87,0.05)] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold neon-text mb-4 text-center pt-10">AI Hub</h1>
          <p className="text-center text-gray-400 mb-12">Yapay Zeka ile sohbet edin, sorular sorun, üretkenliğinizi artırın.</p>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-[0_0_30px_rgba(0,224,255,0.05)] transition-all hover:shadow-[0_0_40px_rgba(0,224,255,0.1)]">
            <h2 className="text-2xl font-semibold mb-6 neon-text-pink flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c1.68 0 3.282.429 4.75 1.19a.75.75 0 001-.707V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
              Sohbet Asistanı
            </h2>
            
            {/* Chat Interface Placeholder */}
            <div className="bg-black/60 rounded-xl h-[500px] flex flex-col mb-4 overflow-hidden border border-white/5 relative">
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                
                {/* AI Message */}
                <div className="flex justify-start">
                  <div className="bg-[rgba(0,224,255,0.1)] border border-[rgba(0,224,255,0.2)] rounded-2xl rounded-tl-none px-5 py-4 max-w-[85%] text-sm md:text-base text-gray-200">
                    <p className="mb-2 font-medium text-[rgba(0,224,255,0.9)]">SayterKing AI</p>
                    <p>Merhaba! Ben sisteme entegre edilmiş yapay zeka asistanıyım. Yazılım, kodlama veya genel sorularınızda size yardımcı olabilirim. Nasıl yardımcı olabilirim?</p>
                  </div>
                </div>
                
                {/* User Message Example */}
                {/* <div className="flex justify-end">
                  <div className="bg-white/10 rounded-2xl rounded-tr-none px-5 py-4 max-w-[85%] text-sm md:text-base text-gray-200">
                    Bana Next.js hakkında bilgi verir misin?
                  </div>
                </div> */}
              </div>
              
              <div className="p-4 md:p-5 bg-black/80 border-t border-white/5 relative flex items-center gap-3">
                <input 
                  type="text" 
                  placeholder="Yapay zekaya bir mesaj yazın..." 
                  className="flex-1 bg-white/5 border border-white/10 rounded-full py-3 md:py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-[rgba(0,224,255,0.5)] focus:ring-1 focus:ring-[rgba(0,224,255,0.5)] transition-all text-sm md:text-base"
                />
                <button className="bg-[rgba(255,0,87,0.8)] hover:bg-[rgba(255,0,87,1)] text-white p-3 md:p-4 rounded-full transition-all shadow-[0_0_15px_rgba(255,0,87,0.4)] hover:shadow-[0_0_20px_rgba(255,0,87,0.6)] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Yapay zeka asistanı şu anda aktif
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
