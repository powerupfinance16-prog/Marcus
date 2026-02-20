import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, BookOpen, Target, Zap } from 'lucide-react';

export default function Analytics() {
  const subjects = [
    { name: 'MATHS', progress: 93, questions: 70, color: 'bg-red-500' },
    { name: 'PHYSICS', progress: 0, questions: 0, color: 'bg-blue-500' },
    { name: 'ENGLISH', progress: 74, questions: 50, color: 'bg-purple-500' },
    { name: 'GENERAL TEST', progress: 0, questions: 0, color: 'bg-pink-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-2">Analytics</h1>
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">DEEP DIVE INTO YOUR PERFORMANCE METRICS</p>
        </div>
      </header>

      {/* Subject Proficiency */}
      <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
          <Target size={16} /> Subject Proficiency
        </h3>
        
        <div className="space-y-6">
          {subjects.map((subject) => (
            <div key={subject.name} className="space-y-2">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                  <span className="text-sm font-bold text-white tracking-wider">{subject.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">{subject.progress}%</div>
                  <div className="text-[10px] font-bold text-gray-600 uppercase">{subject.questions} QUESTIONS</div>
                </div>
              </div>
              <div className="h-2 bg-[#151515] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${subject.progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full ${subject.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Topic Mastery Heatmap */}
      <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
          <Zap size={16} /> Topic Mastery Heatmap
        </h3>

        <div className="space-y-8">
          {/* Maths */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-xs font-bold text-white tracking-wider">MATHS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Algebra', 'Calculus', 'Geometry', 'Statistics', 'Trigonometry'].map((topic, i) => (
                <div
                  key={topic}
                  className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all hover:scale-105 cursor-pointer ${
                    i === 1 ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    i === 2 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                    'bg-[#151515] text-gray-500 border-white/5 hover:border-white/20'
                  }`}
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>

          {/* Physics */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-bold text-white tracking-wider">PHYSICS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics'].map((topic) => (
                <div key={topic} className="px-4 py-2 rounded-lg text-xs font-bold bg-[#151515] border border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300 transition-all cursor-pointer">
                  {topic}
                </div>
              ))}
            </div>
          </div>

          {/* English */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-xs font-bold text-white tracking-wider">ENGLISH</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Grammar', 'Reading Comprehension', 'Writing Skills', 'Literature'].map((topic, i) => (
                <div
                  key={topic}
                  className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all hover:scale-105 cursor-pointer ${
                    i === 2 ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    'bg-[#151515] text-gray-500 border-white/5 hover:border-white/20'
                  }`}
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
