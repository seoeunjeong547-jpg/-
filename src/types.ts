export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export type QuizMode = 'home' | 'quiz' | 'explorer' | 'study' | 'badges';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (stats: UserStats) => boolean;
}

export interface UserStats {
  totalQuizzes: number;
  correctAnswers: number;
  totalQuestions: number;
  xp: number;
  unlockedBadges: string[];
  streak: number;
}

export interface ExplorerPart {
  id: string;
  name: string;
  subtitle: string;
  category: 'heart' | 'vessel' | 'circulation';
  description: string;
  function: string;
  pathway?: string;
  keyFacts: string[];
  color: string;
}
