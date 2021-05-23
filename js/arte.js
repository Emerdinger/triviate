let preguntas = readText("../preguntas/arte.json");
let interprete_pg = JSON.parse(preguntas);
let pregunta;
let respuestas;
let btn_correspondiente = [select_id("btn1"), select_id("btn2"), select_id("btn3"), select_id("btn4")];
puntuacion = 0
preguntaAleatoria();

function preguntaAleatoria() {
    let n = Math.floor(Math.random() * interprete_pg.length);
    escogerPregunta(n);
}

function escogerPregunta(n) {
    pregunta = interprete_pg[n];
    console.log(interprete_pg.length);

    // Verifica que no se acaben las preguntas
    if (interprete_pg.length == 0) {
        alert('Se acabaron las preguntas');
    } else {
        select_id("categoria").innerHTML = pregunta.category;
        select_id("pregunta").innerHTML = pregunta.question;
        desordenarPreguntas(pregunta);
        interprete_pg.splice(n, 1);
    }
}

function desordenarPreguntas(pregunta) {
    posibles_respuestas = [
        pregunta.correct_answer,
        pregunta.incorrect_answers[0],
        pregunta.incorrect_answers[1],
        pregunta.incorrect_answers[2]
    ]

    posibles_respuestas.sort(() => Math.random() - 0.5)

    select_id("btn1").innerHTML = posibles_respuestas[0]
    select_id("btn2").innerHTML = posibles_respuestas[1]

    if (posibles_respuestas[2, 3] == undefined) {
        select_id("btn3").style.display = 'none'
        select_id("btn4").style.display = 'none'
    } else {
        select_id("btn3").innerHTML = posibles_respuestas[2]
        select_id("btn4").innerHTML = posibles_respuestas[3]
        select_id("btn3").style.display = ''
        select_id("btn4").style.display = ''
    }
}

let suspender_botones = false;

function responder(i) {
    if (suspender_botones) {
        return
    }
    suspender_botones = true;

    if (posibles_respuestas[i] == pregunta.correct_answer) {
        btn_correspondiente[i].style.background = 'lightgreen';
        puntuacion++
        setTimeout(() => {
            reiniciar()
            suspender_botones = false
        }, 3000);
    } else {
        btn_correspondiente[i].style.background = 'pink';
        setTimeout(() => {
            alert(`Has perdido! obtuviste una puntuación de ${puntuacion}!`);
            window.location.reload();
        }, 2000)
    }
}

function reiniciar() {
    for (const btn of btn_correspondiente) {
        btn.style.background = "white"
    }
    preguntaAleatoria()
}


// Select an element by id

function select_id(id) {
    return document.getElementById(id);
}

// Get css of an object by id

function style(id) {
    return select_id(id).style
}

// Read text in a local route

function readText(local_route) {
    var text = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", local_route, false);
    xmlhttp.send();

    if (xmlhttp.status == 200) {
        text = xmlhttp.responseText;
    }

    return text;
}