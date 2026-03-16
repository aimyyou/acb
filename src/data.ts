export const users: any = {
  crack_univ: {
    id: 'crack_univ',
    username: 'crack_univ_official_@_crack',
    name: '크랙대학교 공식 인별',
    avatar: 'https://chim9.chimul.uk/z.27.webp',
    bio: '미래를 선도하는 크랙대학교 🎓\n공식 인별입니다.',
    followers: '12.5K',
    following: '10',
    posts: []
  },
  jiyoon: {
    id: 'jiyoon',
    username: 'jiyoon_k_06_#_crack',
    name: '김지윤',
    avatar: 'https://chim9.chimul.uk/z.2.webp',
    bio: '크랙대 26학번 과대✨\nDM 환영💌\n매 순간을 소중하게🌸',
    followers: '1,204',
    following: '890',
    posts: []
  },
  sojin: {
    id: 'sojin',
    username: 'sojin_p_zzZ_#_crack',
    name: '박소진',
    avatar: 'https://chim9.chimul.uk/z.5.webp',
    bio: 'INTP / 귀찮아 / 연락 잘 안 봄',
    followers: '142',
    following: '50',
    posts: []
  },
  yuri: {
    id: 'yuri',
    username: 'yuri_c_06_#_crack',
    name: '차유리',
    avatar: 'https://chim9.chimul.uk/z.8.webp',
    bio: '크랙대 26학번 / ISTJ / 사적인 연락 ❌',
    followers: '305',
    following: '120',
    posts: []
  },
  eunha: {
    id: 'eunha',
    username: 'eunha_galaxy_#_crack',
    name: '이은하',
    avatar: 'https://chim9.chimul.uk/z.11.webp',
    bio: '조용히 살고 싶어요... 🎧\n애니, 게임 좋아함',
    followers: '89',
    following: '150',
    posts: []
  },
  haein: {
    id: 'haein',
    username: 'haein_lee_99_#_crack',
    name: '이해인',
    avatar: 'https://chim9.chimul.uk/z.14.webp',
    bio: '인생은 한 방! 🍻\n크랙대 26학번 (마음만은 20살)\n운동, 술 환영',
    followers: '850',
    following: '600',
    posts: []
  },
  taesu: {
    id: 'taesu',
    username: 'taesu_choi_99_#_crack',
    name: '최태수',
    avatar: 'https://chim9.chimul.uk/z.17.webp',
    bio: '크랙대 복학생\n낭만을 아는 남자 🌹\n후배들아 밥 사줄게 연락해라~',
    followers: '420',
    following: '800',
    posts: []
  },
  jihoon: {
    id: 'jihoon',
    username: 'jihoon_s_study_#_crack',
    name: '송지훈',
    avatar: 'https://chim9.chimul.uk/z.20.webp',
    bio: '크랙대 26학번\n목표: 수석 졸업\nINTJ',
    followers: '112',
    following: '10',
    posts: []
  },
  minwoo: {
    id: 'minwoo',
    username: 'minwoo_kang_fit_#_crack',
    name: '강민우',
    avatar: 'https://chim9.chimul.uk/z.22.webp',
    bio: '크랙대 26학번\n헬창💪 / 피파, 롤 듀오 구함\nENFJ',
    followers: '1,500',
    following: '1,200',
    posts: []
  }
};

