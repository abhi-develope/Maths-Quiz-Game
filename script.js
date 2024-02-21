// Create a math question
// Math question will have a random generated
// question type multipication quetion with random number range 1-10
// answer will we the product of the random number range and the random numb
// user will have to answer question
//on submit answer will we compared with random generated answer
// if answer will be correct than score will be incremented
// if answer will be wrong than score will be decremented


// Generate 4 types of question 
// store the score in local storage and display the score
// Give feedback to user using toast

const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score")
let storedAnswer;
let score = +localStorage.getItem("score");



const randomNumber = (min,max) =>{
    return Math.floor(Math.random()*(max-min+1) + min);
};

const generateQuestion = () =>{
    const randomNumber1 = randomNumber(1,10);
    const randomNumber2 = randomNumber(1,10);
    const questionType = randomNumber(1,4);
    let question;
    let answer;
    // const question = `Q. what is ${randomNumber1} multiply by ${randomNumber2} ?`
    // const answer = randomNumber1 * randomNumber2;
    switch(questionType){
        case 1:
        question = `Q. what is ${randomNumber1} multiply by ${randomNumber2} ?`;
        answer = randomNumber1*randomNumber2;
        break;
        case 2:
        question = `Q. what is ${randomNumber1} divided by ${randomNumber2} ?`;
        answer = randomNumber1/randomNumber2;
        break;
        case 3:
        question = `Q. what is ${randomNumber1} minus ${randomNumber2} ?`;
        answer = randomNumber1-randomNumber2;
        break;
        case 4:
        question = `Q. what is ${randomNumber1} add to ${randomNumber2} ?`;
        answer = randomNumber1+randomNumber2;
        break;
        default:
        question = `Q. what is ${randomNumber1} add to ${randomNumber2} ?`;
        answer = randomNumber1+randomNumber2;
        break;
        
    }

    return {question, answer};
} 

const showQuestion = () =>{
    const {question, answer} = generateQuestion();
    questionEl.innerText = question;
    scoreEl.innerText = score;
    storedAnswer = answer;
}
showQuestion();

const checkAnswer = (event) =>{
    event.preventDefault();
    const formData = new FormData(questionFormEl);

    const userAnswer = +formData.get("answer");

    console.log("answer", userAnswer);
    if(userAnswer === storedAnswer){
        score += 1;

    }else{
        score -=1;
    }
    scoreEl.innerText = score;
    localStorage.setItem("score",score);
    event.target.reset();
    showQuestion();
    
}

