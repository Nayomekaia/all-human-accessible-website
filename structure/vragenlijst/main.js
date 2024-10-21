let currentQuestion = 1;
const totalQuestions = 2; // Aantal vragen, pas dit aan als je meer vragen toevoegt

function showQuestion(number) {
    // Verberg alle vragen
    for (let i = 1; i <= totalQuestions; i++) {
        const questionElement = document.getElementById(`question${i}`);
        if (questionElement) {
            questionElement.style.display = 'none';
        }
    }
    // Toon de huidige vraag
    const currentElement = document.getElementById(`question${number}`);
    if (currentElement) {
        currentElement.style.display = 'block';
    }

    // Update navigatieknoppen
    document.getElementById('prev').style.display = number === 1 ? 'none' : 'inline-block';
    document.getElementById('next').style.display = number === totalQuestions ? 'none' : 'inline-block';
    document.getElementById('submit').style.display = number === totalQuestions ? 'inline-block' : 'none';
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function calculateResult() {
    const form = document.getElementById('quizForm');
    const inputs = form.querySelectorAll('input[type="radio"]:checked');

    let counts = { A: 0, B: 0, C: 0, D: 0 };

    // Tellen van de geselecteerde antwoorden
    inputs.forEach(input => {
        counts[input.value]++;
    });

    // Bepaal de hoogste telling
    let maxCount = Math.max(counts.A, counts.B, counts.C, counts.D);
    let resultPage = '';

    // Bepaal naar welke pagina te leiden
    if (counts.A === maxCount) {
        resultPage = 'link_b.html'; // Pagina voor meeste A's
    } else if (counts.B === maxCount) {
        resultPage = 'link_c.html'; // Pagina voor meeste B's
    } else if (counts.C === maxCount) {
        resultPage = 'link_d.html'; // Pagina voor meeste C's
    } else if (counts.D === maxCount) {
        resultPage = 'link_e.html'; // Pagina voor meeste D's
    }

    // Leid de gebruiker naar de juiste pagina
    window.location.href = resultPage;
}

// Toon de eerste vraag in het begin
showQuestion(currentQuestion);