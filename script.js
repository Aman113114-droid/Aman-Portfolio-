const words = [
    "Python Developer",
    "Full Stack Developer",
    "ML Enthusiast",
    "Problem Solver"
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


const typing = document.getElementById("typing");


function typeEffect() {

    const word = words[wordIndex];


    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}


typeEffect();