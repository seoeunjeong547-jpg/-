import { Question, ExplorerPart, Badge } from '../types';

export const BEGINNER_QUESTIONS: Question[] = [
  {
    id: 'b-1',
    question: '우리 몸에서 혈액을 온몸으로 펌프질하여 보내주는 중심 기관은 무엇인가요?',
    options: ['폐', '심장', '간', '위'],
    correctAnswer: 1,
    explanation: '심장은 강력한 근육으로 이루어진 펌프 기관으로, 수축과 이완을 통해 온몸에 혈액을 공급합니다.'
  },
  {
    id: 'b-2',
    question: '심장 안은 몇 개의 방으로 나누어져 있나요?',
    options: ['2개', '3개', '4개', '6개'],
    correctAnswer: 2,
    explanation: '심장은 2개의 심방(위쪽)과 2개의 심실(아래쪽), 총 4개의 방으로 이루어져 있습니다.'
  },
  {
    id: 'b-3',
    question: '산소를 많이 포함하고 있어 온몸으로 공급되는 밝은 붉은색의 피를 무엇이라고 하나요?',
    options: ['정맥혈', '동맥혈', '림프액', '조직액'],
    correctAnswer: 1,
    explanation: '폐에서 산소를 가득 얻어 심장으로 돌아온 피를 동맥혈이라고 하며, 온몸에 산소를 공급합니다.'
  },
  {
    id: 'b-4',
    question: '혈관 중 심장에서 나가는 피를 온몸으로 보내는 두꺼운 혈관은 무엇인가요?',
    options: ['모세혈관', '정맥', '동맥', '림프관'],
    correctAnswer: 2,
    explanation: '동맥은 심장의 강한 압력을 견디기 위해 벽이 두껍고 탄력성이 뛰어납니다.'
  },
  {
    id: 'b-5',
    question: '혈액이 역류하는 것을 막아주는 판막은 어디에 주로 있나요?',
    options: ['모세혈관 벽', '심장 방실 사이 및 정맥', '폐포 표면', '동맥 내부'],
    correctAnswer: 1,
    explanation: '심장 내부의 판막과 정맥에는 혈액이 거꾸로 흐르는 것을 막아주는 판막이 존재합니다.'
  }
];

export const INTERMEDIATE_QUESTIONS: Question[] = [
  {
    id: 'i-1',
    question: '우심실에서 나간 혈액이 폐로 가서 이산화탄소를 버리고 산소를 얻어 좌심방으로 돌아오는 순환을 무엇이라고 하나요?',
    options: ['대순환', '소순환(폐순환)', '림프순환', '관상순환'],
    correctAnswer: 1,
    explanation: '심장과 폐 사이의 순환을 폐순환(소순환)이라고 하며, 기체 교환이 일어납니다.'
  },
  {
    id: 'i-2',
    question: '좌심실에서 출발하여 온몸의 모세혈관을 거쳐 우심방으로 돌아오는 순환 경로는?',
    options: ['폐순환', '대순환', '관상순환', '문맥순환'],
    correctAnswer: 1,
    explanation: '좌심실 -> 대동맥 -> 온몸의 모세혈관 -> 대정맥 -> 우심방으로 이어지는 경로를 대순환이라고 합니다.'
  },
  {
    id: 'i-3',
    question: '다음 중 산소가 부족하고 이산화탄소가 많은 혈액(정맥혈)이 흐르는 곳은?',
    options: ['좌심실', '대동맥', '폐동맥', '폐정맥'],
    correctAnswer: 2,
    explanation: '우심실에서 폐로 가는 폐동맥은 이름은 동맥이지만 온몸을 돌고 온 정맥혈이 흐릅니다.'
  },
  {
    id: 'i-4',
    question: '우리 몸에서 세포와 영양분 및 기체 교환이 실제로 일어나는 가장 가늘고 얇은 혈관은?',
    options: ['동맥', '정맥', '모세혈관', '대동맥'],
    correctAnswer: 2,
    explanation: '모세혈관은 한 층의 세포로만 이루어져 있어 산소, 영양소, 노폐물의 교환이 활발하게 일어납니다.'
  },
  {
    id: 'i-5',
    question: '심장 자체에 산소와 영양분을 공급하는 혈관의 이름은 무엇인가요?',
    options: ['관상동맥', '경동맥', '폐정맥', '신동맥'],
    correctAnswer: 0,
    explanation: '심장 근육도 스스로 영양과 산소를 공급받아야 하는데, 이를 관상동맥(Coronary artery)이라고 합니다.'
  }
];

