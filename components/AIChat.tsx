
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2, Terminal as TerminalIcon } from 'lucide-react';
import { askAI } from '../services/geminiService';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "SYSTEM: Kernel Support ready. Ask about Touhidi's architectural expertise, projects, or professional availability." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await askAI(userMessage);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-5 bg-blue-600 text-white rounded-2xl shadow-2xl hover:bg-blue-500 transition-all transform hover:scale-105 group ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity"></div>
        <TerminalIcon size={24} />
      </button>

      <div className={`fixed bottom-8 right-8 z-50 w-[90vw] md:w-[420px] h-[600px] border rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95 pointer-events-none'} bg-slate-950 border-slate-800`}>
        {/* Terminal Header */}
        <div className="px-5 py-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-widest">NISHAT_KERNEL_AI_v1.0</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Console Log Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 font-mono text-xs leading-relaxed">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex flex-col gap-2 max-w-[90%] ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`flex items-center gap-2 mb-1 text-[10px] font-bold uppercase tracking-widest ${m.role === 'user' ? 'text-blue-500' : 'text-cyan-400'}`}>
                   {m.role === 'user' ? 'LOCAL_USER' : 'REMOTE_SYS'}
                </div>
                <div className={`p-4 rounded-xl border ${m.role === 'user' ? 'bg-blue-600/10 border-blue-500/30 text-slate-200' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                  {m.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <Loader2 className="animate-spin text-cyan-400" size={14} />
                <span className="text-[10px] uppercase tracking-widest text-slate-500">Querying Matrix...</span>
              </div>
            </div>
          )}
        </div>

        {/* Command Input */}
        <div className="p-6 border-t border-slate-900 bg-slate-900/30">
          <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus-within:border-blue-500 transition-all">
            <span className="text-blue-500 font-mono text-sm">&gt;</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Execute command..."
              className="flex-1 bg-transparent border-none text-slate-200 text-sm font-mono focus:outline-none placeholder:text-slate-700"
            />
            <button
              onClick={handleSend}
              className="text-blue-500 hover:text-cyan-400 disabled:opacity-30 transition-colors"
              disabled={isLoading}
            >
              <Send size={18} />
            </button>
          </div>
          <div className="mt-4 flex justify-between items-center text-[8px] font-mono text-slate-600 uppercase tracking-widest">
            <span>Powered by Gemini Flash</span>
            <span>SECURE_SESSION_v3</span>
          </div>
        </div>
      </div>
    </>
  );
};
