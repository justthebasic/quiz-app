//questions 
const quizData = [
    {
        question: 'Melhor presidente:',
        a:'LULA',
        b:'JK',
        c:'BOLSONARO',
        d:'FHC',
        correct:'c'
    }, {
        question: 'Partido menos pior: ',
        a:'PT',
        b:'PDT',
        c:'PL',
        d:'OUTRO',
        correct:'c'
    }, {
        question: 'Partido mais currupto do brasil:',
        a: 'PT',
        b: 'PDT',
        c: 'PL',
        d: 'OUTRO',
        correct: 'a'
    }, {
        question: 'Qual candidato é o mais perigoso economicamente falando:',
        a: 'LULA',
        b: 'CIRO',
        c: 'BOLSONARO',
        d: 'OUTRO',
        correct: 'a'
    }, {
        question: 'Quem tem o plano de governo que apoia menor interferência do estado:',
        a: 'LULA',
        b: 'CIRO',
        c: 'BOLSONARO',
        d: 'OUTRO',
        correct: 'c'
    }
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
            
            <button onclick="location.reload()">Reload</button>`
        }
    }



})