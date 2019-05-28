$(document).ready(function() {
   var time = 10;
   var intervalId;
    var question ="";
 

var maininfo;
    $("#startButton").on("click", function(){
    reset();
  loadQuestion();
});




    function reset(){

    $("#mainsection").toggle();
    $("#startButton").toggle();
    question1();
    console.log("hello")
 
};

function clearQuestion(){
   $(".answer1").text("");
   $(".answer2").text("");
   $(".answer3").text("");
   $(".answer4").text("");
   
 
}

function run(){
    clearInterval(intervalId);
    time = 10;
    intervalId = setInterval (decrement,1000);
    
    }

function stop(){
    clearInterval(intervalId);
    setTimeout(question2, 1000*5);

}

function timeOut(){
    $("#out-of-time").text("You're Out of Time!")
   stop();
    
    clearInterval(intervalId)
}


function decrement(){
    time--;
    $("#time-remaining").text("Time Remaining: " + time)
    if (time === 0) {
        timeOut();
    }
}






function question1(){

     var loadQuestion=maininfo[0].question;
     $(".question").text(loadQuestion);
    
    $(".answer1").text(maininfo[0].answers[0]);
    $(".answer2").text(maininfo[0].answers[1]);
    $(".answer3").text(maininfo[0].answers[2]);
    $(".answer4").text(maininfo[0].answers[3]);

    $(".answer1").on("click", wrong1);
    $(".answer2").on("click", wrong1);
    $(".answer3").on("click", correct1);
    $(".answer4").on("click", wrong1);
    run();
}



function correct1(){
    clearQuestion();
    $(".question").text("Correct");
    $(".correct-answer").text ("The Correct Answer was: "+ maininfo[0].correctGuess);
    stop();

}

function wrong1(){
    clearQuestion();
    $(".question").text("WRONG ANSWER!");
    $(".correct-answer").text ("The Correct Answer was: "+ maininfo[0].correctGuess);
    stop();
    
}


function question2(){
    
    var loadQuestion=maininfo[1].question;
    $(".question").text(loadQuestion);
    $(".correct-answer").text("")

   $(".answer1").text(maininfo[1].answers[0]);
   $(".answer2").text(maininfo[1].answers[1]);
   $(".answer3").text(maininfo[1].answers[2]);
   $(".answer4").text(maininfo[1].answers[3]);

   $(".answer1").on("click", wrong2);
   $(".answer2").on("click", correct2);
   $(".answer3").on("click", wrong2);
   $(".answer4").on("click", wrong2);
    run();
}

function correct2(){
    clearQuestion();
    $(".question").text("Correct!");
    $(".correct-answer").text ("The Correct Answer was: "+ maininfo[1].correctGuess)
    stop();
}


function wrong2(){
    clearQuestion();
    $(".question").text("WRONG ANSWER!")
    $(".correct-answer").text ("The Correct Answer was: "+ maininfo[1].correctGuess)
    stop();
}


function loadQuestion(){

    for (var i =0; i < maininfo.length ;i++){
        question  = maininfo[i].question;
        answer=maininfo[i].answers;
        correctGuess = maininfo[i].correctGuess;
        gif=maininfo[i].gif;
        $(".question").text(question)
        $(".answer1").text(answer)

        console.log(question)
       console.log(answer)
    }
}





var maininfo = [{
    question: "Who wrote Stairway to Heaven?",
    answers: ["Black Sabbath", "Pink Floyd", "Led Zeppelin", "The Beatles"],
    correctGuess: "Led Zeppelin",
    gif:"fi"
}, {
    question: "Who was the bassist for the Beatles",
    answers: ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"],
    correctGuess: "Paul McCartney",
    gif:"hiaog"
},{
    question: "Which of these songs is NOT a Pink FLoyd song?",
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
    answers: ["drums", "bass", "guitar", "keys"],
    correctGuess: "drums",
    gif:"sag"

}];







});


