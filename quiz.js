let score = 0;
let currentQuestionIndex = 0;
 
let questions = [
    {
        question: 'Wie lange existiert schon die Pilatus Flugzeugwerke AG?',
 
        answers: ['seit 1950','seit 1970','seit 1939','seit 1900'],
        correctAnswer: 2
    },
    {
        question: 'Wo ist der Hauptsitz von Pilatus Flugzeugwerke AG?',
       
        answers: ['Stans','USA','Australien','Berlin'],
        correctAnswer: 0
    },
    {
        question: 'Wie viele Flugzeug-typen hat die Pilatus Flugzeugwerke AG?',
 
        answers: ['23','4','10','15'],
        correctAnswer: 3
    },
    {
        question: 'Wie viele Jobs bietet die Pilatus Flugzeugwerke AG an?',
   
        answers: ['16','30','52','46'],
        correctAnswer: 2
    },
    {
        question: 'Wie viele Mitarbeiter hat die Pilatus Flugzeugwerke AG?',
   
        answers: ['ca.500','ca.250','ca.1000','ca.2500'],
        correctAnswer: 3
    },
    {
        question: 'Wie viele lernende hat die Pilatus Flugzeugwerke AG?',
   
        answers: ['400','1300','1700','2000'],
        correctAnswer: 1
    },
    {
        question: 'Was ist das meist geflogene Flugzeug?',
   
        answers: ['PC-12','PC-24','P3','PC-9'],
        correctAnswer: 0
    },
    {
        question: 'In wie vielen Ländern sind Flugzeuge von Pilatus heute im Einsatz?',
   
        answers: ['unter 100','über 250','150','über 120'],
        correctAnswer: 3
    },
    {
        question: 'Was bedeutet das Logo der Pilatus Flugzeugwerke AG?',
   
        answers: ['ein Historisches Flugzeug','die Schweizer Berge','die Zahnradbahn des Pilatus','ein Adler im Flugzeug'],
        correctAnswer: 1
    },
];

function displayQuestion(){
 
    if(currentQuestionIndex >= questions.length){
       
        document.getElementById('quiz-container').hidden = true;
        document.getElementById('result').hidden = false;
        document.getElementById('score').textContent = score;

        return;
    }

    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;
   
    let answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
 
    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.classList.add('btn', 'btn-dark', 'me-2');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkanswer(index);
        answersDiv.appendChild(answerButton);
    });
}
 
displayQuestion();
 
function checkanswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
 
    if(userAnswer == correctAnswer){
        score+= 1;
    }
 
    nextQuestion();
}
 
function nextQuestion(){
    currentQuestionIndex += 1;
    displayQuestion();
}