$(document).ready(function() {
   var time = 10;
   var intervalId;
    var question ="";
 var correctAnswer=0;
 var wrongAnswer=0;
var correct = "";
var correctBank = [];
var wrong= "";
var wrongBank = [];
var maininfo;


//start button function- game starts, button is hidden

    $("#startButton").on("click", function(){
        $("#startButton").toggle();
        $("#mainsection").toggle();
        $(".total-correct").toggle();
        $(".total-incorrect").toggle();
        $(".unanswered-questions").toggle();
        $(".start").toggle();
        loadQuestion();
        run();

});





   

//timer funciton begins when start button is clicked
function run(){
    clearInterval(intervalId);
    time = 60;
    intervalId = setInterval (decrement,1000);
    $(".time-remaining").text(time)
}

//timer decrements each second and is displayed
function decrement(){
    time--;
    $("#time-remaining").text("Time Remaining: " + time)
    if (time === 0) {
        timeOut();
    }
}

//if time is 0 (from above) timeOut function is ran and game is over
function timeOut(){
    $(".main").text("You are out of time!")
    console.log("youre out of time")
    clearInterval(intervalId)
    gameOver();

}






//loads all questions and answers and stores them in "main" class
function loadQuestion(){
    //loops through the questions and generates them in order
    for (var i =0; i < maininfo.length ;i++){
        question  = maininfo[i].question;
        $(".main").append("<hr>" + question +"<br>" )

        //loops through questions and generates answer- answer is given a value and name used later
        for (var j=0; j< maininfo[i].answers.length;j++){
         $(".main").append("<input type ='radio'  name='question-"+i+"'  value='"+maininfo[i].answers[j]+"'>"  +maininfo[i].answers[j]+ "<br>")
        }  
    }
    checkAnswer();

}


function checkAnswer(){

    //when an answer is clicked if the answer is correct we run the correctAnswer function, if not we run the wrongAnswer function
    //could not get correctAnswer and wrongAnswer function to work so just added the number of correct anwers and wronganswers to an array that we will print later
    $("body").on("click", "input[name='question-0']", function(){
        console.log($(this).val());
    if($(this).val()==maininfo[0].correctGuess){
        correctAnswer++;
        correct = $(this).val() ;
        correctBank.push(correct)
        
    }
    else {
        wrongAnswer++;
        wrong = $(this).val();
        wrongBank.push(wrong)

    };
  });

  // question 2
  $("body").on("click", "input[name='question-1']", function(){
    console.log($(this).val());
if($(this).val()==maininfo[1].correctGuess){
    correctAnswer++;
    correct = $(this).val() ;
        correctBank.push(correct)
}
else {
    wrongAnswer++;
    wrong = $(this).val();
    wrongBank.push(wrong)
};
});

//question 3
$("body").on("click", "input[name='question-2']", function(){
    console.log($(this).val());
if($(this).val()==maininfo[2].correctGuess){
    correctAnswer++;
    correct = $(this).val() ;
    correctBank.push(correct)
}
else {
    wrongAnswer++;
    wrong = $(this).val();
    wrongBank.push(wrong)
};
});

//question 4

$("body").on("click", "input[name='question-3']", function(){
    console.log($(this).val());
if($(this).val()==maininfo[3].correctGuess){
    correctAnswer++;
    correct = $(this).val() ;
        correctBank.push(correct)
}
else {
    wrongAnswer++;
    wrong = $(this).val();
    wrongBank.push(wrong)
};
});

//question 5
$("body").on("click", "input[name='question-4']", function(){
    console.log($(this).val());
if($(this).val()==maininfo[4].correctGuess){
    correctAnswer++;
    correct = $(this).val() ;
    correctBank.push(correct)
}
else {
    wrongAnswer++;
    wrong = $(this).val();
    wrongBank.push(wrong)
};
});

//question 6
$("body").on("click", "input[name='question-5']", function(){
    console.log($(this).val());
if($(this).val()==maininfo[5].correctGuess){
    correctAnswer++;
    correct = $(this).val() ;
        correctBank.push(correct)
}
else {
    wrongAnswer++;
    wrong = $(this).val();
    wrongBank.push(wrong)
};
});

//question 7
$("body").on("click", "input[name='question-6']", function(){
    console.log($(this).val());
if($(this).val()==maininfo[6].correctGuess){
    correctAnswer++;
    correct = $(this).val() ;
    correctBank.push(correct)
}
else {
    wrongAnswer++;
    wrong = $(this).val();
    wrongBank.push(wrong)
};
});

//question 8
$("body").on("click", "input[name='question-7']", function(){
    console.log($(this).val());
if($(this).val()==maininfo[7].correctGuess){
    correctAnswer++;
    correct = $(this).val() ;
        correctBank.push(correct)
}
else {
    wrongAnswer++;
    wrong = $(this).val();
    wrongBank.push(wrong)
};
});

//question 9
$("body").on("click", "input[name='question-8']", function(){
    console.log($(this).val());
if($(this).val()==maininfo[8].correctGuess){
    correctAnswer++;
    correct = $(this).val() ;
        correctBank.push(correct)
}
else {
    wrongAnswer++;
    wrong = $(this).val();
    wrongBank.push(wrong)
};
});

//question 10
$("body").on("click", "input[name='question-9']", function(){
    console.log($(this).val());
if($(this).val()==maininfo[9].correctGuess){
    correctAnswer++;
    correct = $(this).val() ;
        correctBank.push(correct)
}
else {
    wrongAnswer++;
    wrong = $(this).val();
    wrongBank.push(wrong)
};
});
}

//when done button is clicked gameOver function runs
$("#done").on("click", function(){
    
    gameOver();
})


//if time is up or done button is clicked gameOver function runs
//it displays the score as well as how many correct and incorrect answers and unanswerd questions
//it displays what the correct and incorrect answers are
//it hides all the questions
//it stops the timer

function gameOver(){
    clearInterval(intervalId);
    $("html").scrollTop(0);
    $(".main").remove();
    $("#done").remove();
    $(".total-correct").toggle();
    $(".total-incorrect").toggle();
    $(".unanswered-questions").toggle();
    $("#header").text("Game Over! Your score: "+ ((correctAnswer)/(maininfo.length)*100) + "%" );
    $("#head2").text("");
    $("#final-correct").append(correctAnswer + "/"+ maininfo.length+ "<br>"+ "Correct answers: " + correctBank + "<br>" + "<br>");
    $("#final-wrong").append(wrongAnswer + "/"+ maininfo.length + "<br>" + "Incorrect answers: " + wrongBank+ "<br>" + "<br>") ;
    $("#unanswered").text ((maininfo.length-(correctAnswer+wrongAnswer))+ "/" + maininfo.length)
    $("img").remove();
   

}


//objects stored in an array for the questions, possible answers and correct answer
var maininfo = [{
    question: "Who wrote Stairway to Heaven?",
    answers: ["Black Sabbath", "Pink Floyd", "Led Zeppelin", "The Beatles"],
    correctGuess: "Led Zeppelin"
   
}, {
    question: "Who was the bassist for the Beatles?",
    answers: ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"],
    correctGuess: "Paul McCartney"
   
},{
    question: "Which of these songs is NOT a Pink Floyd song?",
    answers:["Money", "Wish You were Here", "Time", "Light My Fire"],
    correctGuess: "Light My Fire"
   
},{
    question: "Which of these famous musicians is still alive?",
    answers: ["Jimi Hendrix", "Robert Plant", "Bob Marley", "Marvin Gaye"],
    correctGuess: "Robert Plant"
   
},{
    question: "What instrument did John Bonham play?",
    answers: ["Drums", "Bass", "Guitar", "Keys"],
    correctGuess: "Drums"
 
},{
    question: "What band was Jerry Garcia the lead singer of?",
    answers: ["The Rolling Stones", "The Doors", "Metallica", "The Grateful Dead"],
    correctGuess: "The Grateful Dead"

},{
    question: "Who was famous for breaking up the Beatles?",
    answers: ["Stevie Nicks", "Yoko Ono", "Courtney Love", "Janis Joplin"],
    correctGuess: "Yoko Ono"
    
},{
    question: "Who was the keyboardist for the Doors?",
    answers: ["They didn't have one", "Rick Wakeman", "Ray Manzarek", "Elton John"],
    correctGuess: "Ray Manzarek"
  
},{
    question: "Who is the lead singer of Aerosmith?",
    answers: ["Freddie Mercury", "Steven Tyler", "Axl Rose", "David Lee Roth"],
    correctGuess: "Steven Tyler"
   
},{
    question: "Which band was previously known as My Backyard?",
    answers: ["Lynyrd Skynyrd", "Van Halen", "The Who", "Queen"],
    correctGuess: "Lynyrd Skynyrd"

}];







});


