let answers = {}; 
function nextQuestion(answer, nextQuestionId) {
    answers[nextQuestionId === 'question2' ? 'hairType' : 
            nextQuestionId === 'question3' ? 'style' : 
            nextQuestionId === 'question4' ? 'maintenance' : ''] = answer;
    document.getElementById(`question${Object.keys(answers).length}`).classList.remove("active");
    document.getElementById(nextQuestionId).classList.add("active");
}

function showRecommendation(length) {
    answers.length = length;

    let recommendationText = '';

    if (answers.style === 'latino' && length === 'corto') {
        recommendationText = `
            <strong>Corte recomendado:</strong> Taper Fade.<br>
            <em>Descripción:</em> Un estilo corto y moderno con laterales desvanecidos y parte superior texturizada. Ideal para quienes desean un estilo fresco y fácil de mantener.
        `;
    } else if (answers.style === 'americano' && length === 'mediano') {
        recommendationText = `
            <strong>Corte recomendado:</strong> Mullet.<br>
            <em>Descripción:</em> Un corte icónico de longitud media, con los laterales cortos y la parte trasera más larga. Perfecto para quienes buscan un estilo único y llamativo.
        `;
    } else if (answers.style === 'moderno' && answers.maintenance === 'facil') {
        recommendationText = `
            <strong>Corte recomendado:</strong> Quiff.<br>
            <em>Descripción:</em> Un estilo moderno que combina volumen en la parte superior y laterales cortos. Fácil de peinar y mantener.
        `;
    } else {
        recommendationText = `
            <strong>Corte recomendado:</strong> Clásico adaptable.<br>
            <em>Descripción:</em> Un corte versátil que puede adaptarse a tus preferencias. Perfecto para cualquier tipo de cabello y estilo.
        `;
    }

    document.getElementById("recommendationText").innerHTML = recommendationText;
    document.getElementById("question4").classList.remove("active");
    document.getElementById("recommendation").classList.add("active");
}

function goToBarberia() {
   
    const params = new URLSearchParams(answers).toString();
    window.location.href = `index barberia.html?${params}`;
}