// Populate posts after users are defined to avoid circular reference issues
users.jiyoon.posts = [
  { 
    id: 'j1', 
    image: 'https://chim9.chimul.uk/z.3.webp', 
    caption: '개강 첫 날! 다들 너무 반가워요 🥰 우리 과 동기들 다들 너무 착하고 예쁜 듯! 이번 학기 잘 지내봐요!',
    hashtags: ['#크랙대', '#26학번', '#과대', '#개강', '#설레임'],
    likes: 156,
    comments: [
      { id: 'jc1', user: users.minwoo, text: '지윤아 고생이 많다!! 조만간 과 회식 한 번 가자고 ㅋㅋㅋ', likes: 12 },
      { id: 'jc2', user: users.haein, text: '오 과대~ 이쁘네? 오늘 술 마시러 올 거지?', likes: 8 }
    ]
  },
  { 
    id: 'j2', 
    image: 'https://chim9.chimul.uk/z.2.webp', 
    caption: '예쁜 카페 발견! ☕️🍰 공부하기 딱 좋은 분위기인데... 현실은 과대 업무 중 ㅠㅠ',
    hashtags: ['#카공', '#카페스타그램', '#과대업무', '#바쁘다바빠'],
    likes: 89,
    comments: [
      { id: 'jc3', user: users.jihoon, text: '공부하기 좋은 카페면 위치 공유 부탁드립니다.', likes: 3 },
      { id: 'jc4', user: users.sojin, text: '카페 가서 일하는 게 제일 이해 안 됨... 그냥 집에서 자지', likes: 15 }
    ]
  },
  { 
    id: 'j3', 
    image: 'https://chim9.chimul.uk/z.4.webp', 
    caption: '과대 일은 힘들지만 뿌듯해 💖 다들 도와줘서 고마워요! 특히 민우랑 해인언니 짱!',
    hashtags: ['#보람찬하루', '#동기사랑', '#크랙대최고'],
    likes: 210,
    comments: [
      { id: 'jc5', user: users.taesu, text: '지윤아~ 오빠가 도와줄 거 없니? 언제든 말만 해~^^', likes: 1 }
    ]
  }
];

users.sojin.posts = [
  { 
    id: 's1', 
    image: 'https://chim9.chimul.uk/z.6.webp', 
    caption: '침대 밖은 위험해... 하루 종일 누워 있고 싶다. 개강 왜 했냐 진짜.',
    hashtags: ['#침대속', '#집순이', '#귀찮아', '#개강싫어'],
    likes: 42,
    comments: [
      { id: 'sc1', user: users.jiyoon, text: '소진아~ 그래도 수업은 나와야지 ㅠㅠ 출석 체크 내가 해줄까?', likes: 5 },
      { id: 'sc2', user: users.yuri, text: '학칙 위반입니다. 대리 출석은 엄격히 금지되어 있습니다.', likes: 20 }
    ]
  },
  { 
    id: 's2', 
    image: 'https://chim9.chimul.uk/z.7.webp', 
    caption: '당 충전 중... 🍰 이거 먹으려고 겨우 일어남. 달달한 게 최고야.',
    hashtags: ['#디저트', '#당충전', '#케이크', '#먹스타그램'],
    likes: 35,
    comments: [
      { id: 'sc3', user: users.minwoo, text: '오 소진아 그거 맛있어 보이네 ㅋㅋㅋ 나중에 나도 한 입?', likes: 2 }
    ]
  }
];

users.yuri.posts = [
  { 
    id: 'y1', 
    image: 'https://chim9.chimul.uk/z.9.webp', 
    caption: '바다 냄새가 좋다. 난간에 기대어 잠시 휴식 중. 생각 정리하기에 최적의 장소.',
    hashtags: ['#바다', '#휴식', '#생각정리', '#힐링'],
    likes: 78,
    comments: [
      { id: 'yc1', user: users.jihoon, text: '정리 상태가 훌륭하군요. 참고하고 싶습니다.', likes: 10 },
      { id: 'yc2', user: users.haein, text: '야 유리야~ 너무 빡빡하게 살지 마라 ㅋㅋㅋ 술 한 잔 하면 계획 다 무너지고 재밌어!', likes: 3 }
    ]
  },
  { 
    id: 'y2', 
    image: 'https://chim9.chimul.uk/z.10.webp', 
    caption: '유럽의 고풍스러운 유적지. 역사의 숨결이 느껴지는 곳이다. 계획대로 모든 곳을 둘러보는 중.',
    hashtags: ['#유럽여행', '#유적지', '#역사탐방', '#계획여행'],
    likes: 54,
    comments: [
      { id: 'yc3', user: users.eunha, text: '죄... 죄송해요... 저 아니죠...? ㅠㅠ', likes: 2 }
    ]
  }
];

