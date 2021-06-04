const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? .";
let correctAnswer="Sally Ride";
let candidateAnswer="";
let questions=["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters?  ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers =["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers=[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('Candidate name:  ');

}

function askQuestion() 
{
  //input.question
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i=0;i<questions.length;i++){
    candidateAnswers[i]=input.question(questions[i])
  }
  /*let ques1='1)Who was the first American woman in space? .'
  questions.push(ques1);
  candidateAnswer = input.question(ques1);
  correctAnswer ='Sally Ride';
   correctAnswers.push(correctAnswer);
   candidateAnswers.push(candidateAnswer);
   console.log("your Answer  :"+candidateAnswer);
   console.log("correct Answer :Sally Ride \n");

   let ques2='2)True or false: 5 kilometer == 5000 meters? .'
   questions.push(ques2);
   candidateAnswer = input.question(ques2);
   correctAnswer ='True';
   correctAnswers.push(correctAnswer);
   candidateAnswers.push(candidateAnswer);
   console.log("your Answer  :"+candidateAnswer);
   console.log("correct Answer : True \n");



  let ques3='3)(5 + 3)/2 * 10 = ? .';
  questions.push(ques3);
   candidateAnswer = input.question(ques3);
   correctAnswer='40';
   correctAnswers.push(correctAnswer);
   candidateAnswers.push(candidateAnswer);
   console.log("your Answer  :"+candidateAnswer);
   console.log("correct Answer :40 \n");


    let ques4="4)Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index? .";
  questions.push(ques4);
   candidateAnswer=input.question( ques4);
   correctAnswer='Trajectory';
   correctAnswers.push(correctAnswer);
   candidateAnswers.push(candidateAnswer);
   console.log("your Answer  :"+candidateAnswer);
   console.log("correct Answer :Trajectory \n");

   let ques5='5)What is the minimum crew size for the ISS? .'
   questions.push(ques5);
   candidateAnswer = input.question(ques5);
   correctAnswer='3';
   correctAnswers.push(correctAnswer);
   candidateAnswers.push(candidateAnswer);
   console.log("your Answer  :"+candidateAnswer);
   console.log("correct Answer :3 \n");

*/


  
    
 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let grade=0;
  let numberOfCorrectAnswers=0;
  let numberOfQuizQuestions=questions.length;
  

 // console.log(correctAnswers);
  //console.log(candidateAnswers)
  for(let i=0;i<questions.length;i++) {
if(correctAnswers[i].toLowerCase()===candidateAnswers[i].toLowerCase())
{
numberOfCorrectAnswers=numberOfCorrectAnswers+1;
//console.log(numberOfCorrectAnswers);
}
}grade=(numberOfCorrectAnswers/numberOfQuizQuestions)*100;

  console.log(`>>> Overall Grade :${grade}% ${numberOfCorrectAnswers} out of${questions.length} are correct`);
  if(grade>40){
    console.log(">>> Status:  PASSED <<<")
  }else{
    console.log(">>> Status :FAILED <<<")
  }

  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello "+candidateName);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};