import React from 'react';
import { QuizMode, DifficultyLevel, UserStats } from '../types';
import { Heart, Brain, BookOpen, Compass, Award, Sparkles, ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react';

interface HomeViewProps {
  setMode: (mode: QuizMode) => void;
  startQuiz: (difficulty: DifficultyLevel | 'ai') => void;
  stats: UserStats;
}

export const HomeView: React.FC<HomeViewProps> = ({ setMode, startQuiz, stats }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Hero section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 via-rose-700 to-red-800 text-white p-8 sm:p-12 shadow-xl shadow-rose-900/10">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-rose-100 border border-white/20">
            <Sparkles className="w-4 h-4 text-rose-200 animate-spin" />
            인체 해부학 & 생리학 학습 플랫폼
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            우리 몸의 생명선, <br />
            <span className="text-rose-200">심장과 혈관</span>을 마스터하세요
          </h1>
          <p className="text-rose-100 text-base sm:text-lg leading-relaxed">
            심장의 4개 방 구조부터 대순환·소순환의 경로, 혈압과 질환까지! 
            재미있는 퀴즈와 AI 맞춤 문제로 완벽하게 이해해보세요.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => startQuiz('beginner')}
              className="px-6 py-3.5 bg-white text-rose-700 font-bold rounded-2xl shadow-lg hover:bg-rose-50 transition-all flex items-center gap-2 group"
            >
              <span>퀴즈 바로 시작하기</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setMode('explorer')}
              className="px-6 py-3.5 bg-rose-800/80 backdrop-blur-md text-white font-semibold rounded-2xl border border-rose-500/40 hover:bg-rose-800 transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>순환기관 탐색하기</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalQuizzes}회</div>
            <div className="text-xs text-gray-500 font-medium">완료한 퀴즈</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {stats.totalQuestions > 0 ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) : 0}%
            </div>
            <div className="text-xs text-gray-500 font-medium">정답률</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{stats.streak}연속</div>
            <div className="text-xs text-gray-500 font-medium">정답 스트릭</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{stats.unlockedBadges.length}개</div>
            <div className="text-xs text-gray-500 font-medium">획득한 업적</div>
          </div>
        </div>
      </div>

      {/* Mode Selection Cards */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">학습 및 퀴즈 모드</h2>
          <span className="text-sm text-gray-500 font-medium">원하는 방식을 선택하세요</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Level 1: Beginner */}
          <div 
            onClick={() => startQuiz('beginner')}
            className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl hover:border-rose-200 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                🌱
              </div>
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-2">초급 레벨</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">기초 심장 구조와 혈관</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                심장의 4개 방, 동맥과 정맥의 정의 등 순환기관의 가장 기초적인 개념을 점검합니다.
              </p>
            </div>
            <div className="mt-6 flex items-center text-emerald-600 font-semibold text-sm gap-1 group-hover:translate-x-1 transition-transform">
              <span>퀴즈 풀기</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Level 2: Intermediate */}
          <div 
            onClick={() => startQuiz('intermediate')}
            className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl hover:border-rose-200 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-2">중급 레벨</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">대순환과 소순환 경로</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                폐순환과 체순환의 이동 경로, 동맥혈과 정맥혈의 차이점을 깊이 있게 학습합니다.
              </p>
            </div>
            <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm gap-1 group-hover:translate-x-1 transition-transform">
              <span>퀴즈 풀기</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Level 3: Advanced */}
          <div 
            onClick={() => startQuiz('advanced')}
            className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl hover:border-rose-200 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                🔥
              </div>
              <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full mb-2">고급 레벨</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">심장 생리 및 질환 심화</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                동방결절의 전기 신호, 수축기 혈압, 심박출량 및 심혈관 질환까지 고난도 전문가 퀴즈입니다.
              </p>
            </div>
            <div className="mt-6 flex items-center text-purple-600 font-semibold text-sm gap-1 group-hover:translate-x-1 transition-transform">
              <span>퀴즈 풀기</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* AI Custom Quiz */}
          <div 
            onClick={() => startQuiz('ai')}
            className="group bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-3xl border border-rose-200 shadow-xs hover:shadow-xl hover:border-rose-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform shadow-md shadow-rose-600/30">
                <Brain className="w-6 h-6" />
              </div>
              <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-full mb-2">AI 맞춤 퀴즈</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI와 함께 만드는 무제한 퀴즈</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                제미니(Gemini) AI가 원하는 주제와 난이도로 실시간 맞춤형 순환기관 퀴즈를 생성합니다.
              </p>
            </div>
            <div className="mt-6 flex items-center text-rose-600 font-semibold text-sm gap-1 group-hover:translate-x-1 transition-transform">
              <span>AI 퀴즈 만들기</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Explorer */}
          <div 
            onClick={() => setMode('explorer')}
            className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl hover:border-rose-200 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <span className="inline-block px-3 py-1 bg-sky-50 text-sky-700 text-xs font-bold rounded-full mb-2">대화형 탐색</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">순환기관 인터랙티브 탐색</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                심장의 구조와 혈관 종류를 직접 클릭하며 핵심 기능과 상세 해설을 시각적으로 학습하세요.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sky-600 font-semibold text-sm gap-1 group-hover:translate-x-1 transition-transform">
              <span>탐색 시작하기</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Study Notes */}
          <div 
            onClick={() => setMode('study')}
            className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl hover:border-rose-200 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full mb-2">학습 자료</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">순환기관 요점 노트</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                시험에 꼭 나오는 심장, 동맥·정맥·모세혈관, 대순환과 소순환의 핵심 요점 정리.
              </p>
            </div>
            <div className="mt-6 flex items-center text-amber-600 font-semibold text-sm gap-1 group-hover:translate-x-1 transition-transform">
              <span>노트 읽기</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
