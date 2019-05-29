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





   


function run(){
    clearInterval(intervalId);
    time = 60;
    intervalId = setInterval (decrement,1000);
    $(".time-remaining").text(time)

    
    }


function decrement(){
    time--;
    $("#time-remaining").text("Time Remaining: " + time)
    if (time === 0) {
        timeOut();
    }
}

function timeOut(){
    $(".main").text("You are out of time!")
    console.log("youre out of time")
    clearInterval(intervalId)
    gameOver();

}







function loadQuestion(){

    for (var i =0; i < maininfo.length ;i++){
        question  = maininfo[i].question;
        
       
        $(".main").append("<hr>" + question +"<br>" )
        for (var j=0; j< maininfo[i].answers.length;j++){
         $(".main").append("<input type ='radio'  name='question-"+i+"'  value='"+maininfo[i].answers[j]+"'>"  +maininfo[i].answers[j]+ "<br>")
        }
        
     
      
    }

    checkAnswer();
}
function checkAnswer(){
   
   

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

        console.log(wrongBank)
    };
  });

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
    console.log(correctAnswer)
    console.log(wrongAnswer)

}

$("#done").on("click", function(){
    
    gameOver();
})

var maininfo = [{
    question: "Who wrote Stairway to Heaven?",
    answers: ["Black Sabbath", "Pink Floyd", "Led Zeppelin", "The Beatles"],
    correctGuess: "Led Zeppelin",
    gif:"fi"
}, {
    question: "Who was the bassist for the Beatles?",
    answers: ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"],
    correctGuess: "Paul McCartney",
    gif:"hiaog"
},{
    question: "Which of these songs is NOT a Pink Floyd song?",
    answers:["Money", "Wish You were Here", "Time", "Light My Fire"],
    correctGuess: "Light My Fire",
    gif: "asoijdogid"
},{
    question: "Which of these famous musicians is still alive?",
    answers: ["Jimi Hendrix", "Robert Plant", "Bob Marley", "Marvin Gaye"],
    correctGuess: "Robert Plant",
    gif:"asgjo"
},{
    question: "What instrument did John Bonham play?",
    answers: ["Drums", "Bass", "Guitar", "Keys"],
    correctGuess: "Drums",
    gif:"sag"
},{
    question: "What band was Jerry Garcia the lead singer of?",
    answers: ["The Rolling Stones", "The Doors", "Metallica", "The Grateful Dead"],
    correctGuess: "The Grateful Dead",
    gif:"sag"
},{
    question: "Who was famous for breaking up the Beatles?",
    answers: ["Stevie Nicks", "Yoko Ono", "Courtney Love", "Janis Joplin"],
    correctGuess: "Yoko Ono",
    gif:"sag"
},{
    question: "Who was the keyboardist for the Doors?",
    answers: ["They didn't have one", "Rick Wakeman", "Ray Manzarek", "Elton John"],
    correctGuess: "Ray Manzarek",
    gif:"sag"
},{
    question: "Who is the lead singer of Aerosmith?",
    answers: ["Freddie Mercury", "Steven Tyler", "Axl Rose", "David Lee Roth"],
    correctGuess: "Steven Tyler",
    gif:"sag"
   
},{
    question: "Which band was previously known as My Backyard?",
    answers: ["Lynyrd Skynyrd", "Van Halen", "The Who", "Queen"],
    correctGuess: "Lynyrd Skynyrd",
    gif:"sag"


}];







});


