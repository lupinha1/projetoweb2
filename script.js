const quizContainer = document.getElementById('quiz');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-bt')
const pergunta = document.getElementById('questao')
const resposta1 = document.getElementById('r1')
const resposta2 = document.getElementById('r2')
const resposta3= document.getElementById('r3')
const resposta4 = document.getElementById('r4')




let questoesAleatorias, questaoAtual

startBtn.addEventListener('click', comecarQuiz);
nextBtn.addEventListener('click', () => {
    questaoAtual++
    setarProxQuestao()
  })

function comecarQuiz(){
    startBtn.classList.add('hide')  
    quizContainer.classList.remove('hide')
    questoesAleatorias = questions.sort(() => Math.random() * (9 - 0) + 0)
    questaoAtual = 0;
    setarProxQuestao();
}  

function setarProxQuestao(){
    mostrarQuestao(questoesAleatorias[questaoAtual])
}

function mostrarQuestao(questao){
    pergunta.innerText = questao.question;
    resposta1.innerText = questao.text1;
    resposta2.innerText = questao.text2;
    resposta3.innerText = questao.text3;
    resposta4.innerText = questao.text4;
}



const questions = [
    {
        question: 'Qual o maior piloto de todos os tempos',
        text1: 'Ayrton Senna',
        text2: 'Alain Prost',
        text3: 'Lewis Hamilton',
        text4: 'Michael Schumacher',
    },
    {
        question: 'Qual dessas curvas não faz parte do GP Brasil',
        text1: 'Curva do Balão',
        text2: 'Curva da Balança',
        text3: 'Laranjinha',
        text4: 'S do Senna',
    },
    
    {
        question: 'Qual o maior circuito já utilizado pela F1?',
        text1: 'Pescara',
        text2: 'Spa Francorchamps',
        text3: 'Nurburgring Nordshcleife',
        text4: 'SEI LÁ',
      
    },
    {
        question: 'Quem venceu o GP de São Paulo em 2021?',  
        text1: 'Lewis Hamilton',
        text2: 'Max Verstappen',
        text3: 'Lando Norris',
        text4: 'Daniel Ricciardo',
        
      },
      {
        question: 'Qual piloto foi o campeão mundial em 2021?',
        text1: 'Sergio Perez',
        text2: 'Charles LeClerc',
        text3: 'Max Verstappen',
        text4: 'Lewis Hamilton',
        
      },
      {
        question: 'Quantos títulos tem os maiores campeões da Formula 1?',
        
        text1: '7',
        text2: '8',
        text3: '6',
        text4: '9',
      },
      {
        question: 'Em qual equipe Rubinho correu ao lado de Michael Schumacher?',
        text1: 'Mclaren',
        text2: 'Williams',
        text3: 'Mercedes',
        text4: 'Ferrari',
        
      },
      {
        question: 'Com qual equipe Sebastian Vettel conquistou seu tricampeonato mundial?',
        text1: 'RedBull',
        text2: 'Ferrari',
        text3: 'Aston Martin',
        text4: 'Toro Rosso',
        
      },
      {
        question: 'Quantos carros tem no Grid?',
        text1: '22',
        text2: '18',
        text3: '20',
        text4: '19',
        
      },
      {
        question: 'Quantos brasileiros já correram na Formula 1?',
        text1: '31', 
        text2: '12',
        text3: '18',
        text4: '24',  
        
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
