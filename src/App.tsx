import React, { useState, useEffect } from 'react';
import { QuizMode, DifficultyLevel, Question, UserStats } from './types';
import { BEGINNER_QUESTIONS, INTERMEDIATE_QUESTIONS, ADVANCED_QUESTIONS, BADGES } from './data/quizData';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { QuizView } from './components/QuizView';
import { AIQuizView } from './components/AIQuizView';
import { ExplorerView } from './components/ExplorerView';
import { StudyView } from './components/StudyView';
import { BadgeStats } from './components/BadgeStats';

const STATS_STORAGE_KEY = 'circulatory_quiz_stats_v1';

const defaultStats: UserStats = {
  totalQuizzes: 0,
  correctAnswers: 0,
  totalQuestions: 0,
  xp: 0,
  unlockedBadges: [],
  streak: 0,
};

export default function App() {
  const [currentMode, setCurrentMode] = useState<QuizMode>('home');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [quizTitle, setQuizTitle] = useState('순환기관 퀴즈');
  const [stats, setStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem(STATS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultStats;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error(e);
    }
  }, [stats]);

  const startQuiz = (difficulty: DifficultyLevel | 'ai') => {
    if (difficulty === 'beginner') {
      setActiveQuestions(BEGINNER_QUESTIONS);
      setQuizTitle('🌱 초급: 기초 심장 구조와 혈관');
      setCurrentMode('quiz');
    } else if (difficulty === 'intermediate') {
      setActiveQuestions(INTERMEDIATE_QUESTIONS);
      setQuizTitle('⚡ 중급: 대순환과 소순환 경로');
      setCurrentMode('quiz');
    } else if (difficulty === 'advanced') {
      setActiveQuestions(ADVANCED_QUESTIONS);
      setQuizTitle('🔥 고급: 심장 생리 및 질환 심화');
      setCurrentMode('quiz');
    } else if (difficulty === 'ai') {
      setCurrentMode('ai' as any);
    }
  };

  const handleStartAIQuiz = (questions: Question[], title: string) => {
    setActiveQuestions(questions);
    setQuizTitle(title);
    setCurrentMode('quiz');
  };

  const handleFinishQuiz = (score: number, total: number) => {
    setStats((prev) => {
      const newCorrect = prev.correctAnswers + score;
      const newTotalQ = prev.totalQuestions + total;
      const earnedXp = score * 20 + 50;
      const newXp = prev.xp + earnedXp;
      const newStreak = score === total ? prev.streak + 1 : 0;
      const newTotalQuizzes = prev.totalQuizzes + 1;

      const updatedStats: UserStats = {
        ...prev,
        totalQuizzes: newTotalQuizzes,
        correctAnswers: newCorrect,
        totalQuestions: newTotalQ,
        xp: newXp,
        streak: newStreak,
        unlockedBadges: prev.unlockedBadges,
      };

      // Check badges
      const newlyUnlocked: string[] = [];
      BADGES.forEach((badge) => {
        if (!prev.unlockedBadges.includes(badge.id) && badge.condition(updatedStats)) {
          newlyUnlocked.push(badge.id);
        }
      });

      if (newlyUnlocked.length > 0) {
        updatedStats.unlockedBadges = [...prev.unlockedBadges, ...newlyUnlocked];
      }

      return updatedStats;
    });
  };

  const handleAddXp = (amount: number) => {
    setStats((prev) => ({
      ...prev,
      xp: prev.xp + amount,
    }));
  };

  const resetStats = () => {
    setStats(defaultStats);
    localStorage.removeItem(STATS_STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50/50 via-gray-50 to-sky-50/50 text-gray-950 font-sans selection:bg-rose-500 selection:text-white">
      <Navbar
        currentMode={currentMode}
        setMode={setCurrentMode}
        userXp={stats.xp}
        streak={stats.streak}
      />

      <main className="pb-16">
        {currentMode === 'home' && (
          <HomeView
            setMode={setCurrentMode}
            startQuiz={startQuiz}
            stats={stats}
          />
        )}

        {currentMode === 'quiz' && (
          <QuizView
            questions={activeQuestions}
            title={quizTitle}
            onFinish={handleFinishQuiz}
            setMode={setCurrentMode}
          />
        )}

        {currentMode === ('ai' as any) && (
          <AIQuizView
            onStartAIQuiz={handleStartAIQuiz}
            setMode={setCurrentMode}
          />
        )}

        {currentMode === 'explorer' && (
          <ExplorerView
            setMode={setCurrentMode}
            onAddXp={handleAddXp}
          />
        )}

        {currentMode === 'study' && (
          <StudyView setMode={setCurrentMode} />
        )}

        {currentMode === 'badges' && (
          <BadgeStats
            stats={stats}
            setMode={setCurrentMode}
            resetStats={resetStats}
          />
        )}
      </main>
    </div>
  );
}
