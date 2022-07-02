
var currentQuestion = 0;
var score = 0;
var timer = 1;
var secondsLeft = 0;


var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont= document.getElementById('result');
var timerDisplay = document.getElementById('timer');


var question = [{

  "question":"How many centimeters in a ruler",
  "option1":"30.48",
  "option2":"20.22",
  "option3":"12",
  "option4":"18.65",
  answer: 1,
},
{
  "question":"What is our national anthem?",
  "option1":"Party In The U.S.A.",
  "option2":"Star Spangled Banner",
  "option3":"Oh, Say Can You See.",
  "option4":"Proud To Be An American!",
  answer:2,
},
{
  "question":"How many football championships has the Univerty of Texas won?",
  "option1":"45",
  "option2":"10",
  "option3":"59",
  "option4":"35",
  answer: 3,
},
{
  "question":"How Many quarts in a gallon?",
  "option1":"2",
  "option2":"3",
  "option3":"5",
  "option4":"4",
  answer:4,
},
]

var totQuestion = question.length;

function loadQuestion (questionIndex){
  var q = question[questionIndex];

questionEl.textContent = (questionIndex + 1) + ' .' + q.question;
opt1.textContent = q.option1;
opt2.textContent = q.option2;
opt3.textContent = q.option3;
opt4.textContent = q.option4;
};

function loadNextQuestion(){
  var selectedOption = document.querySelector('input[type=radio]:checked')
  if(!selectedOption){
    alert('Please select your answer!');
    return;
  }
  var answer = selectedOption.value;
  if (question[currentQuestion].answer == answer){
    score += 25;
  }else
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestion - 1){
      nextButton.textContent = 'Finish';
    }
      if(currentQuestion == totQuestion){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score:' + score;
        return;
      }
      loadQuestion(currentQuestion);
    }
   loadQuestion(currentQuestion);
  
   function gamestarts(){
  
   secondsLeft = 30;
   timerDisplay.textContent = secondsLeft

  var time = setInterval(function(){

    secondsLeft--;
    timerDisplay.textContent = secondsLeft
    if(secondsLeft < 1){
      clearInterval()
    }
  },1000) }
  
  gamestarts();

