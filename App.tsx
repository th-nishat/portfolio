
import React, { useState, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Award,
  BookOpen,
  Box,
  Layers,
  Menu,
  X,
  Settings,
  Database,
  Zap,
  Lock,
  Phone,
  MapPin,
  UserCheck,
  Download,
  MessageCircle,
  Home,
  Briefcase,
  Globe,
  Sun,
  Moon,
  Heart,
  GraduationCap,
  Send,
  CheckCircle2,
  Building2,
  Image as ImageIcon,
  Maximize2
} from 'lucide-react';
import { resumeData } from './data/resumeData';
import { SectionHeading } from './components/SectionHeading';
import { AIChat } from './components/AIChat';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Contact Form States
  const [contactName, setContactName] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [isMsgSent, setIsMsgSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf'; 
    link.download = 'Md_Touhidi_Nishat_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={14} /> },
    { id: 'about', label: 'Who Am I', icon: <UserCheck size={14} /> },
    { id: 'skills', label: 'Skills', icon: <Layers size={14} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={14} /> },
    { id: 'projects', label: 'Projects', icon: <Box size={14} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={14} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={14} /> },
    { id: 'gallery', label: 'Gallery', icon: <ImageIcon size={14} /> },
    { id: 'contact', label: 'Contact', icon: <Phone size={14} /> }
  ];

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  const whatsappUrl = `https://wa.me/${resumeData.contact.phone.replace(/[^0-9]/g, '')}`;

  const handleSendMessage = (type: 'whatsapp' | 'email') => {
    const encodedMsg = encodeURIComponent(`Hi Nishat, I'm ${contactName}. ${contactMsg}`);
    if (type === 'whatsapp') {
      window.open(`https://wa.me/${resumeData.contact.phone.replace(/[^0-9]/g, '')}?text=${encodedMsg}`, '_blank');
    } else {
      window.open(`mailto:${resumeData.contact.email}?subject=Message from ${encodeURIComponent(contactName)}&body=${encodeURIComponent(contactMsg)}`, '_blank');
    }
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-all duration-700 ${theme === 'light' ? 'bg-[#f8fafc] text-slate-900' : 'bg-slate-950 text-slate-100'}`}>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"></div>
          <button 
            className="absolute top-8 right-8 text-white hover:text-blue-500 transition-colors z-[210]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery Preview" 
            className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl border-2 border-slate-800 animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute inset-0 backdrop-blur-2xl ${theme === 'light' ? 'bg-white/95' : 'bg-slate-950/95'}`}></div>
        <div className="relative h-full flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">TN</div>
              <span className="font-bold tracking-tighter uppercase">Nishat_OS</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-blue-600 hover:bg-blue-600/10 rounded-full transition-all">
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-6 overflow-y-auto pb-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => smoothScroll(e, item.id)}
                className={`text-2xl font-black uppercase tracking-tighter flex items-center gap-4 transition-all hover:translate-x-4 ${theme === 'light' ? 'text-slate-400 hover:text-blue-600' : 'text-slate-600 hover:text-white'}`}
              >
                <span className="text-blue-600">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-slate-500/10">
             <button onClick={handleDownloadResume} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl mb-4 text-sm">DOWNLOAD_CV</button>
             <button onClick={toggleTheme} className={`w-full py-4 font-bold rounded-2xl border flex items-center justify-center gap-3 text-sm ${theme === 'light' ? 'bg-white border-slate-200 text-slate-700' : 'bg-slate-900 border-slate-800 text-white'}`}>
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />} {theme === 'dark' ? 'LIGHT_MODE' : 'DARK_MODE'}
             </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (theme === 'dark' ? 'bg-slate-950/90 shadow-2xl' : 'bg-white/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] border-b border-slate-100') + ' backdrop-blur-xl py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-600/20 rotate-45 group-hover:rotate-0 transition-all duration-500">
              <span className="-rotate-45 group-hover:rotate-0 transition-all text-white">TN</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tighter leading-none uppercase ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Nishat_OS</span>
              <span className="text-[10px] text-blue-500 font-mono tracking-widest uppercase">DevOps Engineer</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className={`flex items-center gap-1 p-1 rounded-full border backdrop-blur-sm transition-all ${theme === 'light' ? 'bg-slate-100/50 border-slate-200' : 'bg-slate-500/5 border-slate-500/10'}`}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => smoothScroll(e, item.id)}
                  className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider transition-all flex items-center gap-2 ${theme === 'light' ? 'text-slate-500 hover:bg-white hover:text-blue-600 shadow-sm' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                >
                  {item.icon} {item.label}
                </a>
              ))}
            </div>
            
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all border ${theme === 'light' ? 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm border-slate-200' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700'}`}
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all border ${theme === 'light' ? 'bg-white text-slate-700 shadow-md border-slate-200' : 'bg-slate-800 text-slate-300 border-slate-700'}`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-blue-600 p-2 hover:bg-blue-600/10 rounded-lg transition-all" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-48 pb-32 flex items-center min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-md border text-blue-600 font-mono text-xs mb-10 transition-all ${theme === 'light' ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/50 border-slate-800'}`}>
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full relative"></div>
                </div>
                <span>SYSTEM STATUS: ONLINE / CLOUD_READY</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8 tracking-tighter uppercase transition-all">
                {resumeData.name} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 tracking-tight">DevOps Engineer</span>
              </h1>

              <div className={`p-8 md:p-10 border-l-4 border-blue-600 rounded-r-3xl transition-all mb-10 ${theme === 'light' ? 'bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] border-slate-100' : 'bg-slate-900/40 border-slate-800'}`}>
                <p className={`leading-relaxed max-w-2xl text-lg lg:text-xl font-light ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                  {resumeData.summary}
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button onClick={handleDownloadResume} className="px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center gap-3 shadow-2xl shadow-blue-600/30 uppercase text-sm transform hover:-translate-y-1">
                  <Download size={20} /> DOWNLOAD_CV
                </button>
                <a href={whatsappUrl} target="_blank" className={`px-8 py-5 font-bold rounded-xl border transition-all flex items-center gap-3 text-sm transform hover:-translate-y-1 ${theme === 'light' ? 'bg-white border-slate-200 text-emerald-600 hover:bg-slate-50 shadow-sm' : 'bg-emerald-600/20 border-emerald-500/50 text-emerald-400'}`}>
                  <MessageCircle size={20} /> WHATSAPP
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 relative">
              <div className={`relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[3rem] overflow-hidden border-2 transition-all group ${theme === 'light' ? 'border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]' : 'border-slate-800 shadow-2xl'}`}>
                <img 
                  src="/assets/profile.jpg" 
                  alt={resumeData.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linux Terminal Who Am I Section */}
      <section id="about" className={`py-32 relative transition-all ${theme === 'light' ? 'bg-white shadow-[inset_0_2px_40px_rgba(0,0,0,0.01)]' : 'bg-slate-900/10'}`}>
        <div className="container mx-auto px-6">
          <SectionHeading title="Who Am I" subtitle="System User Identification" icon={<TerminalIcon size={20} />} />
          
          <div className="max-w-4xl mx-auto">
            <div className={`w-full rounded-[1.5rem] overflow-hidden shadow-2xl font-mono text-sm border transition-all ${theme === 'light' ? 'border-slate-200 shadow-slate-200/50' : 'bg-[#0b1121] border-slate-800 shadow-black'}`}>
              <div className={`px-6 py-4 flex items-center justify-between ${theme === 'light' ? 'bg-slate-100 border-b border-slate-200' : 'bg-slate-900/40 border-b border-slate-800'}`}>
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className={`text-[11px] font-bold flex items-center gap-2 ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>
                  <TerminalIcon size={12} /> BASH -- NISHAT_ROOT
                </div>
              </div>

              <div className={`p-10 space-y-6 min-h-[300px] leading-relaxed ${theme === 'light' ? 'bg-white' : 'bg-[#020617]'}`}>
                <div className="flex items-center gap-3">
                  <span className="text-[#10b981] font-bold">nishat@os:~$</span>
                  <span className={`${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>whoami</span>
                </div>
                
                <div className="space-y-2.5 pl-4">
                  <div className={`flex items-start gap-3 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                    <span className="text-slate-500">&gt;</span>
                    <span>{resumeData.name}</span>
                  </div>
                  <div className={`flex items-start gap-3 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                    <span className="text-slate-500">&gt;</span>
                    <span>Role: DevOps Engineer</span>
                  </div>
                  <div className={`flex items-start gap-3 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                    <span className="text-slate-500">&gt;</span>
                    <span>Status: Online / Scaling...</span>
                  </div>
                </div>

                <div className="pt-4">
                   <div className="flex items-center gap-3">
                    <span className="text-[#10b981] font-bold">nishat@os:~$</span>
                    <span className="w-2.5 h-5 bg-blue-500 animate-pulse inline-block"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="container mx-auto px-6">
          <SectionHeading title="Technology Stack" subtitle="Infrastructure Matrix" icon={<Layers size={20} />} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {resumeData.skills.map((cat, idx) => (
              <div key={idx} className={`p-10 rounded-3xl border transition-all ${theme === 'light' ? 'bg-white border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]' : 'bg-slate-950 border-slate-800'}`}>
                <h3 className={`font-black text-2xl mb-12 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{cat.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {cat.skills.map((skill, sidx) => (
                    <div key={sidx} className="space-y-3">
                       <div className="flex justify-between text-[10px] font-mono font-bold">
                         <span className={`${theme === 'light' ? 'text-slate-400' : 'text-slate-400'}`}>{skill.name}</span>
                         <span className="text-blue-500">{skill.proficiency}%</span>
                       </div>
                       <div className={`w-full h-1.5 rounded-full overflow-hidden ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-900'}`}>
                         <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${skill.proficiency}%` }}></div>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-32 transition-all ${theme === 'light' ? 'bg-slate-50/50 border-y border-slate-100' : ''}`}>
        <div className="container mx-auto px-6">
          <SectionHeading title="Experience" subtitle="Career Trace Logs" icon={<Briefcase size={20} />} />
          <div className="max-w-5xl mx-auto space-y-12">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className={`group p-10 rounded-3xl border transition-all duration-300 transform hover:scale-[1.01] ${theme === 'light' ? 'bg-white border-slate-100 shadow-sm hover:shadow-xl' : 'bg-slate-900/50 border-slate-800 hover:border-blue-500/30'}`}>
                <div className="flex flex-col md:flex-row justify-between mb-8 items-start gap-8">
                  <div className="flex gap-8 items-center">
                    <div className={`w-24 h-24 flex-shrink-0 rounded-3xl border-2 flex items-center justify-center p-3 overflow-hidden transition-all bg-white group-hover:scale-105 ${theme === 'light' ? 'border-slate-100 shadow-lg' : 'border-slate-800 shadow-2xl shadow-blue-600/5'}`}>
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={exp.company} 
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('bg-blue-600/10');
                            const fallback = document.createElement('div');
                            fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M16 18h.01"/></svg>';
                            e.currentTarget.parentElement?.appendChild(fallback.firstChild as Node);
                          }}
                        />
                      ) : (
                        <Building2 className="text-blue-600" size={40} />
                      )}
                    </div>
                    
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-black transition-colors group-hover:text-blue-600 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{exp.role}</h3>
                      <p className="text-blue-600 font-mono text-sm font-bold mt-2 uppercase tracking-tight">{exp.company}</p>
                    </div>
                  </div>
                  
                  <span className={`px-5 py-2 rounded-full text-[11px] font-mono font-black mt-4 md:mt-0 h-fit ${theme === 'light' ? 'bg-slate-100 text-slate-500 border border-slate-200' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                    {exp.period}
                  </span>
                </div>
                
                <div className="pt-8 border-t border-slate-500/10">
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex gap-5 text-sm md:text-base leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                        <span className="text-blue-600 font-black flex-shrink-0 text-xl">»</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-6">
          <SectionHeading title="Projects" subtitle="Production Grade Assets" icon={<Box size={20} />} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className={`group p-8 rounded-[2rem] border-2 transition-all duration-300 transform hover:scale-[1.02] flex flex-col ${theme === 'light' ? 'bg-white border-slate-50 shadow-md hover:shadow-2xl' : 'bg-slate-950 border-slate-900 hover:border-blue-500/30 shadow-2xl'}`}>
                <div className="flex-1">
                  <div className="flex items-center gap-5 mb-6">
                    <div className={`w-16 h-16 flex-shrink-0 rounded-2xl border flex items-center justify-center p-2.5 overflow-hidden bg-white group-hover:rotate-3 transition-transform ${theme === 'light' ? 'border-slate-100 shadow-md' : 'border-slate-800 shadow-xl'}`}>
                      {proj.logo ? (
                        <img 
                          src={proj.logo} 
                          alt={proj.organization} 
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('bg-blue-600/10');
                            const fallback = document.createElement('div');
                            fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>';
                            e.currentTarget.parentElement?.appendChild(fallback.firstChild as Node);
                          }}
                        />
                      ) : (
                        <Box className="text-blue-600" size={32} />
                      )}
                    </div>
                    <div>
                      <h3 className={`font-black text-xl leading-tight transition-colors group-hover:text-blue-600 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{proj.title}</h3>
                      <p className="text-[11px] text-blue-500 font-mono mt-1 uppercase tracking-wider font-black">{proj.organization}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-10">
                    {proj.description.map((desc, i) => (
                      <p key={i} className={`text-sm leading-relaxed ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>
                        <span className="text-blue-500 font-bold mr-2">/</span> {desc}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-500/10">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 rounded-lg text-[10px] font-mono border font-bold ${theme === 'light' ? 'bg-slate-50 border-slate-100 text-slate-500' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className={`py-32 transition-all ${theme === 'light' ? 'bg-slate-50/20 border-y border-slate-100' : ''}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="Education" subtitle="Academic Trace" icon={<BookOpen size={20} />} />
              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className={`p-8 rounded-3xl border transition-all duration-300 transform hover:scale-[1.02] relative group overflow-hidden ${theme === 'light' ? 'bg-white border-slate-100 shadow-sm hover:shadow-lg' : 'bg-slate-900/50 border-slate-800 hover:border-blue-500/30'}`}>
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <GraduationCap size={80} />
                    </div>
                    <p className="text-blue-500 font-mono text-xs font-black mb-2">{edu.year}</p>
                    <h4 className={`text-xl font-black mb-2 leading-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{edu.degree}</h4>
                    {edu.result && <p className="text-blue-500 font-mono text-[10px] font-bold mb-2 uppercase tracking-tight">RESULT: {edu.result}</p>}
                    <p className={`text-xs font-bold uppercase tracking-wide flex items-center gap-2 ${theme === 'light' ? 'text-slate-400' : 'text-slate-500'}`}>
                      <MapPin size={12} /> {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div id="certifications">
              <SectionHeading title="Certifications" subtitle="Credentials" icon={<Award size={20} />} />
              <div className="space-y-6">
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} className={`p-6 rounded-[2rem] border flex items-center gap-6 transition-all duration-300 transform hover:scale-[1.02] group ${theme === 'light' ? 'bg-white border-slate-100 shadow-sm hover:shadow-lg' : 'bg-slate-950/50 border-slate-800 hover:border-blue-500/30'}`}>
                    <div className={`w-20 h-20 flex-shrink-0 rounded-2xl border-2 flex items-center justify-center p-2 overflow-hidden transition-all bg-white group-hover:scale-110 ${theme === 'light' ? 'border-slate-100 shadow-md' : 'border-slate-800 shadow-2xl shadow-blue-600/5'}`}>
                      {cert.logo ? (
                        <img 
                          src={cert.logo} 
                          alt={cert.title} 
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('bg-blue-600/10');
                            const fallback = document.createElement('div');
                            fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>';
                            e.currentTarget.parentElement?.appendChild(fallback.firstChild as Node);
                          }}
                        />
                      ) : (
                        <ShieldCheck className="text-blue-600" size={32} />
                      )}
                    </div>
                    <p className={`text-sm font-mono font-bold leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                      {cert.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={`py-32 transition-all ${theme === 'light' ? 'bg-slate-50/30 border-y border-slate-100' : 'bg-slate-900/10'}`}>
        <div className="container mx-auto px-6">
          <SectionHeading title="Gallery" subtitle="System Credentials & Archives" icon={<ImageIcon size={20} />} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resumeData.gallery.map((item, idx) => (
              <div 
                key={idx} 
                className={`group relative rounded-[2rem] overflow-hidden cursor-pointer border-2 transition-all duration-500 transform hover:scale-[1.02] ${theme === 'light' ? 'border-white bg-white shadow-lg' : 'border-slate-800 bg-slate-900 shadow-2xl'}`}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1589330694653-976414929497?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-blue-400 font-mono text-[9px] font-black uppercase tracking-widest mb-1">{item.category}</span>
                  <h4 className="text-white font-black text-lg leading-tight uppercase tracking-tighter">{item.title}</h4>
                  <div className="mt-4 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white self-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Box / Contact Terminal Section */}
      <section id="contact-terminal" className="py-32">
        <div className="container mx-auto px-6 max-w-4xl">
           <SectionHeading title="Message Terminal" subtitle="Secure Transmission" icon={<Mail size={20} />} />
           
           <div className={`rounded-3xl border overflow-hidden transition-all ${theme === 'light' ? 'bg-white border-slate-200 shadow-xl' : 'bg-slate-900 border-slate-800 shadow-2xl'}`}>
             {!isMsgSent ? (
               <div className="p-8 md:p-12">
                 <div className="grid grid-cols-1 gap-8">
                   <div className="space-y-3">
                     <label className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">TRANSMISSION_SOURCE (NAME)</label>
                     <input 
                       type="text" 
                       value={contactName}
                       onChange={(e) => setContactName(e.target.value)}
                       placeholder="Enter your identification..."
                       className={`w-full p-4 rounded-xl font-mono text-sm border focus:outline-none focus:border-blue-500 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}
                     />
                   </div>
                   <div className="space-y-3">
                     <label className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">DATA_PAYLOAD (MESSAGE)</label>
                     <textarea 
                       rows={5}
                       value={contactMsg}
                       onChange={(e) => setContactMsg(e.target.value)}
                       placeholder="Enter your detailed message here..."
                       className={`w-full p-4 rounded-xl font-mono text-sm border focus:outline-none focus:border-blue-500 transition-all ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}
                     />
                   </div>
                   <button 
                     onClick={() => { if(contactName && contactMsg) setIsMsgSent(true) }}
                     disabled={!contactName || !contactMsg}
                     className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-600/30 hover:bg-blue-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all uppercase tracking-widest flex items-center justify-center gap-3"
                   >
                     <Send size={18} /> Initialize Transmission
                   </button>
                 </div>
               </div>
             ) : (
               <div className="p-12 text-center space-y-8 animate-in fade-in zoom-in duration-500">
                 <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                   <CheckCircle2 size={40} />
                 </div>
                 <div>
                   <h3 className="text-2xl font-black mb-2 uppercase">Payload Ready</h3>
                   <p className="text-slate-500 font-mono text-sm">Select your preferred transmission protocol to complete the connection.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                   <button 
                     onClick={() => handleSendMessage('whatsapp')}
                     className="px-8 py-5 bg-emerald-500 text-white font-black rounded-2xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase text-xs"
                   >
                     <MessageCircle size={18} /> Send via WhatsApp
                   </button>
                   <button 
                     onClick={() => handleSendMessage('email')}
                     className="px-8 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-lg shadow-blue-600/20 hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase text-xs"
                   >
                     <Mail size={18} /> Send via Email
                   </button>
                 </div>
                 
                 <button 
                   onClick={() => { setIsMsgSent(false); setContactMsg(''); }}
                   className="text-[10px] font-mono font-bold text-slate-500 hover:text-blue-500 uppercase tracking-widest transition-colors"
                 >
                   [ Reset Terminal ]
                 </button>
               </div>
             )}
           </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className={`py-32 text-center transition-all ${theme === 'light' ? 'bg-white border-t border-slate-100' : 'bg-slate-950'}`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className={`text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>LET'S_CONNECT</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className={`p-8 rounded-3xl border transition-all ${theme === 'light' ? 'bg-white border-slate-100 shadow-sm' : 'bg-slate-900/50 border-slate-800'}`}>
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">PHONE</h4>
              <p className="font-bold text-blue-600">{resumeData.contact.phone}</p>
            </div>
            
            <div className={`p-8 rounded-3xl border transition-all ${theme === 'light' ? 'bg-white border-slate-100 shadow-sm' : 'bg-slate-900/50 border-slate-800'}`}>
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">EMAIL</h4>
              <p className="font-bold text-blue-600 text-sm overflow-hidden text-ellipsis whitespace-nowrap">{resumeData.contact.email}</p>
            </div>
            
            <div className={`p-8 rounded-3xl border transition-all ${theme === 'light' ? 'bg-white border-slate-100 shadow-sm' : 'bg-slate-900/50 border-slate-800'}`}>
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">LOCATION</h4>
              <p className="font-bold text-blue-600">{resumeData.contact.address}</p>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-4 mb-20">
            <button onClick={handleDownloadResume} className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-2xl shadow-blue-600/30 hover:scale-105 transition-all text-sm uppercase">
              DOWNLOAD_CV
            </button>
            <a href={whatsappUrl} target="_blank" className="px-10 py-5 bg-emerald-500 text-white font-black rounded-2xl shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-all text-sm uppercase">
              WHATSAPP
            </a>
          </div>
          
          <div className={`pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-8 ${theme === 'light' ? 'border-slate-50' : 'border-slate-900'}`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-xs">TN</div>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">Architected_By_Nishat</span>
            </div>
            <p className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Md. Touhidi Nishat • All Systems Operational
            </p>
          </div>
        </div>
      </footer>

      {/* AIChat Integration */}
      <AIChat />

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        className="fixed bottom-8 right-8 z-50 p-5 bg-emerald-500 text-white rounded-2xl shadow-lg hover:scale-110 transition-all flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default App;
