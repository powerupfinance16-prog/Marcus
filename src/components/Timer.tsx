import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Volume2, Maximize2, Settings, BarChart2, Calendar, Target, Zap, Clock } from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'FOCUS' | 'SHORT BREAK' | 'LONG BREAK'>('FOCUS');
  const [selectedSubject, setSelectedSubject] = useState('Maths');

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) setIsActive(false);
    return () => { if (interval) clearInterval(interval); };
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((60 * 60 - timeLeft) / (60 * 60)) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-2">Focus & Analytics</h1>
          <div className="text-5xl font-mono font-bold text-blue-500 tracking-tighter">01:31 <span className="text-lg text-gray-500 font-sans font-medium">am</span></div>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1">SATURDAY, FEBRUARY 21</p>
          <div className="flex gap-2 justify-end">
            {['WEEKLY', 'MONTHLY', 'YEARLY'].map((t) => (
              <button key={t} className={`px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider transition-colors ${t === 'WEEKLY' ? 'bg-[#2A2A2A] text-white' : 'text-gray-600 hover:text-gray-400'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Timer Section */}
        <div className="lg:col-span-7 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8 relative z-10">
            {['FOCUS', 'SHORT BREAK', 'LONG BREAK'].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m as any)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all ${
                  mode === m ? 'bg-white text-black shadow-lg' : 'bg-[#151515] text-gray-500 hover:text-gray-300'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Timer Display */}
          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
            <div className="text-[8rem] font-mono font-bold text-white leading-none tracking-tighter tabular-nums">
              {formatTime(timeLeft)}
            </div>
            <div className="text-gray-500 font-medium mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              On {selectedSubject}
            </div>
          </div>

          {/* Subject Selector */}
          <div className="flex justify-center gap-3 mb-10 relative z-10">
            {['Maths', 'Physics', 'English', 'General Test'].map((subj) => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all border ${
                  selectedSubject === subj
                    ? 'bg-blue-500/10 border-blue-500 text-blue-400'
                    : 'bg-[#151515] border-transparent text-gray-500 hover:border-white/10'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 relative z-10">
            <button className="w-14 h-14 rounded-2xl bg-[#151515] text-gray-400 hover:text-white flex items-center justify-center transition-colors">
              <Volume2 size={24} />
            </button>
            <button
              onClick={() => setIsActive(!isActive)}
              className="w-20 h-20 rounded-3xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95"
            >
              {isActive ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>
            <button 
              onClick={() => setTimeLeft(60 * 60)}
              className="w-14 h-14 rounded-2xl bg-[#151515] text-gray-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <RotateCcw size={24} />
            </button>
          </div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <StatCard 
            title="Focus Time" 
            value="16h 48m" 
            subtitle="WEEKLY TOTAL" 
            icon={<Clock className="text-purple-500" />} 
            color="bg-purple-500/10 text-purple-500"
            fullWidth
          />
          <StatCard 
            title="Sessions" 
            value="14" 
            subtitle="COMPLETED" 
            icon={<Target className="text-green-500" />} 
            color="bg-green-500/10 text-green-500"
          />
          <StatCard 
            title="Current Streak" 
            value="5 Days" 
            subtitle="MIN 1H DAILY" 
            icon={<Zap className="text-orange-500" />} 
            color="bg-orange-500/10 text-orange-500"
          />
          
          {/* Charts Placeholder */}
          <div className="col-span-2 bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 min-h-[200px] flex flex-col justify-between">
             <div className="flex justify-between items-start">
               <div>
                 <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Study Balance</h3>
                 <p className="text-xs text-gray-400">Heavy focus on Maths (93%).</p>
               </div>
               <div className="w-8 h-8 rounded-full bg-[#151515] flex items-center justify-center text-gray-400">
                 <BarChart2 size={16} />
               </div>
             </div>
             
             <div className="flex items-end gap-2 h-24 mt-4">
               {[40, 70, 30, 85, 50, 60, 90].map((h, i) => (
                 <div key={i} className="flex-1 bg-[#151515] rounded-t-lg relative group overflow-hidden">
                   <div 
                     className="absolute bottom-0 left-0 right-0 bg-blue-600/50 group-hover:bg-blue-500 transition-colors" 
                     style={{ height: `${h}%` }} 
                   />
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Activity Map */}
      <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Calendar size={20} className="text-gray-500" /> Activity Map
          </h3>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-2xl font-mono font-bold text-white">16h 48m</span>
          <span className="text-xs font-bold text-gray-600 tracking-widest uppercase">FOCUSED THIS WEEK</span>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="text-center text-xs font-bold text-gray-600">{day}</div>
              <div 
                className={`h-24 rounded-xl flex items-center justify-center text-xs font-bold transition-all hover:scale-[1.02] ${
                  i === 2 ? 'bg-green-900/40 text-green-400 border border-green-500/20' : 
                  i === 4 ? 'bg-purple-900/40 text-purple-400 border border-purple-500/20' : 
                  'bg-[#151515] text-gray-600 border border-white/5'
                }`}
              >
                {i === 2 ? '401m' : i === 4 ? '279m' : '60m'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ title, value, subtitle, icon, color, fullWidth }: any) {
  return (
    <div className={`bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 flex flex-col justify-between ${fullWidth ? 'col-span-2' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-xl ${color} bg-opacity-10`}>
          {icon}
        </div>
        {fullWidth && <div className="text-xs font-bold text-gray-600 tracking-widest uppercase">WEEKLY TOTAL</div>}
      </div>
      <div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">{title}</div>
      </div>
    </div>
  );
}
