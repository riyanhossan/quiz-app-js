// database
let questionData = [
    {
        question: "What is Australia's tallest bird?",
        answer: [
            {text: 'Cassowary', correct: false},
            {text: 'Kiwi', correct: false},
            {text: 'Ostrich', correct: true},
            {text: 'Emu', correct: false}
        ]
    },
    {
        question: "Darwin finches refers to a group of -",
        answer: [
            {text: 'Fishes', correct: false},
            {text: 'Lizards', correct: false},
            {text: 'Birds', correct: true},
            {text: 'Snake', correct: false}
        ]
    },
    {
        question: "Which amongst the following is the largest mammal?",
        answer: [
            {text: 'Elelphant', correct: false},
            {text: 'Whale', correct: true},
            {text: 'Dinosaur', correct: false},
            {text: 'Rhinoceros', correct: false}
        ]
    },
    {
        question: "Which of the following are warm-blooded animals?",
        answer: [
            {text: 'Whales', correct: true},
            {text: 'Whales sharks', correct: false},
            {text: 'Turtles', correct: false},
            {text: 'Octopuses', correct: false}
        ]
    }
]

console.log(questionData);
// code

let containerHtml = document.querySelector('.container');
let questionCardHtml = document.querySelector('.question_card');
let answerHtml = document.querySelectorAll('.answer');
let questionHtml = document.querySelector('.question');
let startHtml = document.querySelector('.start');
let scoreHtml = document.querySelector('.score');
let scoreDisplay = document.querySelector('.score_display');

let qnsNo = 1;
let score = 0;
let clickCunt = 1;

function Container(e){
    let target =e.target
    // console.log(target);
    // Render card
    function renderCard(qnsNo){
        questionHtml.innerHTML = questionData[qnsNo].question;
        answerHtml.forEach(
            function(element, index){
                element.innerHTML = questionData[qnsNo].answer[index].text;               
            }
        )
    }

    // Render answer
    function renderAnswer(qnsNo){
        
        answerHtml.forEach(
            function(element, index){
                if( target.innerHTML === element.innerHTML){
                    
                    if(questionData[qnsNo - 1].answer[index].correct){
                        score++;
                        return element.style.backgroundColor = "green";
                    }
                    else{
                        element.style.backgroundColor = "red";
                    }
                }
                else if(questionData[qnsNo -1].answer[index].correct){
                    
                        return element.style.backgroundColor = "green";
                    
                }
                element.style.cursor = 'not-allowed';
            })
    }

    // Remove Attributes
    function removeAttr(){
        answerHtml.forEach(
            function(element){
                element.removeAttribute('style');
            }
        )
    }









    if(target.matches('.start_btn')){
        function renderQuestion(){
            startHtml.style.display = 'none';
            questionCardHtml.style.display = 'flex';
        }
        renderQuestion();
        renderCard(0);
    }
    
    else if(target.matches('.next_btn')){
        if (qnsNo < questionData.length){
            renderCard(qnsNo);
            removeAttr();
            clickCunt = 1;
            qnsNo ++;
            console.log(qnsNo);
        }else{
            qnsNo = 1;
            scoreDisplay.innerHTML = `Your Score - ${score}`;
            scoreHtml.style.display = 'block';
            questionCardHtml.style.display = 'none';
            removeAttr();
        }
    }

    else if(target.matches('.answer')){
        console.log(clickCunt);
        if(clickCunt === 1){
            renderAnswer(qnsNo);
        }
        clickCunt ++;
    }

    else if(target.matches('.end_btn')){
        clickCunt = 1;
        startHtml.style.display = 'block';
        scoreHtml.style.display = 'none';
    }
        
        
        
        
}


containerHtml.addEventListener('click', Container);