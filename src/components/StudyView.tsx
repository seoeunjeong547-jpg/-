import React from 'react';
import { QuizMode } from '../types';
import { BookOpen, Home, Heart, ArrowRight, ShieldCheck, Sparkles, Activity } from 'lucide-react';

interface StudyViewProps {
  setMode: (mode: QuizMode) => void;
}

export const StudyView: React.FC<StudyViewProps> = ({ setMode }) => {
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
        <div className="text-sm font-bold text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" />
          순환기관 핵심 요점 노트
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-12 space-y-10">
        <div className="space-y-3 border-b border-gray-100 pb-8">
          <span className="px-3.5 py-1.5 bg-rose-50 text-rose-700 text-xs font-bold rounded-full">완벽 가이드</span>
          <h1 className="text-3xl font-extrabold text-gray-900">심장과 혈관, 그리고 혈액 순환의 모든 것</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            인체의 펌프인 심장 구조부터 대순환과 소순환의 경로, 그리고 모세혈관에서의 물질 교환까지 핵심만 알기 쉽게 정리했습니다.
          </p>
        </div>

        {/* Section 1: Heart Anatomy */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
              ❤️
            </div>
            <h2 className="text-xl font-bold text-gray-900">1. 심장의 구조와 4개의 방</h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-5 rounded-2xl border border-gray-100">
            심장은 두 개의 심방(위쪽)과 두 개의 심실(아래쪽), 총 4개의 방으로 이루어져 있습니다. 
            심방은 혈액이 심장으로 <span className="font-bold text-gray-900">들어오는 곳</span>이며, 심실은 혈액을 온몸이나 폐로 <span className="font-bold text-gray-900">내보내는 펌프</span> 역할을 합니다. 
            좌측 심실은 온몸으로 피를 보내야 하므로 우측 심실보다 벽이 훨씬 두껍습니다.
          </p>
        </div>

        {/* Section 2: Blood Vessels */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              🩸
            </div>
            <h2 className="text-xl font-bold text-gray-900">2. 혈관의 3가지 종류 (동맥, 정맥, 모세혈관)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-rose-50/60 p-5 rounded-2xl border border-rose-100 space-y-2">
              <h3 className="font-bold text-rose-800 text-base">동맥 (Artery)</h3>
              <p className="text-xs text-rose-900/80 leading-relaxed">
                심장에서 나가는 혈관. 높은 혈압을 견디기 위해 벽이 두껍고 탄력성이 강합니다. (대부분 동맥혈 흐름)
              </p>
            </div>
            <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-100 space-y-2">
              <h3 className="font-bold text-blue-800 text-base">정맥 (Vein)</h3>
              <p className="text-xs text-blue-900/80 leading-relaxed">
                심장으로 들어오는 혈관. 압력이 낮아 피가 거꾸로 흐르는 것을 막는 판막(Valve)이 존재합니다.
              </p>
            </div>
            <div className="bg-purple-50/60 p-5 rounded-2xl border border-purple-100 space-y-2">
              <h3 className="font-bold text-purple-800 text-base">모세혈관 (Capillary)</h3>
              <p className="text-xs text-purple-900/80 leading-relaxed">
                동맥과 정맥을 잇는 가느다란 혈관. 세포와 산소, 영양소, 이산화탄소를 교환하는 장소입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Circulation Pathways */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold">
              🔄
            </div>
            <h2 className="text-xl font-bold text-gray-900">3. 혈액 순환 경로 (폐순환 vs 대순환)</h2>
          </div>
          <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <div className="space-y-1">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-full">소순환 (폐순환)</span>
              <p className="text-sm font-semibold text-gray-900 pt-1">
                우심실 ➔ 폐동맥 ➔ 폐모세혈관(기체교환: CO₂ 배출, O₂ 흡수) ➔ 폐정맥 ➔ 좌심방
              </p>
            </div>
            <hr className="border-gray-200" />
            <div className="space-y-1">
              <span className="px-2.5 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-full">대순환 (체순환)</span>
              <p className="text-sm font-semibold text-gray-900 pt-1">
                좌심실 ➔ 대동맥 ➔ 온몸의 모세혈관(영양·산소 공급, 노폐물 수거) ➔ 대정맥 ➔ 우심방
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <button
            onClick={() => setMode('quiz')}
            className="px-8 py-4 bg-rose-600 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition-all flex items-center gap-2"
          >
            <span>이 내용으로 퀴즈 풀러 가기</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
