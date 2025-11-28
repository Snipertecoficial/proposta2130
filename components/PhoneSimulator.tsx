import React, { useState, useEffect } from 'react';
import { Bell, CheckCircle, CreditCard, DollarSign } from 'lucide-react';

const NOTIFICATIONS = [
  { title: "Venda Aprovada", msg: "Você vendeu R$ 259,90 (Pix)", time: "Agora" },
  { title: "Novo Pedido #1023", msg: "Kit Luxo - Enviando para SP", time: "2 min" },
  { title: "Pagamento Confirmado", msg: "R$ 139,00 - Cartão de Crédito", time: "5 min" },
  { title: "Checkout Iniciado", msg: "3 clientes estão finalizando compra", time: "12 min" },
  { title: "Venda Aprovada", msg: "Você vendeu R$ 419,00 (3x)", time: "15 min" },
];

export const PhoneSimulator: React.FC = () => {
  const [activeNotifs, setActiveNotifs] = useState<typeof NOTIFICATIONS>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setActiveNotifs(prev => {
        const next = [NOTIFICATIONS[index], ...prev].slice(0, 4); // Keep last 4
        return next;
      });
      index = (index + 1) % NOTIFICATIONS.length;
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col items-center justify-start overflow-hidden ring-1 ring-white/20">
      {/* Notch */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      {/* Screen Content */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-950 relative">
        {/* Status Bar */}
        <div className="w-full flex justify-between items-center px-6 pt-3 text-white text-xs font-medium z-10 relative">
          <span>9:41</span>
          <div className="flex gap-1">
             <div className="w-4 h-2.5 bg-white rounded-sm"></div>
          </div>
        </div>

        {/* Dashboard Simulation */}
        <div className="px-4 py-8">
            <h3 className="text-gray-400 text-sm mb-1">Faturamento Total</h3>
            <div className="text-4xl font-bold text-white mb-6">R$ 100.080</div>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-800/50 p-3 rounded-xl border border-white/5">
                    <div className="text-aion-blue mb-1"><CheckCircle size={16}/></div>
                    <div className="text-xs text-gray-400">Pedidos</div>
                    <div className="font-bold text-white">720</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-xl border border-white/5">
                    <div className="text-aion-orange mb-1"><DollarSign size={16}/></div>
                    <div className="text-xs text-gray-400">Ticket Médio</div>
                    <div className="font-bold text-white">R$ 139</div>
                </div>
            </div>

            {/* Notification Stream */}
            <div className="flex flex-col gap-3 relative">
                {activeNotifs.map((notif, idx) => (
                    <div 
                        key={`${notif.title}-${idx}`} 
                        className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-3 animate-slide-up shadow-lg"
                    >
                        <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                            <CreditCard size={18} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h4 className="text-sm font-semibold text-white">{notif.title}</h4>
                                <span className="text-[10px] text-gray-400">{notif.time}</span>
                            </div>
                            <p className="text-xs text-gray-300">{notif.msg}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};