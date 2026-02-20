import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Trash2, Edit2, AlertCircle, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

const initialTests = [
  {
    id: 1,
    date: '13 MAY SHIFT 1',
    subject: 'ENGLISH',
    score: 179,
    total: 250,
    percentile: 72,
    type: 'Custom / General',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    id: 2,
    date: '26 MAY SHIFT 2',
    subject: 'MATHS',
    score: 133,
    total: 250,
    percentile: 53,
    type: 'Custom / General',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20'
  },
  {
    id: 3,
    date: '21 MAY SHIFT 2',
    subject: 'PHYSICS',
    score: 83,
    total: 250,
    percentile: 33,
    type: 'Custom / General',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
];

export default function Tests() {
  const [tests, setTests] = useState(initialTests);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-2">Test Logs</h1>
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">ANALYZE YOUR MOCK TESTS IN DETAIL</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <Plus size={18} />
          LOG NEW TEST
        </button>
      </header>

      {/* Performance Trend */}
      <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden min-h-[250px] flex flex-col justify-end">
        <div className="absolute top-8 left-8 flex items-center gap-2">
          <TrendingUp size={20} className="text-green-500" />
          <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">PERFORMANCE TREND</span>
        </div>
        
        {/* Simple SVG Chart */}
        <svg className="w-full h-32 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0 20 L10 15 L20 18 L30 10 L40 12 L50 5 L60 8 L70 2 L80 6 L90 3 L100 0" fill="none" stroke="url(#gradient)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <area d="M0 20 L10 15 L20 18 L30 10 L40 12 L50 5 L60 8 L70 2 L80 6 L90 3 L100 0 V 20 H 0 Z" fill="url(#fillGradient)" opacity="0.2" />
          <defs>
             <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
               <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
             </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search tests..."
            className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-colors font-medium"
          />
        </div>
        <button className="px-4 py-3 bg-[#0A0A0A] border border-white/5 rounded-xl text-gray-500 hover:text-white hover:border-white/20 transition-colors">
          <Filter size={18} />
        </button>
      </div>

      {/* Test Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test) => (
          <motion.div
            key={test.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-6 hover:border-white/10 transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">{test.date}</div>
                <div className={`text-xl font-bold tracking-tight ${test.color}`}>{test.subject}</div>
                <div className="text-[10px] text-gray-600 mt-1">{test.type}</div>
              </div>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${test.bg} border ${test.border}`}>
                <ArrowRight size={18} className={test.color} />
              </div>
            </div>

            <div className="flex items-end justify-between relative z-10">
              <div>
                <div className="text-4xl font-bold text-white tracking-tighter">
                  {test.score} <span className="text-lg text-gray-600 font-medium">/ {test.total}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{test.percentile}%</div>
              </div>
            </div>

            {/* Background Gradient */}
            <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-${test.color.split('-')[1]}-900/10 to-transparent pointer-events-none`} />
          </motion.div>
        ))}
      </div>

      {/* Log Test Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">Log New Test</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white">
                <Trash2 size={20} /> {/* Using Trash icon as close for now based on video layout usually having close */}
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Test Name</label>
                <input type="text" placeholder="e.g., AITS-3" className="w-full bg-[#151515] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20" />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Date</label>
                <div className="relative">
                  <input type="date" className="w-full bg-[#151515] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 appearance-none" />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Type</label>
                <select className="w-full bg-[#151515] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 appearance-none">
                  <option>Custom / General</option>
                  <option>Mock Test</option>
                  <option>Previous Year</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Subjects in this Test</label>
                <div className="flex gap-2">
                  {['Maths', 'Physics', 'English', 'General Test'].map((s) => (
                    <button key={s} className="px-4 py-2 rounded-lg bg-[#151515] border border-white/5 text-xs font-bold text-gray-400 hover:text-white hover:border-white/20 transition-all">
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors mt-4">
                Next
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
