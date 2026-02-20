import React from 'react';
import { motion } from 'framer-motion';
import { Users, Copy, Plus, UserPlus } from 'lucide-react';

export default function Friends() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-2 flex items-center gap-3">
            <Users size={32} className="text-purple-500" /> Study Buddy
          </h1>
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">CONNECT AND STAY MOTIVATED</p>
        </div>
      </header>

      {/* Friend Code Card */}
      <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">YOUR FRIEND CODE</div>
          <div className="text-4xl font-mono font-bold text-white tracking-wider">Leon#6311</div>
        </div>
        <button className="flex items-center gap-2 bg-[#151515] hover:bg-[#202020] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all border border-white/5 hover:border-white/20">
          <Copy size={18} />
          COPY CODE
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/5 pb-1">
        {['FRIENDS', 'REQUESTS', 'ADD FRIEND'].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-colors border-b-2 ${
              tab === 'FRIENDS' ? 'border-white text-white' : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[400px] bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-[#151515] rounded-full flex items-center justify-center mb-4">
          <UserPlus size={24} className="text-gray-600" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">No Friends Yet</h3>
        <p className="text-gray-500 max-w-xs mb-6">Add friends using their unique code to track progress together.</p>
        
        <div className="w-full max-w-md relative">
          <input 
            type="text" 
            placeholder="Enter Friend Code (e.g., User#1234)" 
            className="w-full bg-[#151515] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white/20 placeholder:text-gray-600 font-mono"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors">
            ADD
          </button>
        </div>
      </div>
    </motion.div>
  );
}
