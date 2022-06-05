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
      text2: 'x',
      text3: 'y',
      text4: 'z'
    },
    {
      question: 'Qual oa os tempos',
      text1: 'Ayrton Senna',
      text2: 'x',
      text3: 'y',
      text4: 'a'
    }
  ]