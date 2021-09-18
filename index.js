const readlineSync = require ('readline-sync');

var username = readlineSync.question("What is your name ? ");

console.log("hey!.." +(username)+" welcome" );
let score = 0
var questionBank = [
   {question: "what is my name ?\n",
   answer: "vinay"},
   {question:"what is my age \n?",
   answer:23},
   {question:"what is fav series\n",
   answer:"Sherlock"},
   {question:"which bike do i have\n",
   answer:"Hornet"},
   {question:"where do i live\n",
   answer:"Bengaluru"}];

   function play(question,answer){
     var userAnswer = readlineSync.question(question);
     if(userAnswer === answer){
           console.log("Right!..")
           score += 1;
     }
     else{
       console.log("worng");
     }
     console.log("Current score: ", score);
     console.log("******************");
   }


   for( var i = 0 ; i< questionBank.length; i++){
     var currentQuestion = questionBank[i];
     play(currentQuestion.question, currentQuestion.answer);
   }

   console.log("your score is ", score);

   var highScore = [
     {
     name:"vinay",
     score1:5
     },
     {
     name:"vijay",
     score1:2
     }]

     for(var j = 0 ; j<highScore.length ; j++){
       var currentHigh = highScore[j];
       console.log(currentHigh.name);
       console.log(currentHigh.score1);
     }
        