users.eunha.posts = [
  { 
    id: 'e1', 
    image: 'https://chim9.chimul.uk/z.12.webp', 
    caption: '나만의 작은 세상... 📚🎧 만화책이랑 안경만 있으면 어디든 갈 수 있어. 감성 돋는 밤.',
    hashtags: ['#만화책', '#감성사진', '#안경', '#나만의공간'],
    likes: 67,
    comments: [
      { id: 'ec1', user: users.jiyoon, text: '은하야~ 그거 뭐야? 되게 귀엽다! 나중에 구경시켜줘 ㅎㅎ', likes: 4 },
      { id: 'ec2', user: users.sojin, text: '오 퀄리티 좀 치네. 어디서 삼?', likes: 7 }
    ]
  },
  { 
    id: 'e2', 
    image: 'https://chim9.chimul.uk/z.13.webp', 
    caption: '큰맘 먹고 해본 코스프레... 😳 너무 부끄럽지만... 그래도 잘 나온 것 같아서 올려봐요... (도망)',
    hashtags: ['#코스프레', '#애니', '#부끄러움', '#취미생활'],
    likes: 112,
    comments: [
      { id: 'ec3', user: users.minwoo, text: '은하야 대박 ㅋㅋㅋ 완전 잘 어울리는데? ㅋㅋㅋ', likes: 15 }
    ]
  }
];

users.haein.posts = [
  { 
    id: 'h1', 
    image: 'https://chim9.chimul.uk/z.15.webp', 
    caption: '오늘 기분 최고! ✨ 셀카 한 장 투척 ㅋㅋㅋ 다들 오늘 뭐 해? 술 마실 사람?',
    hashtags: ['#셀카', '#데일리룩', '#기분좋음', '#술친구구함'],
    likes: 245,
    comments: [
      { id: 'hc1', user: users.minwoo, text: '누나 나 대기 중 ㅋㅋㅋ 오늘 3차까지 콜?', likes: 20 },
      { id: 'hc2', user: users.taesu, text: '해인아~ 오빠도 가도 되지? 오빠 주량 소주 5병이다~^^', likes: 0 }
    ]
  },
  { 
    id: 'h2', 
    image: 'https://chim9.chimul.uk/z.16.webp', 
    caption: '복근 체크 💪🔥 운동한 보람이 있네. 좀 과감한가? ㅋㅋㅋ 그래도 만족!',
    hashtags: ['#복근', '#오운완', '#바디체크', '#눈바디'],
    likes: 189,
    comments: [
      { id: 'hc3', user: users.minwoo, text: '누나 복근 지리는데? ㅋㅋㅋ 진짜 대박이다', likes: 12 }
    ]
  }
];

users.taesu.posts = [
  { 
    id: 't1', 
    image: 'https://chim9.chimul.uk/z.18.webp', 
    caption: '드라이브 가기 좋은 날~^^ 조수석 비었다 껄껄. 후배님들 오빠 차 탈 사람?',
    hashtags: ['#드라이브', '#복학생의낭만', '#오빠차뽑았다', '#연락줘'],
    likes: 32,
    comments: [
      { id: 'tc1', user: users.jiyoon, text: '선배님 차 멋지네요! 나중에 기회 되면 태워주세요 ㅎㅎ (영혼없음)', likes: 2 },
      { id: 'tc2', user: users.sojin, text: '기름값 아깝게 왜 돌아다님?', likes: 10 }
    ]
  },
  { 
    id: 't2', 
    image: 'https://chim9.chimul.uk/z.19.webp', 
    caption: '역시 소주가 달다...★ 인생의 쓴맛을 알아야 술맛을 알지. 후배들은 아직 멀었다~',
    hashtags: ['#혼술', '#인생의맛', '#낭만복학생'],
    likes: 15,
    comments: [
      { id: 'tc3', user: users.haein, text: '아저씨... 가오 좀 그만 잡으세요 ㅋㅋㅋ 술이나 마셔요', likes: 25 }
    ]
  }
];

