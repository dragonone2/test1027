// 문제 객체(생성자 함수)
function Question(text, choice, answer) {
  this.text = text; // 질문 텍스트
  this.choice = choice; // 선택할 답들(배열)
  this.answer = answer; // 정답 정보
}

// 퀴즈 정보 객체
function Quiz(questions) {
  this.score = 0; // 점수
  this.questions = questions; // 문제
  this.questionIndex = 0; // 문제 번호
}

// 정답 확인 메서드
Quiz.prototype.correctAnswer = function(answer) {
  return answer == this.questions[this.questionIndex].answer;
}

var questions = [
  new Question('1941년 12월 7일 일본 해군의 항공모함 6척으로 편성된 연합함대가 미합중국 하와이주 오아후섬을 기습한 사건은?', ['모스크바 공방전', '비스마르크 추격전', '바르바로사 작전', '진주만 공습'], '진주만 공습'),
  new Question('고려가 도읍지 정한 곳은?', ['동계', '개경', '남경', '동경'], '개경'),
  new Question('He (   ) thousands of pounds to charity. 빈칸에 들어갈 단어는?', ['provided', 'twinkled', 'donated', 'deputized'], 'donated'),
  new Question('l want to report the (   ) of a package. 빈칸에 들어갈 단어는?', ['pleasure', 'loss', 'reduction', 'character'], 'loss'),
  new Question('다음 중 주성분으로만 이루어져 있지 않은 문장은?', ['꽃이 피었다', '윤서가 빠르게 뛴다', '미호가 사과를 먹었다.', '규진이가 신발을 신는다'], '윤서가 빠르게 뛴다'),
  new Question('다음 중 목적어가 사용되지 않은 문장은?', ['희진이가 학교에 간다', '정은이가 사진을 찍는다', '지우는 달리기도 잘한다', '진이는 바나나만 먹는다'], '희진이가 학교에 간다'),
  new Question('궁예는 후고구려 도읍을 어디로 정했나요?', ['개성', '공주', '경주', '천안'], '개성'),
  new Question('순서가 있는 리스트에서 데이터의 삽입(Push), 삭제(Pop)가 한 쪽 끝에서 일어나며 LIFO(Last-In-First-Out)의 특징을 가지는 자료구조는?', ['Tree', 'Graph', 'Stack', 'Queue'], 'Stack'),
  new Question('1930년 일제는 농촌 사회 안정을 명분으로 (   ) 을 전개하였다 빈칸에 들어갈 단어는?', ['무장투쟁운동', '사회 운동', '애국계몽운동', '농촌진흥운동'], '농촌진흥운동'),
  new Question('북간도 지역에서 대종교 중심으로 결성된 항일 무장 단체 이름은?', ['대동청년당', '중광단', '만민공동회', '민족혁명당'], '중광단'),
  new Question('RIP 라우팅 프로토콜에 대한 설명으로 틀린 것은?', ['경로 선택 메트릭은 홉 카운트(hop count)이다\n', '라우팅 프로토콜을 IGP와 EGP로 분류했을 때 EGP에 해당한다\n', '최단 경로 탐색에 Bellman-Ford 알고리즘을 사용한다', '각 라우터는 이웃 라우터들로부터 수신한 정보를 이용하여 라우팅 표를 갱신한다'], '라우팅 프로토콜을 IGP와 EGP로 분류했을 때 EGP에 해당한다'),
  new Question('3.1운동을 계기로 (   ) 가 수립되었다. 빈칸에 들어갈 단어는?', ['신민회', '대한민국임시정부', '한국국민당', '조선공산당'], '대한민국임시정부'),
  new Question('트랜잭션의 상태 중 트랜잭션의 마지막 연산이 실행된 직후의 상태로, 모든 연산의 처리는 끝났지만 트랜잭션이 수행한 최종 결과를 데이터베이스에 반영하지 않은 상태는?', ['Active', 'Partially Committed', 'Committed', 'Aborted'], 'Partially Committed'),
  new Question('문장의 종류 중 주성분에 해당하지 않는 것은?', ['주어', '목적어', '서술어', '관형어'], '관형어'),
  new Question('다음 중 주성분으로만 이루어져 있지 않은 문장은?', ['꽃이 피었다', '윤서가 빠르게 뛴다', '미호가 사과를 먹었다', '규진이가 신발을 신는다'], '윤서가 빠르게 뛴다'),
  new Question('IP 프로토콜의 주요 특징에 해당하지 않는 것은?', ['체크섬 기능으로 데이터 체크섬만 제공한다', '패킷을 분할, 병합하는 기능을 수행하기도 한다', '비연결형(connectionless) 서비스를 제공한다', 'Best Effort 원칙에 따른 전송 기능을 제공한다'], '체크섬기능으로 데이터 체크섬만 제공한다'),
  new Question('다음 중 목적어가 사용되지 않은 문장은', ['희진이가 학교에 간다', '정은이가 사진을 찍는다', '지우는 달리기도 잘한다', '여진이는 바나나만 먹는다'], '희진이가 학교에 간다'),
  new Question('다음 문장에 사용되지 않은 문장 성분은? "철수야, 숙제는 그만 하고 밥 먹으렴."', ['서술어', '독립어', '관형어', '부사어'], '관형어'),
  new Question('다음 중 문장에 쓰인 부속 성분의 개수가 다른 것은?', ['새 청바지가 벌써 짖어졌다.', '민규의 강아지가 아직 아프다', '과연 숙제를 몇 명이나 했을까', '엄마의 김치찌개를 먹고싶다'], '엄마의 김치찌개를 먹고싶다'),
  new Question('한인 애국단원 중 도쿄에서 일왕이 탄 마차 행렬에 폭탄을 던진 사람은?', ['김좌진', '손병희', '이봉창', '서재필'], '이봉창'),
  new Question('구석기 시대 사람들은 동굴이나 바위 그늘에 살거나 강가에 (   ) 을 짓고 살았다. 빈칸에 들어갈 단어는?', ['움막', '기와집', '막집', '초가집'], '움막'),
  new Question('구석기 시대 후기에 자루에 연결한 (   ) 은 창의 기능을 하였다. 빈칸에 들어갈 단어는?', ['주먹도끼', '톱날도끼', '돌날몸돌', '관슴베찌르게'], '슴베찌르게'),
  new Question('청동기시대에 사용된 토기가 아닌것은? ', ['민무늬토기', '미송리식토기', '빗살무늬토기', '붉은간토기'], '미송리식토기'),
  new Question('다음 중 부속 성분의 개수가 가장 많이 포함된 문장은?', ['선풍기가 힘차게 돌아간다', '발목이 아파서 병원에 갔다', '푸른 깃발이 넓은 광장에서 나부낀다', '지우는 선생님과 함께 창문을 닦았다'], '푸른 깃발이 넓은 광장에서 나부낀다'),
  new Question('다음 중 목적어가 사용되지 않은 문장은?', ['희선이가 창문을 열었다', '승록이는 공원에서 혁수와만났다', '지원이는 사과만 먹는다', '예원이가 돌을 던진다'], '승록이는 공원에서 혁수와만났다'),
  new Question('유스케이스(Use Case)의 구성 요소 간의 관계에 포함되지 않는 것은?', ['연관', '확장', '일반화', '구체화'], '구체화'),
  new Question('속성과 관련된 연산(Operation)을 클래스 안에 묶어서 하나로 취급하는 것을 의미하는 객체지향 개념은?', ['Inheritance', 'Class', 'Encapsulation', 'Association'], 'Encapsulation'),
  new Question('GoF(Gang of Four) 디자인 패턴을 생성, 구조, 행동 패턴의 세 그룹으로 분류할 때, 구조 패턴이 아닌 것은?', ['Adapter 패턴', 'Bridge 패턴', 'Builder 패턴', 'Proxy 패턴'], 'Builder 패턴'),
  new Question('인터페이스 구현 시 사용하는 기술로 속성-값 쌍(Attribute-Value Pairs)으로 이루어진 데이터 오브젝트를 전달하기 위해 사용하는 개방형 표준 포맷은?', ['JSON', 'HTML', 'AVPN', 'CSS'], 'JSON'),
  new Question('소프트웨어를 보다 쉽게 이해할 수 있고 적은 비용으로 수정할 수 있도록 겉으로 보이는 동작의 변화 없이 내부구조를 변경하는 것은?', ['Refactoring', 'Architecting', 'Specification', 'Renewal'], 'Refactoring'),

 
  


];

