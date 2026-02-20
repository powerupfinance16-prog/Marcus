import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Clock, Zap, ArrowRight, Plus } from 'lucide-react';

export default function Dashboard() {
  const subjects = [
    { name: 'MATHS', goal: 30, solved: 0, color: 'text-red-500', icon: '📐' },
    { name: 'PHYSICS', goal: 30, solved: 0, color: 'text-blue-500', icon: '⚛️' },
    { name: 'ENGLISH', goal: 30, solved: 0, color: 'text-purple-500', icon: '📚' },
    { name: 'GENERAL TEST', goal: 30, solved: 0, color: 'text-pink-500', icon: '📖' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-2">
            Good Morning, Leon!
          </h1>
          <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">
            SATURDAY, FEBRUARY 21
          </p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-xl font-serif italic text-gray-400 mb-2">"If you can dream it, you can do it."</p>
          <p className="text-xs font-bold text-gray-600 tracking-widest uppercase">WALT DISNEY</p>
        </div>
      </header>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {subjects.map((subject) => (
          <div key={subject.name} className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 bg-[#151515] rounded-xl flex items-center justify-center text-xl">
                {subject.icon}
              </div>
              <div className="text-xs font-bold text-gray-500 tracking-wider">GOAL: {subject.goal}</div>
            </div>
            
            <h3 className={`text-sm font-bold tracking-widest mb-1 ${subject.color}`}>{subject.name}</h3>
            <div className="text-4xl font-bold text-white mb-1">{subject.solved}</div>
            <div className="text-xs font-bold text-gray-600 tracking-wider uppercase">SOLVED</div>

            {/* Progress Bar Background */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
              <div className="h-full bg-current opacity-50" style={{ width: '0%', color: subject.color }} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Up Next */}
        <div className="lg:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 min-h-[300px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-purple-400 tracking-widest uppercase flex items-center gap-2">
              <Zap size={16} /> Up Next
            </h3>
            <span className="text-xs font-bold text-gray-600 tracking-wider">3 TASKS</span>
          </div>

          <div className="space-y-3">
            {[
              'RC WPME NEWSPAPER',
              'MOCKS OF MATHS AND ENGLISH AND REVISION AND ANALYSIS',
              'PHYSICS DUAL NATURE ATOMS OS FORMULA AND PYQ'
            ].map((task, i) => (
              <div key={i} className="group flex items-center gap-4 p-4 bg-[#151515] border border-white/5 rounded-2xl hover:bg-[#1A1A1A] transition-colors cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors flex-1 truncate">
                  {task}
                </span>
                <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity & Ad Space */}
        <div className="space-y-4">
          <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-6">
            <h3 className="text-sm font-bold text-blue-400 tracking-widest uppercase flex items-center gap-2 mb-6">
              <Clock size={16} /> Recent Activity
            </h3>
            <div className="flex items-center justify-between p-4 bg-[#151515] rounded-2xl border border-white/5">
              <div>
                <div className="text-sm font-bold text-white">Focus Session</div>
                <div className="text-xs text-gray-500 mt-1">Maths • 2h ago</div>
              </div>
              <div className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-lg border border-blue-500/20">
                60M
              </div>
            </div>
          </div>

          <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[150px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />
            <span className="text-[10px] font-bold text-gray-600 tracking-widest uppercase mb-2 relative z-10">SPONSORED</span>
            <div className="text-lg font-bold text-gray-400 relative z-10">AD SPACE</div>
            <div className="text-[10px] text-gray-600 mt-1 relative z-10">Format: auto</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
