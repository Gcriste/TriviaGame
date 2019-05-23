$(document).ready(function() {


    $("#startButton").on("click", function(){
    reset();
  
});






var reset=function(){

    $("#mainsection").toggle();
    $("#startButton").toggle();
    
    console.log("hello")
    question1();
};



var questions = [{
    question: "Who wrote Stairway to Heaven?",
    answers: ["Black Sabbath", "Pink Floyd", "Led Zeppelin", "The Beatles"],
    correctGuess: "Led Zeppelin",
    gif:fj,
}, {
    question: "Who was the bassist for the Beatles",
    answers: ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"],
    correctGuess: "Paul McCartney",
    gif:afj,
},{
    question: "Which of these songs is NOT a Pink FLoyd song?",
    answers:["Money", "Wish You were Here", "Time", "Light My Fire"],
    correctGuess: "Light My Fire",
    gif: asoidjoi

},{
    question: "Which of these famous musicians is still alive?",
    answers: ["Jimi Hendrix", "Robert Plant", "Bob Marley", "Marvin Gaye"],
    correctGuess: "Robert Plant",
    gif:asoigj,
},{
    question: "What instrument did John Bonham play?",
    answers: ["drums", "bass", "guitar", "keys"],
    correctGuess: "drums",
    gif:asodig,

}]


})