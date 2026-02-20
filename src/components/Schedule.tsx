import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from 'date-fns';
import { Calendar as CalendarIcon, Plus, CheckCircle2 } from 'lucide-react';

const initialTasks = [
  { id: 1, title: 'RC WPME NEWSPAPER', completed: false },
  { id: 2, title: 'MOCKS OF MATHS AND ENGLISH AND REVISION AND ANALYSIS', completed: false },
  { id: 3, title: 'PHYSICS DUAL NATURE ATOMS OS FORMULA AND PYQ', completed: false },
  { id: 4, title: 'AOI ALL PYQ AND COMPLETE', completed: false },
];

export default function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [viewMode, setViewMode] = useState<'WEEK' | 'MONTH'>('WEEK');

  const start = startOfWeek(currentDate);
  const end = endOfWeek(currentDate);
  const days = eachDayOfInterval({ start, end });

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
    setNewTask('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 p-4 md:p-8"
    >
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#0A0A0A] p-4 rounded-3xl border border-white/5 gap-4">
        <div className="flex bg-[#151515] rounded-2xl p-1.5 w-full md:w-auto">
          <button
            onClick={() => setViewMode('WEEK')}
            className={`flex-1 md:flex-none px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
              viewMode === 'WEEK' ? 'bg-[#2A2A2A] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            WEEK
          </button>
          <button
            onClick={() => setViewMode('MONTH')}
            className={`flex-1 md:flex-none px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
              viewMode === 'MONTH' ? 'bg-[#2A2A2A] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            MONTH
          </button>
        </div>
        <button 
          onClick={() => setSelectedDate(new Date())}
          className="w-full md:w-auto px-8 py-3 bg-[#151515] hover:bg-[#202020] text-white text-sm font-bold tracking-wide rounded-2xl border border-white/5 transition-colors uppercase"
        >
          GO TO TODAY
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Calendar Section */}
        <div className="lg:col-span-5 bg-[#0A0A0A] rounded-[2rem] p-8 border border-white/5 h-fit">
          <div className="flex items-center gap-4 mb-10">
            <CalendarIcon className="text-white" size={24} />
            <h2 className="text-xl font-bold text-white tracking-widest uppercase">
              {format(currentDate, 'MMMM yyyy')}
            </h2>
          </div>

          <div className="flex justify-between items-center px-2">
            {days.map((day) => {
              const isSelected = isSameDay(day, selectedDate);
              return (
                <div
                  key={day.toString()}
                  onClick={() => setSelectedDate(day)}
                  className="flex flex-col items-center gap-4 cursor-pointer group"
                >
                  <span className="text-xs font-bold text-gray-500 group-hover:text-gray-300 transition-colors uppercase tracking-wider">
                    {format(day, 'EEEEE')}
                  </span>
                  <div className="relative">
                    <div
                      className={`w-12 h-16 flex items-center justify-center rounded-2xl text-xl font-bold transition-all duration-300 ${
                        isSelected
                          ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] scale-110 z-10'
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {format(day, 'd')}
                    </div>
                    {!isSelected && (
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2A2A2A]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tasks Section */}
        <div className="lg:col-span-7 bg-[#0A0A0A] rounded-[2rem] p-8 border border-white/5 min-h-[600px] flex flex-col">
          {/* Add Task Input */}
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
              placeholder="Add a task for this day..."
              className="flex-1 bg-[#151515] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-colors text-sm font-medium"
            />
            <button 
              onClick={addTask}
              className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
            >
              <Plus size={24} />
            </button>
          </div>

          <div className="flex items-center gap-3 mb-8 px-2 cursor-pointer group w-fit">
            <div className="w-5 h-5 rounded-full border-2 border-gray-700 group-hover:border-gray-500 transition-colors" />
            <span className="text-xs font-bold text-gray-500 group-hover:text-gray-400 tracking-widest uppercase transition-colors">Mark as scheduled test</span>
          </div>

          <div className="h-px bg-white/5 mb-8 w-full" />

          <h3 className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-6 px-2">
            Tasks for {format(selectedDate, 'EEEE, MMM d')}
          </h3>

          <div className="space-y-4 flex-1">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => toggleTask(task.id)}
                className="group flex items-center gap-5 p-6 bg-[#151515] border border-white/5 rounded-3xl hover:border-white/10 transition-all cursor-pointer hover:bg-[#1A1A1A]"
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  task.completed 
                    ? 'border-white bg-white scale-110' 
                    : 'border-gray-700 group-hover:border-gray-500'
                }`}>
                  {task.completed && <CheckCircle2 size={16} className="text-black" />}
                </div>
                <span className={`text-sm font-bold tracking-wide transition-colors ${
                  task.completed ? 'text-gray-600 line-through decoration-2 decoration-gray-700' : 'text-gray-200'
                }`}>
                  {task.title}
                </span>
              </motion.div>
            ))}
            
            {tasks.length === 0 && (
              <div className="flex flex-col items-center justify-center h-40 text-gray-600 border-2 border-dashed border-white/5 rounded-3xl">
                <p className="text-sm font-medium">No tasks yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