export const ADVANCED_QUESTIONS: Question[] = [
  {
    id: 'a-1',
    question: '심장 박동을 스스로 조율하는 페이스메이커(박율기) 역할을 하는 심장의 부위는?',
    options: ['방실결절', '동방결절(Sinoatrial node)', '푸르킨예 섬유', '히스 속'],
    correctAnswer: 1,
    explanation: '우심방 상부에 위치한 동방결절에서 전기적 신호를 자발적으로 발생시켜 심장 박동을 유도합니다.'
  },
  {
    id: 'a-2',
    question: '혈압 측정 시 최고 혈압(수축기 혈압)이 의미하는 순간은?',
    options: ['심장이 이완할 때', '좌심실이 수축하여 혈액을 대동맥으로 밀어낼 때', '우심방에 혈액이 가득 찰 때', '심장 판막이 닫히는 순간'],
    correctAnswer: 1,
    explanation: '수축기 혈압은 좌심실이 강하게 수축할 때 동맥 벽에 가해지는 가장 높은 압력입니다.'
  },
  {
    id: 'a-3',
    question: '성인의 안정 시 평균 맥박수와 1회 박출량으로 계산되는 1분당 심박출량(Cardiac Output)의 대략적인 수치는?',
    options: ['약 1~2 리터', '약 5 리터', '약 15 리터', '약 30 리터'],
    correctAnswer: 1,
    explanation: '1회 박출량(약 70mL) x 심박동수(약 75회/분) = 약 5,250mL(약 5리터)로, 온몸의 피가 1분에 한 바퀴 돕니다.'
  },
  {
    id: 'a-4',
    question: '동맥경화증(Atherosclerosis)이 진행될 때 혈관 벽 안쪽에 주로 쌓이는 물질은?',
    options: ['칼슘과 단백질', '콜레스테롤과 지방 플라크', '글리코겐', '적혈구 덩어리'],
    correctAnswer: 1,
    explanation: '혈관 내피세포가 손상되면 콜레스테롤과 지방이 쌓여 플라크를 형성하고 혈관이 좁아집니다.'
  },
  {
    id: 'a-5',
    question: '다음 중 림프계(Lymphatic system)가 순환계와 밀접하게 연관된 주된 기능이 아닌 것은?',
    options: ['조직액을 다시 혈액으로 회수', '지방 소화 흡수물 운반', '면역 세포(림프구)를 통한 방어 작용', '폐포에서의 직접적인 산소 흡수'],
    correctAnswer: 3,
    explanation: '폐포에서의 산소 흡수는 호흡계와 순환계의 허파꽈리에서 일어나며, 림프계는 조직액 회수와 면역을 담당합니다.'
  }
];

