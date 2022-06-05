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
    },
    {
        question: 'Quem venceu o GP de São Paulo em 2021?',
        answers: [
          { text: 'Lewis Hamilton', correct: true },
          { text: 'Max Verstappen', correct: false },
          { text: 'Lando Norris', correct: false },
          { text: 'Daniel Ricciardo', correct: false }
        ]
      },
      {
        question: 'Qual piloto foi o campeão mundial em 2021?',
        answers: [
          { text: 'Sergio Perez', correct: false },
          { text: 'Charles LeClerc', correct: false },
          { text: 'Max Verstappen', correct: true },
          { text: 'Lewis Hamilton', correct: false }
        ]
      },
      {
        question: 'Quantos títulos tem os maiores campeões da Formula 1?',
        answers: [
          { text: '7', correct: true },
          { text: '8', correct: false },
          { text: '6', correct: false },
          { text: '9', correct: false }
        ]
      },
      {
        question: 'Em qual equipe Rubinho correu ao lado de Michael Schumacher?',
        answers: [
          { text: 'Mclaren', correct: false },
          { text: 'Williams', correct: false },
          { text: 'Mercedes', correct: false },
          { text: 'Ferrari', correct: true }
        ]
      },
      {
        question: 'Com qual equipe Sebastian Vettel conquistou seu tricampeonato mundial?',
        answers: [
          { text: 'RedBull', correct: true },
          { text: 'Ferrari', correct: false },
          { text: 'Aston Martin', correct: false },
          { text: 'Toro Rosso', correct: false }
        ]
      },
      {
        question: 'Quantos carros tem no Grid?',
        answers: [
          { text: '22', correct: false },
          { text: '18', correct: false },
          { text: '20', correct: true },
          { text: '19', correct: false }
        ]
      },
      {
        question: 'Quantos brasileiros já correram na Formula 1?',
        answers: [
          { text: '31', correct: true },
          { text: '12', correct: false },
          { text: '18', correct: false },
          { text: '24', correct: false }
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