const quizContainer = document.getElementById('quiz');
const startBtn = document.getElementById('start-btn');
const resultadofinal = document.getElementById('resultado-final')
const endBtn = document.getElementById('end')
const nextBtn = document.getElementById('next-bt')
const pergunta = document.getElementById('questao')
const resposta1 = document.getElementById('1')
const resposta2 = document.getElementById('2')
const resposta3= document.getElementById('3')
const resposta4 = document.getElementById('4')
const respostas = document.getElementsByClassName('resposta')


let questoesAleatorias, questaoAtual
let acertos = 0;



startBtn.addEventListener('click', comecarQuiz);
nextBtn.addEventListener('click', () => {
    questaoAtual++
    if(questaoAtual != 9)
        setarProxQuestao()
    else{
        endBtn.classList.remove('hide')
        endBtn.classList.add('next-btn')
        endBtn.addEventListener('click', () => {
            quizContainer.classList.add('hide')
            resultadofinal.classList.remove('hide')
            resultadofinal.innerText = `Você acertou ${acertos} questões, parabéns!`
        })
    }
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
    let rc = (questao.rc);
    let rctexto = `A resposta correta é a ${rc}`;

    let a = 0;

    resposta1.addEventListener('click', () => {
        a = resposta1.id;
        if(parseInt(a) === rc){
            alert('Você acertou!')
            acertos++
        }
        else{
            alert((rctexto))
        }
        rc = 0;
    })

    resposta2.addEventListener('click', () => {
        a = resposta2.id;
        if(parseInt(a) === rc){
            alert('Você acertou!')
            acertos++
        }
        else{
            alert((rctexto))
        }
        rc = 0;
    })

    resposta3.addEventListener('click', () => {
        a = resposta3.id;
        if(parseInt(a) === rc){
            alert('Você acertou!')
            acertos++
        }
        else{
            alert((rctexto))
        }
        rc = 0;
    })

    resposta4.addEventListener('click', () => {
        a = resposta4.id;
        if(parseInt(a) === rc){
            alert('Você acertou!')
            acertos++
        }
        else{
            alert((rctexto))
        }
        rc = 0;
    })
    
}








const questions = [
    {
        question: 'Qual o maior piloto de todos os tempos',
        text1: '1. Ayrton Senna',
        text2: '2. Alain Prost',
        text3: '3. Lewis Hamilton',
        text4: '4. Michael Schumacher',
        rc: 1
    },
    {
        question: 'Qual dessas curvas não faz parte do GP Brasil',
        text1: '1. Curva do Balão',
        text2: '2. Curva da Balança',
        text3: '3. Laranjinha',
        text4: '4. S do Senna',
        rc: 1
    },
    
    {
        question: 'Qual o maior circuito já utilizado pela F1?',
        text1: '1. Pescara',
        text2: '2. Spa Francorchamps',
        text3: '3. Nurburgring Nordshcleife',
        text4: '4. Monza',
        rc: 1
      
    },
    {
        question: 'Quem venceu o GP de São Paulo em 2021?',  
        text1: '1. Max Verstappen',
        text2: '2. Lewis Hamilton',
        text3: '3. Lando Norris',
        text4: '4. Daniel Ricciardo',
        rc: 2
        
      },
      {
        question: 'Qual piloto foi o campeão mundial em 2021?',
        text1: '1. Sergio Perez',
        text2: '2. Charles LeClerc',
        text3: '3. Max Verstappen',
        text4: '4. Lewis Hamilton',
        rc: 3
        
      },
      {
        question: 'Quantos títulos tem os maiores campeões da Formula 1?',
        
        text1: '1. 9',
        text2: '2. 8',
        text3: '3. 6',
        text4: '4. 7',
        rc: 4
      },
      {
        question: 'Em qual equipe Rubinho correu ao lado de Michael Schumacher?',
        text1: '1. Mclaren',
        text2: '2. Williams',
        text3: '3. Mercedes',
        text4: '4. Ferrari',
        rc: 4
        
      },
      {
        question: 'Com qual equipe Vettel foi tricampeão?',
        text1: '1. Toro Rosso',
        text2: '2. Red Bull',
        text3: '3. Aston Martin',
        text4: '4. Ferrari',
        rc: 2
      },
      {
        question: 'Quantos carros tem no Grid?',
        text1: '1. 22',
        text2: '2. 18',
        text3: '3. 20',
        text4: '4. 19',
        rc: 3
        
      },
      {
        question: 'Quantos brasileiros já correram na Formula 1?',
        text1: '1. 12', 
        text2: '2. 31',
        text3: '3. 18',
        text4: '4. 24',
        rc: 2
      }
  ]