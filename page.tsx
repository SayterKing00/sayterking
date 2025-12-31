"use client";

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Snowflake } from 'lucide-react'

export default function EylemeOzelPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [showConfetti, setShowConfetti] = useState(false)
  const [flowerOpen, setFlowerOpen] = useState(false)

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === '16082022') {
      setIsAuthenticated(true)
      setError('')
      // Konfeti patlaması için kısa bir gecikme
      setTimeout(() => {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      }, 500)
    } else {
      setError('Yanlış şifre!')
      setPassword('')
    }
  }

  const handleGiftClick = () => {
    setFlowerOpen(true)
    // 2.5 saniye sonra çiçeği kapat
    setTimeout(() => {
      setFlowerOpen(false)
    }, 2500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            initial={{ 
              x: Math.random() * dimensions.width, 
              y: -50,
              opacity: 0
            }}
            animate={{
              y: dimensions.height + 50,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Snowflake size={20} />
          </motion.div>
        ))}
      </div>

      {/* Sparkle Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="text-yellow-300" size={15} />
          </motion.div>
        ))}
      </div>

      {/* Konfeti Patlaması */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
            {[...Array(30)].map((_, i) => {
              const colors = ['#FFD700', '#FF69B4', '#FF1493', '#FF6347', '#FFA500', '#FF6B6B']
              const color = colors[Math.floor(Math.random() * colors.length)]
              const angle = (Math.PI * 2 * i) / 30
              const velocity = 200 + Math.random() * 100
              const x = Math.cos(angle) * velocity
              const y = Math.sin(angle) * velocity
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    backgroundColor: color,
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                  }}
                  animate={{
                    x: x,
                    y: y,
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeOut',
                  }}
                />
              )
            })}
          </div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 pt-8 pb-8 md:pt-16 md:pb-12 relative z-10">
        <AnimatePresence mode="wait">
          {!isAuthenticated ? (
            <motion.div
              key="password"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="max-w-md mx-auto mt-8 md:mt-32"
            >
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="inline-block mb-4"
                  >
                    <Sparkles className="text-yellow-400" size={48} />
                  </motion.div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                    Özel Sayfa
                  </h1>
                  <p className="text-gray-300 text-sm">Şifreyi girerek devam edin</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError('')
                      }}
                      placeholder="Şifre"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      autoFocus
                    />
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2"
                      >
                        {error}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Giriş Yap
                  </motion.button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto mt-8 md:mt-20"
            >
              <div className="text-center space-y-8">
                {/* Confetti Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="mb-8"
                >
                  <Sparkles className="text-yellow-400 mx-auto w-16 h-16 md:w-20 md:h-20" size={64} />
                </motion.div>

                {/* Main Message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-black/50 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-yellow-400/30"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255, 215, 0, 0.5)",
                        "0 0 40px rgba(255, 215, 0, 0.8)",
                        "0 0 20px rgba(255, 215, 0, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="p-8 rounded-2xl"
                  >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-yellow-400 via-red-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                      🎉 MUTLU YILLAR! 🎉
                    </h1>
                    
                    <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl leading-relaxed">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-white/90"
                      >
                        Yaptığım şeylerden dolayı tekrar özür diliyorum
                      </motion.p>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-white/90"
                      >
                        ve
                      </motion.p>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-white/90"
                      >
                        Bir yıl daha biterken, kalbimin her köşesinde senin izlerin var.
                      </motion.p>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="text-yellow-300 font-semibold text-xl md:text-2xl lg:text-3xl mt-6 md:mt-8"
                      >
                        Yeni yılda tek arzum; seninle tekrardan eskisi gibi olmamız
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, type: "spring" }}
                        className="mt-10 text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent"
                      >
                        MUTLU YILLAR! ✨
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, type: "spring" }}
                        className="mt-8 text-5xl md:text-6xl font-bold text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                      >
                        E❤E
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="flex justify-center gap-4 mt-8"
                >
                  {['🎄', '🎁', '⭐', '🎊', '💝'].map((emoji, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 0 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="text-2xl md:text-4xl"
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Yeni Yıl Hediyen Butonu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 }}
                  className="mt-12 flex justify-center"
                >
                  <motion.button
                    onClick={handleGiftClick}
                    disabled={flowerOpen}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-full font-bold text-lg md:text-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-xl hover:shadow-2xl transition-all ${
                      flowerOpen ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {flowerOpen ? '🌺' : 'Yeni Yıl Hediyen'}
                  </motion.button>
                </motion.div>

                {/* Çiçek Animasyonu */}
                <AnimatePresence>
                  {flowerOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
                    >
                      <div className="relative w-96 h-96">
                        {/* Çiçek Yaprakları - Daha gerçekçi */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (360 / 8) * i
                          const radius = 120
                          const radian = (angle * Math.PI) / 180
                          
                          return (
                            <motion.div
                              key={i}
                              className="absolute"
                              style={{
                                left: '50%',
                                top: '50%',
                                transformOrigin: 'center center',
                                width: '60px',
                                height: '100px',
                              }}
                              initial={{
                                x: 0,
                                y: 0,
                                scale: 0,
                                rotate: angle,
                              }}
                              animate={{
                                x: Math.cos(radian) * radius - 30,
                                y: Math.sin(radian) * radius - 50,
                                scale: 1,
                                rotate: angle,
                              }}
                              exit={{
                                x: Math.cos(radian) * radius - 30,
                                y: Math.sin(radian) * radius - 50,
                                scale: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.8,
                                delay: i * 0.06,
                                type: "spring",
                                stiffness: 150,
                                damping: 15,
                              }}
                            >
                              {/* Yaprak şekli - çiçek yaprağı gibi */}
                              <div 
                                className="w-full h-full bg-gradient-to-b from-pink-300 via-rose-400 to-pink-600 rounded-full shadow-xl"
                                style={{
                                  clipPath: 'ellipse(50% 70% at 50% 50%)',
                                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                                }}
                              />
                            </motion.div>
                          )
                        })}
                        
                        {/* İkinci katman yapraklar - daha küçük */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (360 / 8) * i + 22.5
                          const radius = 80
                          const radian = (angle * Math.PI) / 180
                          
                          return (
                            <motion.div
                              key={`inner-${i}`}
                              className="absolute"
                              style={{
                                left: '50%',
                                top: '50%',
                                transformOrigin: 'center center',
                                width: '45px',
                                height: '75px',
                              }}
                              initial={{
                                x: 0,
                                y: 0,
                                scale: 0,
                                rotate: angle,
                              }}
                              animate={{
                                x: Math.cos(radian) * radius - 22.5,
                                y: Math.sin(radian) * radius - 37.5,
                                scale: 1,
                                rotate: angle,
                              }}
                              exit={{
                                scale: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.7,
                                delay: 0.5 + i * 0.05,
                                type: "spring",
                                stiffness: 150,
                              }}
                            >
                              <div 
                                className="w-full h-full bg-gradient-to-b from-pink-200 via-pink-300 to-rose-400 rounded-full shadow-md"
                                style={{
                                  clipPath: 'ellipse(50% 70% at 50% 50%)',
                                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                                }}
                              />
                            </motion.div>
                          )
                        })}
                        
                        {/* Çiçek Orta Kısmı */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-400 rounded-full shadow-2xl flex items-center justify-center border-4 border-yellow-100"
                        >
                          <motion.span 
                            className="text-5xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            🌺
                          </motion.span>
                        </motion.div>

                        {/* Parlama Efekti */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: [0, 1.5, 2],
                            opacity: [0, 0.4, 0]
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ 
                            duration: 1.5,
                          }}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-200 rounded-full blur-3xl"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