// 퀴즈 객체 생성
var quiz = new Quiz(questions);

// 문제 출력 함수
function updateQuiz() {
  var question = document.getElementById('question');
  var idx = quiz.questionIndex + 1;
  var choice = document.querySelectorAll('.btn');

  // 문제 출력
  question.innerHTML = '문제' + idx + ') ' + quiz.questions[quiz.questionIndex].text;

  // 선택 출력
  for (var i = 0; i < 4; i++) {
     choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
  }

  progress();
}

function progress() {
  var progress = document.getElementById('progress');
  progress.innerHTML = '문제 ' + (quiz.questionIndex + 1) + '/ ' + quiz.questions.length;
}

var btn = document.querySelectorAll('.btn');

// 입력 및 정답 확인 함수
function checkAnswer(i) {
  btn[i].addEventListener('click', function() {
     var answer = btn[i].innerText;

     if (quiz.correctAnswer(answer)) {
        alert('정답입니다!');
        quiz.score++;
     } else {
        alert('틀렸습니다!');
     }

     if (quiz.questionIndex < quiz.questions.length - 1) {
        quiz.questionIndex++;
        updateQuiz();
     } else {
        result();
     }
  });
}

function result() {
  var quizDiv = document.getElementById('quiz');
  var per = parseInt((quiz.score * 100) / quiz.questions.length);
  var txt = '<h1>결과</h1>' + '<h2 id="score">당신의 점수: ' + quiz.score + '/' + quiz.questions.length + '<br><br>' + per + '점' + '</h2>';

  quizDiv.innerHTML = txt;

  // 점수별 결과 텍스트
  if (per < 60) {
     txt += '<h2>더 분발하세요</h2>';
     quizDiv.innerHTML = txt;
  } else if (per >= 60 && per < 80) {
     txt += '<h2>무난한 점수네요</h2>'
     quizDiv.innerHTML = txt;
  } else if (per >= 80) {
     txt += '<h2>훌륭합니다</h2>'
     quizDiv.innerHTML = txt;
  }
}

for (var i = 0; i < btn.length; i++) {
  checkAnswer(i);
}

updateQuiz();
