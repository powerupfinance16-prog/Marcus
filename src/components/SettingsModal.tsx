import React from 'react';
import { motion } from 'framer-motion';
import { X, User, Sparkles, BookOpen, BarChart2, Monitor, Cloud, LogOut, Trash2 } from 'lucide-react';

export default function SettingsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <h2 className="text-xl font-bold text-white">Settings</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {/* Study Profile */}
          <section>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <User size={14} /> Study Profile
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#151515] p-4 rounded-2xl border border-white/5">
                <label className="text-xs text-gray-500 font-medium mb-1 block">FRIEND CODE</label>
                <div className="text-lg font-mono font-bold text-white">Leon#6311</div>
                <p className="text-[10px] text-gray-600 mt-1">Your unique ID (Friend Code) never changes.</p>
              </div>
              <div className="bg-[#151515] p-4 rounded-2xl border border-white/5">
                <label className="text-xs text-gray-500 font-medium mb-1 block">USERNAME</label>
                <div className="text-lg font-bold text-white flex items-center justify-between">
                  Leon <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-400 cursor-pointer hover:text-white">Edit</span>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles size={14} /> Features
            </h3>
            <div className="bg-[#151515] p-4 rounded-2xl border border-white/5 flex items-center justify-between">
              <div>
                <div className="font-medium text-white">Smart Recommendations</div>
                <div className="text-xs text-gray-500">Get suggestions based on your performance.</div>
              </div>
              <div className="w-12 h-6 bg-white/10 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
          </section>

          {/* Study Stream */}
          <section>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen size={14} /> Study Stream
            </h3>
            <div className="flex gap-2 bg-[#151515] p-1.5 rounded-xl border border-white/5 w-fit">
              {['JEE', 'NEET', 'GENERAL'].map((stream) => (
                <button
                  key={stream}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                    stream === 'GENERAL' ? 'bg-[#2A2A2A] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {stream}
                </button>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          <section>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen size={14} /> Curriculum
            </h3>
            <div className="space-y-2">
              <button className="w-full p-3 rounded-xl border border-dashed border-white/10 text-gray-500 text-sm hover:border-white/20 hover:text-gray-300 transition-all flex items-center justify-center gap-2">
                <PlusIcon /> Add Subject (e.g. History)
              </button>
              {['Maths', 'Physics', 'English', 'General Test'].map((subj) => (
                <div key={subj} className="flex items-center justify-between p-3 bg-[#151515] rounded-xl border border-white/5">
                  <span className="text-sm font-medium text-white">{subj}</span>
                  <span className="text-xs text-gray-500">5 topics</span>
                </div>
              ))}
            </div>
          </section>

          {/* Analytics */}
          <section>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BarChart2 size={14} /> Analytics
            </h3>
            <div className="bg-[#151515] p-4 rounded-2xl border border-white/5 space-y-4">
              <div className="text-sm font-medium text-white mb-2">Activity Map Thresholds</div>
              {[2, 3, 4].map((level) => (
                <div key={level} className="flex items-center gap-4">
                  <span className="text-xs text-gray-500 w-12">Level {level}</span>
                  <div className="flex-1 h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: `${level * 20}%` }} />
                  </div>
                  <span className="text-xs text-gray-400">{level * 2}hr+</span>
                </div>
              ))}
            </div>
          </section>

          {/* Appearance */}
          <section>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Monitor size={14} /> Appearance
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {['Standard Dark', 'Paper White', 'Midnight Quiet', 'Obsidian Focus', 'Silent Void', 'Lush Forest'].map((themeName) => (
                <button
                  key={themeName}
                  className={`p-3 rounded-xl border text-left text-sm font-medium transition-all flex items-center gap-2 ${
                    themeName === 'Obsidian Focus'
                      ? 'bg-[#2A2A2A] border-white/20 text-white'
                      : 'bg-[#151515] border-white/5 text-gray-400 hover:bg-[#202020]'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${
                    themeName.includes('Dark') || themeName.includes('Obsidian') || themeName.includes('Void') ? 'bg-black' : 
                    themeName.includes('White') ? 'bg-white' : 
                    themeName.includes('Forest') ? 'bg-green-900' : 'bg-blue-900'
                  }`} />
                  {themeName}
                </button>
              ))}
            </div>
          </section>

          {/* Cloud Sync */}
          <section>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Cloud size={14} /> Cloud Sync
            </h3>
            <div className="bg-[#151515] p-6 rounded-2xl border border-white/5 text-center">
              <p className="text-sm text-gray-400 mb-4">If you suspect data isn't syncing correctly, you can manually push all your current app data to the cloud.</p>
              <button className="bg-[#5b21b6] hover:bg-[#4c1d95] text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-purple-900/20">
                FORCE SAVE TO CLOUD
              </button>
            </div>
          </section>

          {/* Danger Zone */}
          <section>
            <h3 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Trash2 size={14} /> Danger Zone
            </h3>
            <div className="space-y-3">
              <button className="w-full p-4 rounded-2xl border border-white/5 bg-[#151515] flex items-center justify-between group hover:bg-red-500/5 hover:border-red-500/20 transition-all">
                <div className="text-left">
                  <div className="text-sm font-bold text-white group-hover:text-red-400">End Session</div>
                  <div className="text-xs text-gray-500">SIGN OUT OF YOUR ACCOUNT</div>
                </div>
                <LogOut size={18} className="text-gray-500 group-hover:text-red-400" />
              </button>
              <button className="w-full p-4 rounded-2xl border border-white/5 bg-[#151515] flex items-center justify-between group hover:bg-red-500/5 hover:border-red-500/20 transition-all">
                <div className="text-left">
                  <div className="text-sm font-bold text-white group-hover:text-red-400">Clear All Data</div>
                  <div className="text-xs text-gray-500">RESET APP & LOCAL STORAGE</div>
                </div>
                <Trash2 size={18} className="text-gray-500 group-hover:text-red-400" />
              </button>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2.5V9.5M2.5 6H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
