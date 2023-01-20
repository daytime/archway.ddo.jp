const quiz = [
  {
    question: "ゲーム史上、最も売れたゲーム機は次の打ちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "Quiz2",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },

  {
    question: "test-test",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  // const correct = 3;
];
const QuizLength = quiz.length;
let quizIndex = 0;
const $button = document.getElementsByTagName("button");

const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.tabIndex) {
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
  quizIndex++;
  if (quizIndex < QuizLength) {
    setupQuiz();
  } else {
    window.alert("終了！");
  }
};


// const startQuiz = () => {
//   let handlerIndex = 0;
//   const buttonLength = $button.length;
//   while (handlerIndex < buttonLength) {
//     $button[handlerIndex].addEventListener("click", (e) => {
//       // if (correct === e.target.textContent) {
//       // if (correct === e.target.tabIndex) {
//       if (correct === $button[handlerIndex].tabIndex) {
//         window.alert("正解！");
//       } else {
//         window.alert("不正解！");
//       }
//     });
//     handlerIndex++;
//   }
// };

// startQuiz();

// console.log($button[0].tabIndex);
