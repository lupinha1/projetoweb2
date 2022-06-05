const quizContainer = document.getElementById('quiz');
const startBtn = document.getElementById('start-btn');


const questions = [
    {
      question: 'Qual o maior piloto de todos os tempos',
      answers: [
        { text: 'Ayrton Senna', correct: true },
        { text: 'Alain Prost', correct: false },
        { text: 'Lewis Hamilton', correct: false },
        { text: 'Michael Schumacher', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    }
  ]


function startQuiz(){
    startBtn.classList.add('hide')
    quizContainer.classList.remove('hide')
}