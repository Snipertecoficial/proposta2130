
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Layers, TrendingUp, Sparkles, ShoppingBag, AlertCircle } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

export const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Reset error state when index changes
  useEffect(() => {
    setImgError(false);
  }, [currentIndex]);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000); // 5 seconds per slide for better reading time

    return () => clearInterval(timer);
  }, [currentIndex]);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? MOCK_PRODUCTS.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === MOCK_PRODUCTS.length - 1 ? 0 : curr + 1));
  };

  const currentItem = MOCK_PRODUCTS[currentIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-stretch bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative min-h-[500px]">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-aion-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* VISUAL SECTION (Left) */}
        <div className="w-full md:w-1/2 relative bg-black group overflow-hidden">
            {/* Fallback or Image */}
            {!imgError ? (
                <img 
                    src={currentItem.image} 
                    alt={currentItem.name}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-80"
                    onError={() => setImgError(true)}
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-black">
                    <div className="text-center p-8">
                        <Layers size={64} className="text-aion-gold/20 mx-auto mb-4" />
                        <span className="text-aion-gold/40 text-sm tracking-widest uppercase">Visual Indisponível</span>
                    </div>
                </div>
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"></div>

            {/* Floating Badge */}
            <div className="absolute top-6 left-6">
               <span className="px-4 py-1.5 bg-black/60 border border-aion-gold/30 text-aion-gold text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md">
                    {currentItem.collection}
                </span>
            </div>

            {/* Progress Bar (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-800 z-20">
                <div key={currentIndex} className="h-full bg-aion-gold animate-[width_5s_linear_forwards]" style={{width: '0%'}}></div>
            </div>
        </div>

        {/* CONTENT SECTION (Right) */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10 border-l border-white/5">
            <div className="animate-fade-in-up key={currentIndex}">
              
              <div className="flex items-center gap-2 mb-2 text-aion-gold/80">
                  <Sparkles size={16} />
                  <span className="text-xs uppercase tracking-widest font-semibold">{currentItem.subtitle}</span>
              </div>

              <h3 className="text-4xl font-serif text-white mb-6 leading-tight">
                  {currentItem.name}
              </h3>

              <div className="w-12 h-0.5 bg-aion-gold/50 mb-6"></div>

              <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                  {currentItem.description}
              </p>

              {/* Stats / Details */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5">
                      <div className="p-2 bg-aion-gold/10 rounded-full text-aion-gold">
                          <ShoppingBag size={20} />
                      </div>
                      <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Estratégia de Preço</p>
                          <p className="text-white font-medium">{currentItem.priceRange}</p>
                      </div>
                  </div>
              </div>
              
              <button className="group w-full py-4 bg-transparent border border-aion-gold/30 text-aion-gold hover:bg-aion-gold hover:text-black transition-all rounded-sm uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2">
                  <span>Ver Mix de Produtos</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
        </div>
      </div>

      {/* External Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button onClick={prev} className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors">
            <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
            {MOCK_PRODUCTS.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-aion-gold' : 'bg-gray-700 hover:bg-gray-500'}`}
                />
            ))}
        </div>
        <button onClick={next} className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors">
            <ChevronRight size={20} />
        </button>
      </div>

    </div>
  );
};
