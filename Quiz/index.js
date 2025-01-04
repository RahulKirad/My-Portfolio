const quizdata = [
   {
       question: 'Which Framework is related to JS?',
       a: '.NET',
       b: 'Laravel',
       c: 'Django',
       d: 'React',
       correct: 'd'
   },
   {
       question: 'Which is not a programming language?',
       a: 'HTML',
       b: 'Python',
       c: 'Java',
       d: 'React',
       correct: 'a'
   },
   {
       question: 'Which is not a framework?',
       a: 'JavaScript',
       b: 'Angular',
       c: 'Django',
       d: 'React',
       correct: 'a'
   },
   {
       question: 'CSS stands for:',
       a: 'Cascading Sheet Style',
       b: 'Cascading Style Sheets',
       c: 'Casa Style Sheets',
       d: 'Caution Style Sheets',
       correct: 'b'
   }
];

let currentQuestion = 0;
let quizScore = 0;

const questionEl = document.getElementById('question');
const answers = document.querySelectorAll('.answer');
const option_a = document.getElementById('a_value');
const option_b = document.getElementById('b_value');
const option_c = document.getElementById('c_value');
const option_d = document.getElementById('d_value');
const submitBtn = document.getElementById('submit');



function loadQuiz() {
   deselectAnswers();
   const currentQuiz = quizdata[currentQuestion];
   questionEl.innerText = currentQuiz.question;
   option_a.innerText = currentQuiz.a;
   option_b.innerText = currentQuiz.b;
   option_c.innerText = currentQuiz.c;
   option_d.innerText = currentQuiz.d;
}

function deselectAnswers() {
   answers.forEach(answer => (answer.checked = false));
}

function getSelected() {
   let selectedAnswer;
   answers.forEach(answer => {
       if (answer.checked) {
           selectedAnswer = answer.id;
       }
   });
   return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
   const selectedAnswer = getSelected();
   if (selectedAnswer) {
       if (selectedAnswer === quizdata[currentQuestion].correct) {
           quizScore++;
       }
       currentQuestion++;
       if (currentQuestion < quizdata.length) {
           loadQuiz();
       } else {
           document.getElementById('quizdiv').innerHTML = `
               <h2>You scored ${quizScore} out of ${quizdata.length}</h2>
               <button class="btn btn-primary" onclick="location.reload()">Restart</button>
           `;
       }
   }
});

loadQuiz();