export const EXPLORER_PARTS: ExplorerPart[] = [
  {
    id: 'right-atrium',
    name: '우심방 (Right Atrium)',
    subtitle: '온몸을 돌고 돌아온 피가 들어오는 곳',
    category: 'heart',
    description: '상대정맥과 하대정맥을 통해 온몸에서 산소를 다 쓰고 이산화탄소를 실은 정맥혈이 처음으로 모이는 방입니다.',
    function: '정맥혈 수집 및 우심실로 전달',
    keyFacts: ['상대정맥과 하대정맥과 연결됨', '정맥혈(산소 부족)이 유입됨', '삼천판을 통해 우심실로 혈액을 보냄'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'right-ventricle',
    name: '우심실 (Right Ventricle)',
    subtitle: '폐로 피를 뿜어내는 펌프',
    category: 'heart',
    description: '우심방에서 내려온 혈액을 폐동맥을 통해 폐로 밀어내는 심실입니다. 폐순환의 출발점입니다.',
    function: '폐로 정맥혈 박출',
    keyFacts: ['폐동맥으로 혈액을 보냄', '폐로 가는 짧은 거리를 펌프질하므로 좌심실보다 벽이 얇음', '반월판(폐동맥판)이 역류를 막음'],
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'left-atrium',
    name: '좌심방 (Left Atrium)',
    subtitle: '폐에서 산소를 가득 안고 돌아온 피가 모이는 곳',
    category: 'heart',
    description: '폐정맥을 통해 폐에서 산소를 풍부하게 얻은 동맥혈이 들어오는 방입니다.',
    function: '폐정맥혈 수집 및 좌심실로 전달',
    keyFacts: ['4개의 폐정맥과 연결됨', '동맥혈(산소 풍부)이 유입됨', '이천판(승모판)을 통해 좌심실로 혈액을 보냄'],
    color: 'from-red-500 to-rose-600'
  },
  {
    id: 'left-ventricle',
    name: '좌심실 (Left Ventricle)',
    subtitle: '온몸으로 피를 보내는 강력한 펌프',
    category: 'heart',
    description: '심장의 4개 방 중 가장 두껍고 강력한 근육벽을 가진 방으로, 대동맥을 통해 온몸 구석구석까지 피를 뿜어냅니다.',
    function: '온몸으로 동맥혈 박출 (대순환)',
    keyFacts: ['가장 두꺼운 근육벽 보유 (머리끝부터 발끝까지 보내야 함)', '대동맥으로 연결됨', '대동맥판막이 역류를 차단함'],
    color: 'from-rose-600 to-red-700'
  },
  {
    id: 'arteries',
    name: '동맥 (Arteries)',
    subtitle: '심장에서 나가는 높은 압력의 혈관',
    category: 'vessel',
    description: '심장의 수축 압력을 견디기 위해 혈관 벽이 두껍고 탄력성이 뛰어납니다. (대부분 산소가 풍부한 동맥혈 운반)',
    function: '심장 출구에서 온몸으로 혈액 운반',
    keyFacts: ['혈관 벽이 두껍고 탄력적임', '맥박(Pulse)이 느껴짐', '예외: 폐동맥은 정맥혈이 흐름'],
    color: 'from-orange-500 to-amber-600'
  },
  {
    id: 'capillaries',
    name: '모세혈관 (Capillaries)',
    subtitle: '세포와 물질 교환이 일어나는 미세 혈관',
    category: 'vessel',
    description: '동맥과 정맥을 연결하는 그라데이션 같은 미세혈관으로, 적혈구가 한 줄로 지나갈 정도로 매우 얇습니다.',
    function: '산소, 영양분, 호르몬 공급 및 노폐물 회수',
    keyFacts: ['한 층의 세포로만 구성됨', '혈류 속도가 가장 느림', '확산 현상으로 물질 교환이 일어남'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'veins',
    name: '정맥 (Veins)',
    subtitle: '심장으로 다시 돌아오는 혈관',
    category: 'vessel',
    description: '온몸을 돈 피가 심장으로 돌아오는 혈관입니다. 압력이 낮아 역류를 막는 판막(Valve)이 존재합니다.',
    function: '말초에서 심장으로 혈액 회수',
    keyFacts: ['동맥보다 벽이 얇고 탄력이 적음', '내부에 판막이 있어 피의 역류 방지', '골격근의 수축 운동이 정맥혈 이동을 도옴'],
    color: 'from-sky-500 to-blue-600'
  },
  {
    id: 'pulmonary-circulation',
    name: '폐순환 (Pulmonary Circulation)',
    subtitle: '심장 ⇄ 폐 (기체 교환)',
    category: 'circulation',
    description: '우심실 ➔ 폐동맥 ➔ 폐모세혈관(이산화탄소 배출, 산소 흡수) ➔ 폐정맥 ➔ 좌심방으로 이어지는 순환입니다.',
    function: '혈액 속 이산화탄소를 배출하고 산소를 보충',
    keyFacts: ['정맥혈이 동맥혈로 바뀜', '호흡계와 순환계의 연결고리'],
    color: 'from-teal-500 to-emerald-600'
  },
  {
    id: 'systemic-circulation',
    name: '대순환 (Systemic Circulation)',
    subtitle: '심장 ⇄ 온몸 (영양 및 산소 공급)',
    category: 'circulation',
    description: '좌심실 ➔ 대동맥 ➔ 온몸의 모세혈관(산소와 영양소 전달, 노폐물 수거) ➔ 대정맥 ➔ 우심방으로 이어지는 거대한 순환입니다.',
    function: '온몸의 세포에 산소와 영양소 공급',
    keyFacts: ['동맥혈이 정맥혈로 바뀜', '폐순환보다 경로가 훨씬 길고 혈압이 높음'],
    color: 'from-amber-500 to-red-600'
  }
];

export const BADGES: Badge[] = [
  {
    id: 'first-step',
    title: '순환기관 입문자',
    description: '첫 번째 퀴즈를 완료했습니다!',
    icon: '🌱',
    condition: (stats) => stats.totalQuizzes >= 1
  },
  {
    id: 'heart-expert',
    title: '심장 박사',
    description: '누적 퀴즈 정답 10문제를 달성했습니다.',
    icon: '❤️',
    condition: (stats) => stats.correctAnswers >= 10
  },
  {
    id: 'circulation-master',
    title: '혈액순환 마스터',
    description: '퀴즈에서 연속 5문제 정답(스트릭)을 달성했습니다.',
    icon: '⚡',
    condition: (stats) => stats.streak >= 5
  },
  {
    id: 'explorer',
    title: '혈관 탐험가',
    description: '인체 순환기관 탐색기에서 모든 부위를 확인했습니다.',
    icon: '🔬',
    condition: (stats) => stats.xp >= 100
  }
];
