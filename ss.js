const questions = [

    {
        question: "Which function is used to display output in C?",
        options: [
            "scanf()",
            "printf()",
            "print()",
            "display()"
        ],
        answer: 1
    },

    {
        question: "Which function is used to take input from the user in C?",
        options: [
            "input()",
            "get()",
            "scanf()",
            "read()"
        ],
        answer: 2
    },

    {
        question: "Which symbol is used to end a statement in C?",
        options: [
            ":",
            ";",
            ".",
            ","
        ],
        answer: 1
    },

    {
        question: "Which header file is commonly used for printf() and scanf()?",
        options: [
            "stdlib.h",
            "string.h",
            "math.h",
            "stdio.h"
        ],
        answer: 3
    },

    {
        question: "Which data type is used to store an integer?",
        options: [
            "float",
            "char",
            "int",
            "double"
        ],
        answer: 2
    },

    {
        question: "Which data type is used to store a single character?",
        options: [
            "char",
            "int",
            "float",
            "string"
        ],
        answer: 0
    },

    {
        question: "Which format specifier is used for an integer in printf()?",
        options: [
            "%f",
            "%c",
            "%d",
            "%s"
        ],
        answer: 2
    },

    {
        question: "Which format specifier is used for a float?",
        options: [
            "%d",
            "%f",
            "%c",
            "%s"
        ],
        answer: 1
    },

    {
        question: "Which operator is used for assignment?",
        options: [
            "==",
            "=",
            "!=",
            ">="
        ],
        answer: 1
    },

    {
        question: "Which operator is used to compare two values for equality?",
        options: [
            "=",
            "==",
            "!=",
            "<="
        ],
        answer: 1
    },

    {
        question: "Which statement is used to make a decision in C?",
        options: [
            "if",
            "for",
            "continue",
            "break"
        ],
        answer: 0
    },

    {
        question: "Which statement is used when there are multiple choices?",
        options: [
            "if",
            "switch",
            "while",
            "goto"
        ],
        answer: 1
    },

    {
        question: "Which keyword is used to exit from a loop?",
        options: [
            "stop",
            "exit",
            "break",
            "end"
        ],
        answer: 2
    },

    {
        question: "Which keyword skips the current iteration of a loop?",
        options: [
            "skip",
            "continue",
            "break",
            "pass"
        ],
        answer: 1
    },

    {
        question: "Which loop is guaranteed to execute at least once?",
        options: [
            "for",
            "while",
            "do-while",
            "nested for"
        ],
        answer: 2
    },

    {
        question: "Which loop is commonly used when the number of iterations is known?",
        options: [
            "for",
            "while",
            "do-while",
            "switch"
        ],
        answer: 0
    },

    {
        question: "What is the first index of an array in C?",
        options: [
            "0",
            "1",
            "-1",
            "2"
        ],
        answer: 0
    },

    {
        question: "Which symbol is used to access the address of a variable?",
        options: [
            "*",
            "&",
            "#",
            "%"
        ],
        answer: 1
    },

    {
        question: "Which symbol is used to declare a pointer?",
        options: [
            "&",
            "*",
            "#",
            "@"
        ],
        answer: 1
    },

    {
        question: "Which keyword is used to return a value from a function?",
        options: [
            "send",
            "return",
            "output",
            "value"
        ],
        answer: 1
    },

    {
        question: "Which keyword is used to define a structure in C?",
        options: [
            "class",
            "object",
            "struct",
            "record"
        ],
        answer: 2
    },

    {
        question: "Which of the following is a valid variable name?",
        options: [
            "2value",
            "my-value",
            "my_value",
            "float"
        ],
        answer: 2
    },

    {
        question: "Which operator gives the remainder after division?",
        options: [
            "/",
            "//",
            "%",
            "*"
        ],
        answer: 2
    },

    {
        question: "What is the result of 10 % 3?",
        options: [
            "1",
            "2",
            "3",
            "0"
        ],
        answer: 0
    },

    {
        question: "Which operator is called the logical AND operator?",
        options: [
            "||",
            "&&",
            "!",
            "&"
        ],
        answer: 1
    },

    {
        question: "Which operator is called the logical OR operator?",
        options: [
            "&&",
            "||",
            "!",
            "|"
        ],
        answer: 1
    },

    {
        question: "Which operator is used for logical NOT?",
        options: [
            "!",
            "!=",
            "~",
            "not"
        ],
        answer: 0
    },

    {
        question: "What is structured programming mainly based on?",
        options: [
            "Random jumps",
            "Functions and control structures",
            "Only pointers",
            "Only arrays"
        ],
        answer: 1
    },

    {
        question: "Which of these is a selection control structure?",
        options: [
            "if-else",
            "for",
            "while",
            "do-while"
        ],
        answer: 0
    },

    {
        question: "Which of these is a looping control structure?",
        options: [
            "if",
            "switch",
            "for",
            "return"
        ],
        answer: 2
    }

];


let currentQuestion = 0;

let score = 0;


const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const nextButton =
    document.getElementById("next-btn");

const questionNumber =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const feedbackElement =
    document.getElementById("feedback");

const progressBar =
    document.getElementById("progress-bar");


function showQuestion() {

    const current = questions[currentQuestion];

    questionElement.textContent =
        current.question;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreElement.textContent =
        `Score: ${score}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    optionsElement.innerHTML = "";

    feedbackElement.textContent = "";

    nextButton.disabled = true;


    current.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.classList.add("option");

        button.textContent =
            `${String.fromCharCode(65 + index)}) ${option}`;

        button.addEventListener("click", () => {

            checkAnswer(button, index);

        });

        optionsElement.appendChild(button);

    });

}


function checkAnswer(selectedButton, selectedIndex) {

    const correctAnswer =
        questions[currentQuestion].answer;

    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(button => {

        button.disabled = true;

    });


    if (selectedIndex === correctAnswer) {

        selectedButton.classList.add("correct");

        feedbackElement.textContent =
            "✓ Correct Answer!";

        feedbackElement.style.color =
            "#28a745";

        score++;

        scoreElement.textContent =
            `Score: ${score}`;

    }

    else {

        selectedButton.classList.add("wrong");

        allOptions[correctAnswer]
            .classList.add("correct");

        feedbackElement.textContent =
            "✗ Wrong Answer!";

        feedbackElement.style.color =
            "#dc3545";

    }


    nextButton.disabled = false;

}


nextButton.addEventListener("click", () => {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        showResult();

    }

});


function showResult() {

    const percentage =
        Math.round((score / questions.length) * 100);


    let message;


    if (percentage >= 90) {

        message = "Excellent! 🔥";

    }

    else if (percentage >= 75) {

        message = "Very Good! 👏";

    }

    else if (percentage >= 50) {

        message = "Good! Keep Practicing ";

    }

    else {

        message = "Keep Learning! ";

    }


    document.querySelector(".quiz-container").innerHTML = `

        <div class="result">

            <h1>Quiz Completed 🎉</h1>

            <h2>${message}</h2>

            <div class="final-score">
                ${score}/${questions.length}
            </div>

            <p>
                You scored ${percentage}%
            </p>

            <button
                class="restart-btn"
                onclick="location.reload()">

                Restart Quiz

            </button>

        </div>

    `;

}


showQuestion();