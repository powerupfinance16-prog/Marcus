import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Trash2, Edit2, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const initialMistakes = [
  {
    id: 1,
    date: '2023-10-24',
    score: 185,
    percentile: 92.5,
    weakTopics: ['Rotational Motion', 'Fluids'],
    actions: 'Edit',
  },
  {
    id: 2,
    date: '2023-10-28',
    score: 160,
    percentile: 85.0,
    weakTopics: ['Integration', 'Probability'],
    actions: 'Edit',
  },
  {
    id: 3,
    date: '2023-11-02',
    score: 210,
    percentile: 96.0,
    weakTopics: ['Thermodynamics'],
    actions: 'Edit',
  },
];

export default function Mistakes() {
  const [mistakes, setMistakes] = useState(initialMistakes);
  const [filter, setFilter] = useState('');
  const { theme } = useTheme();

  const filteredMistakes = mistakes.filter(
    (m) =>
      m.weakTopics.some(t => t.toLowerCase().includes(filter.toLowerCase())) ||
      m.date.includes(filter)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-theme-text-main tracking-tight">Mock Tests Tracker</h1>
          <p className="text-theme-text-secondary mt-2 text-base">Log scores, analyze mistakes, and improve.</p>
        </div>
        <button className="flex items-center gap-2 bg-theme-accent text-white px-6 py-3 rounded-xl hover:bg-theme-accent/90 transition-all shadow-lg shadow-theme-accent/20 hover:shadow-theme-accent/40 hover:-translate-y-0.5">
          <Plus size={20} />
          <span className="font-medium">Log New Mock</span>
        </button>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 glass-panel p-4 rounded-2xl">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-text-secondary" size={20} />
          <input
            type="text"
            placeholder="Search by topic or date..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full bg-theme-bg/50 border border-theme-border rounded-xl pl-12 pr-4 py-3 text-sm text-theme-text-main focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all placeholder:text-theme-text-secondary/50"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-6 py-3 bg-theme-bg/50 border border-theme-border rounded-xl text-sm text-theme-text-secondary hover:text-theme-text-main hover:border-theme-accent/50 transition-colors">
            <Filter size={18} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Data Grid */}
      <div className="glass-panel rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-theme-border bg-theme-bg/30">
                <th className="p-6 text-xs font-mono text-theme-text-secondary uppercase tracking-wider font-semibold">Date</th>
                <th className="p-6 text-xs font-mono text-theme-text-secondary uppercase tracking-wider font-semibold">Score</th>
                <th className="p-6 text-xs font-mono text-theme-text-secondary uppercase tracking-wider font-semibold">Percentile</th>
                <th className="p-6 text-xs font-mono text-theme-text-secondary uppercase tracking-wider font-semibold w-1/3">Weak Topics</th>
                <th className="p-6 text-xs font-mono text-theme-text-secondary uppercase tracking-wider font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMistakes.map((mistake) => (
                <tr
                  key={mistake.id}
                  className="border-b border-theme-border last:border-0 hover:bg-theme-bg/40 transition-colors group"
                >
                  <td className="p-6 font-medium text-theme-text-main">{mistake.date}</td>
                  <td className="p-6">
                    <span className="font-display font-bold text-lg text-theme-text-main">{mistake.score}</span>
                    <span className="text-xs text-theme-text-secondary ml-1">/ 300</span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                       <div className="w-16 h-1.5 bg-theme-bg rounded-full overflow-hidden">
                          <div className="h-full bg-theme-accent" style={{ width: `${mistake.percentile}%` }} />
                       </div>
                       <span className="text-sm font-medium text-theme-text-main">{mistake.percentile}%</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {mistake.weakTopics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-theme-error/10 text-theme-error border border-theme-error/20 flex items-center gap-1"
                        >
                          <AlertCircle size={10} />
                          {topic}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-theme-bg rounded-lg text-theme-text-secondary hover:text-theme-accent transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 hover:bg-theme-error/10 rounded-lg text-theme-text-secondary hover:text-theme-error transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
