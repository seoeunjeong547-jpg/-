import React, { useState } from 'react';
import { Question, QuizMode } from '../types';
import { Heart, ArrowRight, CheckCircle2, XCircle, RotateCcw, Home, Sparkles, Award } from 'lucide-react';

interface QuizViewProps {
  questions: Question[];
  title: string;
  onFinish: (score: number, total: number) => void;
  setMode: (mode: QuizMode) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ questions, title, onFinish, setMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answersLog, setAnswersLog] = useState<{ question: Question; selected: number; correct: boolean }[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">문제가 없습니다.</h2>
        <p className="text-gray-600">퀴즈 문제를 불러오지 못했습니다. 다시 시도해 주세요.</p>
        <button
          onClick={() => setMode('home')}
          className="px-6 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors"
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswersLog((prev) => [
      ...prev,
      { question: currentQuestion, selected: index, correct: isCorrect },
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      const finalScore = score + (selectedOption === currentQuestion.correctAnswer ? 0 : 0); // already updated in handleSelectOption
      onFinish(score, questions.length);
    }
  };

  if (isCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-12 text-center space-y-6">
          <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-rose-500/10">
            <Award className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="px-3.5 py-1.5 bg-rose-50 text-rose-700 text-xs font-bold rounded-full">퀴즈 완료</span>
            <h2 className="text-3xl font-extrabold text-gray-900">수고하셨습니다!</h2>
            <p className="text-gray-600">순환기관 퀴즈를 모두 완료했습니다.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto flex items-center justify-around">
            <div>
              <div className="text-sm text-gray-500 font-medium">맞힌 문제</div>
              <div className="text-3xl font-extrabold text-rose-600">{score} / {questions.length}</div>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <div className="text-sm text-gray-500 font-medium">정답률</div>
              <div className="text-3xl font-extrabold text-gray-900">{percentage}%</div>
            </div>
          </div>

          <div className="space-y-3 text-left max-w-xl mx-auto pt-4">
            <h3 className="font-bold text-gray-900 text-sm">문제 풀이 요약</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {answersLog.map((log, idx) => (
                <div key={idx} className={`p-4 rounded-xl border text-sm flex items-start gap-3 ${log.correct ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'}`}>
                  {log.correct ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900">Q{idx + 1}. {log.question.question}</p>
                    <p className="text-xs text-gray-600">
                      내 정답: <span className="font-medium">{log.question.options[log.selected]}</span>{' '}
                      {!log.correct && `(정답: ${log.question.options[log.question.correctAnswer]})`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <button
              onClick={() => {
                setCurrentIndex(0);
                setSelectedOption(null);
                setIsAnswered(false);
                setScore(0);
                setAnswersLog([]);
                setIsCompleted(false);
              }}
              className="px-6 py-3.5 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>다시 풀기</span>
            </button>
            <button
              onClick={() => setMode('home')}
              className="px-8 py-3.5 bg-rose-600 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition-colors flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>메인으로</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setMode('home')}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>나가기</span>
        </button>
        <div className="text-sm font-bold text-rose-600 bg-rose-50 px-4 py-1.5 rounded-full">
          {title} ({currentIndex + 1} / {questions.length})
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-rose-500 to-red-600 transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10 space-y-8">
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 bg-rose-50 text-rose-700 text-xs font-bold rounded-full">
            Question {currentIndex + 1}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            let btnStyle = "bg-gray-50 border-gray-200 text-gray-800 hover:bg-rose-50/50 hover:border-rose-200";
            if (isAnswered) {
              if (idx === currentQuestion.correctAnswer) {
                btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-sm";
              } else if (idx === selectedOption) {
                btnStyle = "bg-rose-50 border-rose-500 text-rose-900 font-bold";
              } else {
                btnStyle = "bg-gray-50/50 border-gray-200 text-gray-400 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between font-medium ${btnStyle}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold ${
                    isAnswered && idx === currentQuestion.correctAnswer
                      ? 'bg-emerald-600 text-white'
                      : isAnswered && idx === selectedOption
                      ? 'bg-rose-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{option}</span>
                </div>
                {isAnswered && idx === currentQuestion.correctAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                )}
                {isAnswered && idx === selectedOption && idx !== currentQuestion.correctAnswer && (
                  <XCircle className="w-5 h-5 text-rose-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Box */}
        {isAnswered && (
          <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 space-y-2 animate-fadeIn">
            <h4 className="font-bold text-blue-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              정답 해설
            </h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <div className="flex justify-end pt-2">
            <button
              onClick={handleNext}
              className="px-8 py-3.5 bg-rose-600 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition-all flex items-center gap-2"
            >
              <span>{currentIndex + 1 < questions.length ? '다음 문제' : '결과 보기'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
