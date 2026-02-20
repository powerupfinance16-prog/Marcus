import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutGrid, Calendar, Clock, Trophy, Coffee, Users, BarChart2, Settings, ChevronLeft, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import SettingsModal from './SettingsModal';

export default function Layout() {
  const { theme } = useTheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex overflow-hidden selection:bg-white/20">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-white/5 bg-[#0A0A0A] flex flex-col relative z-20">
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-black text-xl">T</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Trackly</span>
          </div>
          <button className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 transition-colors">
            <ChevronLeft size={16} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          <NavItem to="/" icon={<LayoutGrid size={20} />} label="Home" />
          <NavItem to="/plan" icon={<Calendar size={20} />} label="Plan" showDot />
          <NavItem to="/focus" icon={<Clock size={20} />} label="Focus" />
          <NavItem to="/tests" icon={<Trophy size={20} />} label="Tests" />
          <NavItem to="/lounge" icon={<Coffee size={20} />} label="Lounge" />
          <NavItem to="/friends" icon={<Users size={20} />} label="Friends" />
          <NavItem to="/stats" icon={<BarChart2 size={20} />} label="Stats" />
        </nav>

        <div className="p-4 mt-auto border-t border-white/5">
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group text-gray-500 hover:text-gray-300 hover:bg-white/5 w-full"
          >
            <Settings size={20} />
            <span className="text-sm font-medium">Leon</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#050505] relative">
        {/* Top Header (Mobile/Desktop) */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-10">
           <div className="flex-1" /> {/* Spacer */}
           <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#050505]" />
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 cursor-pointer" />
           </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>

      <AnimatePresence>
        {isSettingsOpen && <SettingsModal onClose={() => setIsSettingsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

function NavItem({ to, icon, label, showDot }: { to: string; icon: React.ReactNode; label: string; showDot?: boolean }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group ${
          isActive
            ? 'text-white bg-white/5 font-medium'
            : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <div className="flex items-center gap-4">
            <span className={`transition-colors ${isActive ? 'text-white' : 'group-hover:text-gray-300'}`}>
              {icon}
            </span>
            <span className="text-sm">{label}</span>
          </div>
          {isActive && showDot && (
            <motion.div
              layoutId="activeDot"
              className="w-1.5 h-1.5 rounded-full bg-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </>
      )}
    </NavLink>
  );
}
