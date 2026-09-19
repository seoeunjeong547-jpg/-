import React from 'react';
import { QuizMode, UserStats } from '../types';
import { BADGES } from '../data/quizData';
import { Award, Home, Activity, ShieldCheck, Zap, Lock, CheckCircle2 } from 'lucide-react';

interface BadgeStatsProps {
  stats: UserStats;
  setMode: (mode: QuizMode) => void;
  resetStats: () => void;
}

export const BadgeStats: React.FC<BadgeStatsProps> = ({ stats, setMode, resetStats }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setMode('home')}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>메인으로</span>
        </button>
        <div className="text-sm font-bold text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full flex items-center gap-1.5">
          <Award className="w-4 h-4" />
          업적 및 학습 기록
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-12 space-y-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-rose-500 to-red-600 text-white flex items-center justify-center text-3xl shadow-lg shadow-rose-500/20">
              🏆
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-extrabold text-gray-900">내 학습 프로필</h1>
              <p className="text-sm text-gray-500">지금까지 달성한 경험치와 업적을 확인하세요.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-rose-50 border border-rose-200 px-5 py-3 rounded-2xl text-center">
              <div className="text-xs text-rose-600 font-bold uppercase">총 경험치</div>
              <div className="text-2xl font-extrabold text-rose-700">{stats.xp} XP</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-1">
            <span className="text-xs font-medium text-gray-500">완료한 퀴즈</span>
            <div className="text-2xl font-bold text-gray-900">{stats.totalQuizzes}회</div>
          </div>
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-1">
            <span className="text-xs font-medium text-gray-500">총 맞힌 문제</span>
            <div className="text-2xl font-bold text-emerald-600">{stats.correctAnswers}문제</div>
          </div>
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-1">
            <span className="text-xs font-medium text-gray-500">현재 연속 스트릭</span>
            <div className="text-2xl font-bold text-amber-600">🔥 {stats.streak}</div>
          </div>
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-1">
            <span className="text-xs font-medium text-gray-500">정답률</span>
            <div className="text-2xl font-bold text-blue-600">
              {stats.totalQuestions > 0 ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) : 0}%
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">업적 뱃지 컬렉션</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BADGES.map((badge) => {
              const isUnlocked = badge.condition(stats) || stats.unlockedBadges.includes(badge.id);

              return (
                <div
                  key={badge.id}
                  className={`p-5 rounded-2xl border flex items-center gap-4 transition-all ${
                    isUnlocked
                      ? 'bg-rose-50/40 border-rose-200 shadow-xs'
                      : 'bg-gray-50/60 border-gray-200 opacity-60 grayscale'
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-3xl shadow-xs shrink-0">
                    {badge.icon}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900 text-sm">{badge.title}</h3>
                      {isUnlocked ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          달성완료
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
                          <Lock className="w-3.5 h-3.5" />
                          잠김
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600">{badge.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex justify-end">
          <button
            onClick={() => {
              if (window.confirm('정말로 모든 학습 기록과 업적을 초기화하시겠습니까?')) {
                resetStats();
              }
            }}
            className="px-4 py-2 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors"
          >
            기록 초기화하기
          </button>
        </div>
      </div>
    </div>
  );
};
