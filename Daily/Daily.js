document.addEventListener('DOMContentLoaded', function() {
    const answer = "PANAMA";
    const questions = ["This country is a constitutional democracy", "This country's biggest export is copper ore", "This country was founded in 1903", "This country's national language is Spanish",  "This country has only qualified for the FIFA world cup once", "This country is located in the northern hemisphere", "This country has a population of 4.4 million", "This country is located in North America",  "This country's flags colours are red, white and blue",  "The name of this country is in it's capital city"];
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
                statusImage.src = "poster.png"; // Change this image based on correct answer
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
                    statusImage.src = "poster.png"; // Change this image for game over
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
