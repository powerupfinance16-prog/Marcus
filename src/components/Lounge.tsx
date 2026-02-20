import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Construction } from 'lucide-react';

export default function Lounge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full" />
        <Coffee size={120} className="text-purple-400 relative z-10" />
      </div>
      
      <div className="space-y-4 max-w-md relative z-10">
        <h1 className="text-4xl font-display font-bold text-white tracking-tight">Focus Lounge Under Development</h1>
        <p className="text-gray-400 text-lg">We are rebuilding the lounge to support more users and better real-time collaboration features.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md relative z-10">
        <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl flex flex-col items-center gap-3">
          <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500">
            <Construction size={24} />
          </div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">STATUS</div>
          <div className="text-sm font-bold text-white">Major Upgrades in Progress</div>
        </div>
        <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl flex flex-col items-center gap-3">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
            <Coffee size={24} />
          </div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">ESTIMATED RETURN</div>
          <div className="text-sm font-bold text-white">Coming Soon</div>
        </div>
      </div>
    </motion.div>
  );
}
