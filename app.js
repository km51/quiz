const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ', 
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  },{
    question: 'イチローにシーズン262本目のヒットを打たれた投手は？',
    answers: [
      'Chan Ho Park',
      'Brian Shouse',
      'Doug Brocail', 
      'Francisco Cordero'
    ],
    correct: 'Brian Shouse'
  },{
    question: '最も使用されているPHPフレームワークは？',
    answers: [
      'Cake PHP',
      'Phalcon',
      'Laravel', 
      'CodeIgniter'
    ],
    correct: 'Laravel'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent= quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
  }else{
    window.alert('不正解!');
  }

  quizIndex++;
  const correctRatio2 = '終了です。';
  if(quizIndex < quizLength){
        setupQuiz();
  }else{
    window.alert(correctRatio2);
  }
};

let handleIndex = 0;
while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click',(e) =>{
      clickHandler(e);
    });
    handleIndex++;  
};
