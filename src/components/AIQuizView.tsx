import React, { useState } from 'react';
import { Question, QuizMode } from '../types';
import { Brain, Sparkles, ArrowRight, Home, Loader2, BookOpen } from 'lucide-react';

interface AIQuizViewProps {
  onStartAIQuiz: (questions: Question[], topic: string) => void;
  setMode: (mode: QuizMode) => void;
}

export const AIQuizView: React.FC<AIQuizViewProps> = ({ onStartAIQuiz, setMode }) => {
  const [topic, setTopic] = useState('심장의 판막과 혈류 방향');
  const [difficulty, setDifficulty] = useState('중급');
  const [questionCount, setQuestionCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, difficulty, questionCount }),
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || '퀴즈 생성 실패');
      }
      onStartAIQuiz(data.questions, `AI 맞춤: ${topic}`);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'AI 퀴즈 생성 중 오류가 발생했습니다.');
      setLoading(false);
    }
  };

  const presetTopics = [
    '심장의 4개 방과 판막 구조',
    '대순환과 소순환의 차이와 경로',
    '동맥, 정맥, 모세혈관의 특징',
    '혈압과 심혈관 질환 예방',
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setMode('home')}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>메인으로</span>
        </button>
        <div className="text-sm font-bold text-rose-600 bg-rose-50 px-4 py-1.5 rounded-full flex items-center gap-1.5">
          <Brain className="w-4 h-4" />
          AI 맞춤 퀴즈 생성기
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10 space-y-8">
        <div className="space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
            <Sparkles className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">제미니(Gemini) AI 맞춤 퀴즈 만들기</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            학습하고 싶은 순환기관 주제를 입력하면 AI가 즉석에서 맞춤형 퀴즈와 상세한 해설을 생성해 드립니다.
          </p>
        </div>

        {error && (
          <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-800">퀴즈 주제 또는 핵심 키워드</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="예: 좌심실과 대동맥의 관계, 부정맥의 원인 등"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-sm font-medium"
              required
            />
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs text-gray-500 self-center">추천 주제:</span>
              {presetTopics.map((pt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setTopic(pt)}
                  className="px-3 py-1 bg-gray-100 hover:bg-rose-50 hover:text-rose-700 text-gray-700 text-xs font-medium rounded-lg transition-colors"
                >
                  {pt}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-800">난이도 선택</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-sm font-medium bg-white"
              >
                <option value="초급">초급 (기본 개념)</option>
                <option value="중급">중급 (혈류 경로 및 특징)</option>
                <option value="고급">고급 (심화 생리 및 의학)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-800">문제 수</label>
              <select
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-sm font-medium bg-white"
              >
                <option value={3}>3문제 (빠른 테스트)</option>
                <option value={5}>5문제 (표준)</option>
                <option value={8}>8문제 (도전)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>AI가 맞춤 퀴즈를 생성하고 있습니다...</span>
              </>
            ) : (
              <>
                <span>AI 맞춤 퀴즈 생성하기</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
