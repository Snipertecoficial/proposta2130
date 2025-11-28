
import React from 'react';
import { ArrowRight, BarChart3, Check, ChevronDown, Diamond, Layers, Lock, MessageCircle, Package, Palette, Send, Tag, TrendingUp } from 'lucide-react';
import { CONTACT_INFO, DELIVERABLES, FINANCIALS, STOCK_STRUCTURE, TIMELINE, INVESTMENT_DETAILS, TOTAL_INVESTMENT } from './constants';
import { PhoneSimulator } from './components/PhoneSimulator';
import { ProductCarousel } from './components/ProductCarousel';

function App() {
  const openWhatsapp = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-aion-gold selection:text-black pb-20 bg-aion-dark text-slate-200">
      
      {/* HEADER / HERO */}
      <header className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-aion-dark to-black z-0"></div>
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-aion-gold/30 to-transparent z-10"></div>
        
        <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-20 max-w-7xl">
            <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aion-blue to-aion-gold font-serif text-3xl tracking-wide">AION3</span>
            </div>
            <button onClick={openWhatsapp} className="hidden md:flex items-center gap-2 px-6 py-2 border border-aion-gold/30 rounded-full text-aion-gold hover:bg-aion-gold/10 transition-all font-medium text-sm tracking-wide">
                <MessageCircle size={16} />
                <span>Fale com Consultor</span>
            </button>
        </nav>

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-10 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-aion-gold/10 backdrop-blur-md border border-aion-gold/20 rounded-full text-aion-gold text-xs font-bold tracking-[0.2em] mb-4 uppercase">
                Metodologia Completa 360º
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif font-medium text-white leading-[1.1]">
                Construímos, Lançamos <br />
                e <span className="text-aion-gold italic">Escalamos</span> sua Marca
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                Em 90 dias, transformamos sua visão em uma marca de lingerie consolidada, 
                com e-commerce profissional, estratégia de vendas e projeção de faturamento de 
                <span className="text-white font-medium"> R$ 80.000 a R$ 120.000</span>.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
                <button onClick={openWhatsapp} className="min-w-[200px] px-8 py-4 bg-gradient-to-b from-aion-gold to-[#a1824a] hover:to-[#8c703d] text-aion-dark font-bold text-sm tracking-widest rounded-sm shadow-[0_0_30px_rgba(197,165,114,0.2)] transition-all transform hover:-translate-y-1 uppercase">
                    Iniciar Agora
                </button>
                <button onClick={() => document.getElementById('methodology')?.scrollIntoView({behavior: 'smooth'})} className="min-w-[200px] px-8 py-4 border border-white/10 hover:border-aion-gold/50 text-white font-bold text-sm tracking-widest rounded-sm transition-all uppercase hover:bg-white/5">
                    Ver Metodologia
                </button>
            </div>
        </div>

        <div className="absolute bottom-10 animate-pulse-slow text-aion-gold/50">
            <ChevronDown size={32} />
        </div>
      </header>

      {/* SECTION 2: METHODOLOGY (PDF Page 1) */}
      <section id="methodology" className="py-24 px-6 bg-aion-dark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <span className="text-aion-gold text-xs font-bold tracking-[0.2em] uppercase block mb-4">Entregáveis 360º</span>
                <h2 className="text-3xl md:text-5xl font-serif text-white">Metodologia Exclusiva</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DELIVERABLES.map((item, idx) => (
                    <div key={idx} className="group p-8 bg-aion-surface/40 backdrop-blur-sm border border-white/5 rounded-sm hover:bg-aion-surface hover:border-aion-gold/30 transition-all duration-300">
                        <div className="w-12 h-12 flex items-center justify-center mb-6 text-aion-gold group-hover:scale-110 transition-transform">
                            <item.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 3: TIMELINE (PDF Page 1 & 2) */}
      <section className="py-28 px-6 bg-gradient-to-b from-aion-dark to-[#050a14]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Fases do Projeto</h2>
                 <p className="text-gray-400">Jornada de 90 dias para a consolidação da sua marca</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TIMELINE.map((month, idx) => (
                    <div key={idx} className="relative flex flex-col h-full">
                        {/* Phase Number Background */}
                        <div className="absolute top-4 right-4 text-8xl font-serif text-white/5 pointer-events-none select-none">
                            0{idx + 1}
                        </div>
                        
                        <div className="flex-1 p-10 bg-aion-surface border border-white/5 rounded-sm hover:border-aion-gold/30 transition-all group flex flex-col justify-between h-full relative overflow-hidden">
                            <div>
                                <div className="text-aion-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Mês {idx + 1}</div>
                                <h3 className="text-3xl font-serif text-white mb-8">{month.title}</h3>
                                
                                <ul className="space-y-5 mb-10">
                                    {month.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-400 text-sm">
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-aion-gold shrink-0"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Investimento Estimado</p>
                                <p className="text-3xl font-serif text-aion-gold">{month.investment}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT SHOWCASE */}
      <section className="py-24 px-6 bg-aion-dark border-y border-white/5">
          <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Arquitetura da <span className="text-aion-gold italic">Coleção</span></h2>
                  <p className="text-gray-400 max-w-2xl">4 linhas estratégicas desenhadas para maximizar ticket médio e recorrência.</p>
              </div>
              <ProductCarousel />
          </div>
      </section>

      {/* SECTION 5: STOCK STRUCTURE */}
      <section className="py-24 px-6 bg-[#080c14] relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Estrutura do <span className="text-aion-gold">Estoque</span></h2>
                      <p className="text-gray-400 mb-8 leading-relaxed">
                          Uma engenharia de estoque pensada para maximizar variedade com baixo risco. 
                          Iniciamos com 720 peças distribuídas estrategicamente para validação rápida de best-sellers.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                          <div className="p-6 bg-aion-surface border border-white/5 rounded-sm">
                              <div className="text-3xl font-bold text-white mb-1">{STOCK_STRUCTURE.models}</div>
                              <div className="text-xs text-aion-gold uppercase tracking-widest">Modelos</div>
                          </div>
                          <div className="p-6 bg-aion-surface border border-white/5 rounded-sm">
                              <div className="text-3xl font-bold text-white mb-1">{STOCK_STRUCTURE.colors}</div>
                              <div className="text-xs text-aion-gold uppercase tracking-widest">Cores</div>
                          </div>
                          <div className="p-6 bg-aion-surface border border-white/5 rounded-sm">
                              <div className="text-3xl font-bold text-white mb-1">{STOCK_STRUCTURE.sizes}</div>
                              <div className="text-xs text-aion-gold uppercase tracking-widest">Tamanhos (M/G/GG)</div>
                          </div>
                          <div className="p-6 bg-aion-surface border border-white/5 rounded-sm">
                              <div className="text-3xl font-bold text-white mb-1">{STOCK_STRUCTURE.totalPieces}</div>
                              <div className="text-xs text-aion-gold uppercase tracking-widest">Total Peças</div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-aion-surface to-black p-10 border border-white/10 rounded-sm relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-aion-gold/5 rounded-full blur-3xl"></div>
                      <h3 className="text-xl font-serif text-white mb-8 border-b border-white/10 pb-4">Investimento em Mercadoria</h3>
                      <div className="flex items-end gap-2 mb-2">
                          <span className="text-5xl font-serif text-aion-gold">{STOCK_STRUCTURE.investment}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-8">Valor estimado para produção inicial</p>
                      
                      <button onClick={openWhatsapp} className="w-full py-4 border border-aion-gold/30 text-aion-gold hover:bg-aion-gold hover:text-aion-dark transition-all font-bold uppercase tracking-widest text-sm rounded-sm">
                          Receber Grade Completa
                      </button>
                  </div>
              </div>
          </div>
      </section>

      {/* SECTION 6: FINANCIALS & SIMULATION */}
      <section className="py-24 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Visualize suas vendas <span className="text-aion-gold">acontecendo</span></h2>
                 <p className="text-gray-400">Metodologia validada para ROI consistente.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <PhoneSimulator />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-[#0F172A] border border-white/5 rounded-sm hover:border-aion-gold/20 transition-colors">
                        <div className="text-aion-gold mb-2 text-sm font-bold uppercase tracking-wider">Faturamento Potencial</div>
                        <div className="text-4xl font-serif text-white mb-2">{FINANCIALS.revenuePotencial}</div>
                        <div className="text-xs text-gray-500">Estimativa com 100% venda</div>
                    </div>
                    <div className="p-8 bg-[#0F172A] border border-white/5 rounded-sm hover:border-aion-gold/20 transition-colors">
                        <div className="text-aion-gold mb-2 text-sm font-bold uppercase tracking-wider">Lucro Estimado</div>
                        <div className="text-4xl font-serif text-white mb-2">{FINANCIALS.profit}</div>
                        <div className="text-xs text-gray-500">Margem líquida projetada</div>
                    </div>
                    <div className="p-8 bg-[#0F172A] border border-white/5 rounded-sm hover:border-aion-gold/20 transition-colors">
                        <div className="text-aion-gold mb-2 text-sm font-bold uppercase tracking-wider">Markup</div>
                        <div className="text-4xl font-serif text-white mb-2">{FINANCIALS.markup}</div>
                        <div className="text-xs text-gray-500">Estratégia de precificação</div>
                    </div>
                    <div className="p-8 bg-[#0F172A] border border-white/5 rounded-sm hover:border-aion-gold/20 transition-colors">
                        <div className="text-aion-gold mb-2 text-sm font-bold uppercase tracking-wider">Suporte</div>
                        <div className="text-4xl font-serif text-white mb-2">100%</div>
                        <div className="text-xs text-gray-500">Acompanhamento dedicado</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* NEW SECTION 7: DETAILED INVESTMENT (TRANSPARENCY) */}
      <section className="py-24 px-6 bg-[#0B1120] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-aion-gold text-xs font-bold tracking-[0.2em] uppercase block mb-4">Transparência Total</span>
                <h2 className="text-4xl font-serif text-white mb-4">Investimento Detalhado</h2>
            </div>

            <div className="bg-[#020617] border border-white/10 rounded-lg p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aion-gold to-transparent"></div>
                
                <h3 className="text-2xl font-serif text-white mb-8">Composição do Investimento</h3>
                
                <div className="space-y-6">
                    {INVESTMENT_DETAILS.map((item, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-white/5 group hover:bg-white/[0.02] px-4 -mx-4 transition-colors">
                            <span className="text-gray-300 font-medium">{item.item}</span>
                            <span className="text-aion-gold font-bold text-lg mt-2 md:mt-0">{item.value}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center bg-aion-gold/5 p-6 rounded-lg border border-aion-gold/10">
                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2 md:mb-0">Investimento Total Estimado</span>
                    <span className="text-4xl font-serif text-aion-gold">{TOTAL_INVESTMENT}</span>
                </div>
                
                <p className="text-center text-gray-600 text-xs mt-6 max-w-2xl mx-auto">
                    *Valores de tráfego e produção podem variar de acordo com a estratégia escolhida. O valor de mercadoria retorna como faturamento.
                </p>
            </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-32 px-6 relative bg-black text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-aion-surface via-black to-black opacity-50"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">
                A AION3 constrói, <br /> lança e <span className="text-aion-gold italic">escala.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                Você apenas acompanha e aprova as etapas. Vamos iniciar a construção da sua marca hoje?
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button 
                    onClick={openWhatsapp}
                    className="min-w-[280px] px-10 py-5 bg-gradient-to-b from-aion-gold to-[#a1824a] hover:to-[#8c703d] text-aion-dark font-bold text-lg rounded-sm shadow-[0_0_40px_rgba(197,165,114,0.2)] transition-all transform hover:-translate-y-1 uppercase tracking-widest"
                >
                    Iniciar Construção
                </button>
            </div>
            
            <div className="mt-16 flex items-center justify-center gap-2 text-gray-600 text-xs tracking-widest uppercase">
                <Lock size={12} />
                <span>Proposta Confidencial &copy; 2024 AION3</span>
            </div>
        </div>
      </section>

      {/* STICKY WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={openWhatsapp}
            className="bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:scale-110 transition-all flex items-center justify-center text-white"
            aria-label="Fale conosco no WhatsApp"
          >
              <MessageCircle size={32} fill="white" className="text-white" />
          </button>
      </div>

    </div>
  );
}

export default App;
