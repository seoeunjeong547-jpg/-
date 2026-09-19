import React from 'react';
import { QuizMode } from '../types';
import { Heart, Brain, BookOpen, Compass, Award, Home } from 'lucide-react';

interface NavbarProps {
  currentMode: QuizMode;
  setMode: (mode: QuizMode) => void;
  userXp: number;
  streak: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentMode, setMode, userXp, streak }) => {
  const navItems = [
    { mode: 'home' as QuizMode, label: '홈', icon: Home },
    { mode: 'quiz' as QuizMode, label: '레벨별 퀴즈', icon: Heart },
    { mode: 'study' as QuizMode, label: '학습 노트', icon: BookOpen },
    { mode: 'explorer' as QuizMode, label: '순환기관 탐색', icon: Compass },
    { mode: 'badges' as QuizMode, label: '업적 & 기록', icon: Award },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          onClick={() => setMode('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-red-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <Heart className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 text-lg tracking-tight">순환기관 퀴즈 마스터</h1>
            <p className="text-xs text-rose-600 font-medium">심장과 혈관의 신비 탐험</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentMode === item.mode;
            return (
              <button
                key={item.mode}
                onClick={() => setMode(item.mode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-rose-600 shadow-xs border border-rose-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-rose-500' : 'text-gray-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-amber-50 border border-amber-200/60 px-3 py-1.5 rounded-xl">
            <span className="text-amber-500 font-bold text-sm">🔥 연속 {streak}</span>
            <span className="text-xs text-amber-700 font-medium">스트릭</span>
          </div>
          <div className="flex items-center gap-2 bg-rose-50 border border-rose-200/60 px-3 py-1.5 rounded-xl">
            <span className="text-rose-600 font-bold text-sm">✨ {userXp}</span>
            <span className="text-xs text-rose-700 font-medium">XP</span>
          </div>
        </div>
      </div>

      {/* Mobile bottom / sub nav */}
      <div className="md:hidden flex items-center justify-around bg-white border-t border-gray-100 px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentMode === item.mode;
          return (
            <button
              key={item.mode}
              onClick={() => setMode(item.mode)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg text-xs font-medium transition-colors ${
                isActive ? 'text-rose-600 bg-rose-50' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
