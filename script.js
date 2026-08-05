let questions = [
{
    question:"What is DBMS?",
    options:["Database","Language","OS"],
    answer:"Database"
},

{
    question:"Which language is used for web development?",
    options:["HTML","C","Java"],
    answer:"HTML"
},

{
    question:"What does CPU stand for?",
    options:["Central Processing Unit","Computer Personal Unit","Control Program Unit"],
    answer:"Central Processing Unit"
}
];
let started = false;

let startButton = document.getElementById("startBtn");

startButton.addEventListener("click", function() {

    if (started == false)
    {
        document.getElementById("message").textContent =
        "🎉 Welcome to StudyMind AI!";

        started = true;
    }
    else
    {
        document.getElementById("message").textContent =
        "😊 You're already started!";
    }

});
let learnButton = document.getElementById("learnBtn");

learnButton.addEventListener("click", function() {

    document.getElementById("features").scrollIntoView();

});

let darkMode = false;

let darkButton = document.getElementById("darkBtn");

darkButton.addEventListener("click", function() {

    if(darkMode == false)
    {
        document.body.classList.toggle("dark");
        darkMode = true;
        darkButton.textContent = "Light Mode";
    }
    else
    {document.body.classList.toggle("dark");

        darkMode = false;
        darkButton.textContent = "Dark Mode";
    }

});
let welcomeButton = document.getElementById("welcomeBtn");

welcomeButton.addEventListener("click", function(){

    let userName = document.getElementById("nameInput").value;

    if(userName == "")
    {
        document.getElementById("welcomeMessage").textContent =
        "Please enter your name 😊";
    }
    else
    {
        document.getElementById("welcomeMessage").textContent =
        "Welcome " + userName + " 🎉 Start learning with StudyMind AI!";
    }

});

let generateButton = document.getElementById("generateBtn");

generateButton.addEventListener("click", function(){

    let topic = document.getElementById("topicInput").value;

    if(topic == "")
    {
        document.getElementById("notesOutput").textContent =
        "Please enter a topic 😊";
    }
    else
    {
        document.getElementById("notesOutput").textContent =
        "📚 Notes for " + topic + ":\n\n" +
        "• Definition of " + topic + "\n" +
        "• Important concepts\n" +
        "• Key points for exams";
    }

});

let quizButton = document.getElementById("quizBtn");


let score = 0;

quizButton.addEventListener("click", function(){
    score = 0;

    let quizTopic = document.getElementById("quizTopic").value;


    let quizOutput = document.getElementById("quizOutput");


    if(quizTopic == "")
    {
        quizOutput.textContent = "Please enter quiz topic 😊";
    }
    else
    {

        quizOutput.innerHTML = "";


       let selectedQuestion;

questions.forEach(function(q){

    if(q.question.toLowerCase().includes(quizTopic.toLowerCase()))
    {
        selectedQuestion = q;
    }

});


if(selectedQuestion == undefined)
{
    quizOutput.textContent = "No quiz available for this topic 😊";
    return;
}


let question = document.createElement("h3");

question.textContent = selectedQuestion.question;

quizOutput.appendChild(question);


       let options = selectedQuestion.options;


        options.forEach(function(option){


            let button = document.createElement("button");


            button.textContent = option;


            button.addEventListener("click", function(){
                if(button.disabled == true)
{
    return;
}

button.disabled = true;
let correctAnswer = selectedQuestion.answer;


if(option == correctAnswer)
{
    score++;

    document.getElementById("scoreOutput").textContent =
    "Score: " + score + "/1 ✅";
}
else
{
    document.getElementById("scoreOutput").textContent =
    "Score: " + score + "/1 ❌";
}


            });


            quizOutput.appendChild(button);


            quizOutput.appendChild(document.createElement("br"));


        });

    }

});