document.addEventListener('DOMContentLoaded', function() {
    const answer = "BAHRAIN";
    const questions = ["This country is not landlocked", "This country is in the northern hemisphere", "This countrys flag is comprised of 2 colours", "This country is in Asia",  "This countrys national dish is Chicken Machboos", "This countrys langauge is Arabic", "This countrys flad contains the colour white", "This countrys population is 1,701,575",  "This countrys size is 765 km²",  "This countrys capital is Manama"];
    let points = 10;
    let currentQuestionIndex = 0;

    const addGuessForm = document.getElementById('addGuessForm');
    const guessInput = document.getElementById('Guess');
    const resultMessage = document.getElementById('resultMessage');
    const questionElement = document.getElementById('question');
    const pointsElement = document.getElementById('points');
    const statusImage = document.getElementById('statusImage');
    
    // Display the first question
    questionElement.textContent = `Question 1: ${questions[currentQuestionIndex]}`;

    addGuessForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const guess = guessInput.value;

        if (points > 0 && currentQuestionIndex < questions.length) {
            if (guess.toUpperCase() === answer) {
                resultMessage.textContent = "Correct! Well done. You got " + points +" points. New game available whenever I can be asked to make it.";
                statusImage.src = "poster.jpg"; // Change this image based on correct answer
            } else {
                resultMessage.textContent = "Incorrect";
                points -= 1;

                // Move to the next question
                currentQuestionIndex += 1;

                // Check if there are more questions
                if (currentQuestionIndex < questions.length) {
                    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex]}`;
                    pointsElement.textContent = `Points: ${points}`;
                }

                if (points === 0) {
                    resultMessage.textContent = "Game Over! The answer was " + answer + ". New game available whenever I can be asked to make it";
                    statusImage.src = "poster.jpg"; // Change this image for game over
                }
            }  
        }
    });

    function nextQuestion() {
        // Reset for the next question
        if (currentQuestionIndex < questions.length) {
            questionElement.textContent = `Question: ${questions[currentQuestionIndex]}`;
            pointsElement.textContent = `Points: ${points}`;
            resultMessage.textContent = "";
            guessInput.value = "";
            statusImage.src = "question.png"; // Reset image
        }
    }
});