users.jihoon.posts = [
  { 
    id: 'jh1', 
    image: 'https://chim9.chimul.uk/z.21.webp', 
    caption: '지식은 힘이다. 오늘 읽은 책들 정리 중. 배움에는 끝이 없다.',
    hashtags: ['#독서', '#책스타그램', '#지식', '#자기계발'],
    likes: 45,
    comments: [
      { id: 'jhc1', user: users.yuri, text: '좋은 책들이군요. 저도 읽어본 것들입니다.', likes: 8 },
      { id: 'jhc2', user: users.minwoo, text: '지훈아 책만 보지 말고 밖에도 좀 나와라 ㅋㅋㅋ', likes: 3 }
    ]
  }
];

users.minwoo.posts = [
  { 
    id: 'm1', 
    image: 'https://chim9.chimul.uk/z.23.webp', 
    caption: '오늘도 득근!! 체육관 올 사람? 💪🔥 쇠질이 제일 재밌어 ㅋㅋㅋ',
    hashtags: ['#헬창', '#득근', '#운동하는남자', '#크랙대체육관'],
    likes: 312,
    comments: [
      { id: 'mc1', user: users.haein, text: '민우야 나 10분 뒤에 도착 ㅋㅋㅋ 오늘 하체 조지자', likes: 15 },
      { id: 'mc2', user: users.jiyoon, text: '민우야 너무 무리하지 마! 다치면 안 돼 ㅠㅠ', likes: 6 }
    ]
  },
  { 
    id: 'm2', 
    image: 'https://chim9.chimul.uk/z.24.webp', 
    caption: '복근 선명도 실화냐? 💪🔥 역시 식단이랑 운동은 배신하지 않아. 뿌듯하다!',
    hashtags: ['#복근', '#바디체크', '#헬스타그램', '#운동자극'],
    likes: 156,
    comments: [
      { id: 'mc3', user: users.eunha, text: '와... 진짜 대단하시네요... (부럽)', likes: 4 }
    ]
  }
];

export const mainPost = {
  id: 'main_post',
  user: users.crack_univ,
  image: 'https://chim9.chimul.uk/z.27.webp',
  caption: '2026학년도 신입생 여러분 환영합니다! 🎉\n개강 첫 주, 다들 잘 적응하고 계신가요?\n새로운 시작을 응원합니다!\n\n#크랙대 #신입생 #개강 #26학번 #환영해요 #캠퍼스라이프',
  hashtags: ['#크랙대', '#신입생', '#개강', '#26학번', '#환영해요', '#캠퍼스라이프'],
  likes: 842,
  comments: [
    { id: 'c1', user: users.jiyoon, text: '다들 너무 반가워요~!! 1학년 과대 김지윤입니다! 모르는 거 있으면 언제든 편하게 연락주세요! 🥰💖', likes: 45 },
    { id: 'c2', user: users.sojin, text: '아 개강 극혐... 조별과제만 없게 해주세요 제발...', likes: 120 },
    { id: 'c3', user: users.yuri, text: '수업 시간 엄수 부탁드립니다. 지각은 민폐입니다.', likes: 12 },
    { id: 'c4', user: users.eunha, text: '저... 다들 잘 부탁드려요... (쭈굴) 💦', likes: 8 },
    { id: 'c5', user: users.haein, text: '야 신입생들!! 오늘 저녁에 술 마실 사람 다 모여라!!! 내가 쏜다! 🍻🔥', likes: 88 },
    { id: 'c6', user: users.taesu, text: '크~ 역시 우리 후배님들 물이 좋네~^^ 오빠가 밥 한 번 쏠 테니까 번호 좀 남겨봐~ 껄껄껄', likes: 2 },
    { id: 'c7', user: users.jihoon, text: '도서관 자리 맡아두실 분 구합니다. 잡담 사절.', likes: 5 },
    { id: 'c8', user: users.minwoo, text: '오쓰!! 다들 체육관에서 득근합시다!! 피파 하실 분 디엠ㄱㄱ!! 💪💪', likes: 56 },
  ]
};
