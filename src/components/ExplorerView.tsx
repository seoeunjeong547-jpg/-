import React, { useState } from 'react';
import { QuizMode, ExplorerPart } from '../types';
import { EXPLORER_PARTS } from '../data/quizData';
import { Compass, Home, Heart, Activity, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ExplorerViewProps {
  setMode: (mode: QuizMode) => void;
  onAddXp: (amount: number) => void;
}

export const ExplorerView: React.FC<ExplorerViewProps> = ({ setMode, onAddXp }) => {
  const [selectedPart, setSelectedPart] = useState<ExplorerPart>(EXPLORER_PARTS[0]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'heart' | 'vessel' | 'circulation'>('all');
  const [exploredIds, setExploredIds] = useState<string[]>(['right-atrium']);

  const handleSelect = (part: ExplorerPart) => {
    setSelectedPart(part);
    if (!exploredIds.includes(part.id)) {
      setExploredIds((prev) => [...prev, part.id]);
      onAddXp(15);
    }
  };

  const filteredParts = EXPLORER_PARTS.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setMode('home')}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>메인으로</span>
        </button>
        <div className="text-sm font-bold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full flex items-center gap-1.5">
          <Compass className="w-4 h-4" />
          순환기관 인터랙티브 탐색기
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column: List / Category tabs */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-950">부위별 상세 탐색</h2>
              <p className="text-sm text-gray-500">
                심장 방실, 혈관, 순환 루프를 선택하여 자세한 생리적 특징을 알아보세요. (탐색 시 XP 획득!)
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
              <button
                onClick={() => setActiveCategory('all')}
                className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  activeCategory === 'all'
                    ? 'bg-white text-rose-600 shadow-xs border border-rose-100'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                전체
              </button>
              <button
                onClick={() => setActiveCategory('heart')}
                className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  activeCategory === 'heart'
                    ? 'bg-white text-rose-600 shadow-xs border border-rose-100'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                심장 구조
              </button>
              <button
                onClick={() => setActiveCategory('vessel')}
                className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  activeCategory === 'vessel'
                    ? 'bg-white text-rose-600 shadow-xs border border-rose-100'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                혈관 종류
              </button>
              <button
                onClick={() => setActiveCategory('circulation')}
                className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  activeCategory === 'circulation'
                    ? 'bg-white text-rose-600 shadow-xs border border-rose-100'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                순환 경로
              </button>
            </div>

            {/* List */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {filteredParts.map((part) => {
                const isSelected = selectedPart.id === part.id;
                const isExplored = exploredIds.includes(part.id);

                return (
                  <div
                    key={part.id}
                    onClick={() => handleSelect(part)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-rose-50/80 border-rose-300 shadow-sm'
                        : 'bg-white border-gray-100 hover:bg-gray-50/80'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 text-sm">{part.name}</span>
                        {isExplored && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1">{part.subtitle}</p>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      part.category === 'heart' ? 'bg-rose-100 text-rose-700' :
                      part.category === 'vessel' ? 'bg-orange-100 text-orange-700' : 'bg-teal-100 text-teal-700'
                    }`}>
                      {part.category === 'heart' ? '심장' : part.category === 'vessel' ? '혈관' : '순환'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column: Detail View */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 space-y-6 sticky top-24">
            <div className={`p-6 rounded-2xl bg-gradient-to-r ${selectedPart.color} text-white shadow-lg space-y-2`}>
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold">
                {selectedPart.category === 'heart' ? '심장 해부학' : selectedPart.category === 'vessel' ? '혈관 생리학' : '혈액 순환계'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">{selectedPart.name}</h2>
              <p className="text-white/90 text-sm font-medium">{selectedPart.subtitle}</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-600" />
                  상세 설명
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  {selectedPart.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 space-y-1">
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">주요 기능</span>
                  <p className="text-sm font-bold text-gray-900">{selectedPart.function}</p>
                </div>

                <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 space-y-1">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">탐색 상태</span>
                  <p className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    학습 완료 (XP +15)
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-rose-600" />
                  핵심 포인트 요약
                </h3>
                <ul className="space-y-2">
                  {selectedPart.keyFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
