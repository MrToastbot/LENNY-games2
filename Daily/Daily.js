document.addEventListener('DOMContentLoaded', function() {
    const answer = "UNDISCLOSED DESIRES";
    const questions = ["This song has more than one word in it", "This top comment on this songs music video is: That bassline crunch", "This songs title is 2 words long", "This song is from the album The ResistancThis songs b-sides is Remixes",  "This song peaked at number 49 in the charts", "This song has a music video", "This country has a population of 4.4 millThis song is from their 5th album", "This song is 3 mins 56 seconds long",  "This songs initials are U.S",  "The first word in the title of this song is Undisclosed"];
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
                statusImage.src = "poster.jpeg"; // Change this image based on correct answer
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
                    statusImage.src = "poster.jpeg"; // Change this image for game over
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
