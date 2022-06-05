const quizContainer = document.getElementById('quiz');
const startBtn = document.getElementById('start-btn');
const resposta = document.getElementById('resposta');
const pergunta = document.getElementById('questao')


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
      question: 'Qual dessas curvas não faz parte do GP Brasil',
      answers: [
        { text: 'Curva do Balão', correct: true },
        { text: 'Curva da Balança', correct: false },
        { text: 'Laranjinha', correct: false },
        { text: 'S do Senna', correct: false }
      ]
    },
    {
      question: 'Qual o maior circuito já utilizado pela F1?',
      answers: [
        { text: 'Pescara', correct: false },
        { text: 'Spa Francorchamps', correct: true },
        { text: 'Nurburgring Nordshcleife', correct: false },
        { text: 'SEI LÁ', correct: false }
      ]
    }
  ]

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})



function comecarQuiz(){
    startBtn.classList.add('hide')
    quizContainer.classList.remove('hide')
    questoesAleatorias = questions.sort(() => Math.random() - .5)
}

function mostrarQuestao(question){
    pergunta.innerText = question.question
}

function setarProximaQuest{
    mostrarQuestao(questoesAleatorias[])
}