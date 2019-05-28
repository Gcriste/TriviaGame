$(document).ready(function() {
   var time = 10;
   var intervalId;
    var question ="";
 var correctAnswer=0;
 var wrongAnswer=0;

var maininfo;


    $("#startButton").on("click", function(){
        $("#startButton").toggle();
        $("#mainsection").toggle();
        loadQuestion();
        run();
});





   


function run(){
    clearInterval(intervalId);
    time = 20;
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
        
       
        $(".main").append(question +"<br>")
        for (var j=0; j< maininfo[i].answers.length;j++){
         $(".main").append("<input type ='radio'  name='question-"+i+"'  value='"+maininfo[i].answers[j]+"'>"  +maininfo[i].answers[j]+"<br>")
        }
        
     
      
    }

    checkAnswer();
}
function checkAnswer(){
   
   

    $("input[name='question-0']:checked"),function(){
        if($(this).val()==maininfo[0].correctGuess){
            correctAnswer++;
            console.log(correctAnswer)
        }
        else {
            wrongAnswer++;
            console.log(wrongAnswer)
        };
      };

    $.each($("input[name='question-1']:checked"),function(){
        if($(this).val()==maininfo[1].correctGuess){
            correctAnswer++;
        }
        else {
            wrongAnswer++;
        };
      });

    $.each($("input[name='question-2']:checked"),function(){
      if($(this).val()==maininfo[2].correctGuess){
          correctAnswer++;
          console.log(correctAnswer)
      }
      else {
          wrongAnswer++;
          console.log(wrongAnswer)
      };
    });

    $.each($("input[name='question-3']:checked"),function(){
        if($(this).val()==maininfo[3].correctGuess){
            correctAnswer++;
        }
        else {
            wrongAnswer++;
        };
      });

     $.each($("input[name='question-4']:checked"),function(){
        if($(this).val()==maininfo[4].correctGuess){
            correctAnswer++;
        }
        else {
            wrongAnswer++;
        };
      });

      $.each($("input[name='question-5']:checked"),function(){
        if($(this).val()==maininfo[5].correctGuess){
            correctAnswer++;
        }
        else {
            wrongAnswer++;
        }
      });
    

}




function gameOver(){
    clearInterval(intervalId);
    $(".main").remove();
    $("#final-correct").text("Correct answers: " + correctAnswer);
    $("#final-wrong").text("Incorrect answers: " + wrongAnswer);
    
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


