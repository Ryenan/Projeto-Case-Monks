const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const inputResult = document.getElementById('result');
const verifyButton = document.getElementById('verifyButton');

let correctSum;

function generateRandomNumbers() {
    const number1 = Math.floor(Math.random() * 900) + 100;
    const number2 = Math.floor(Math.random() * 900) + 100;

    num1.textContent = number1;
    num2.textContent = number2;
    correctSum = number1 + number2;
}

function verifyInput() {
    const userResult = parseInt(inputResult.value);
    if (userResult === correctSum) {
        verifyButton.disabled = false;
        verifyButton.classList.add('enabled');
    } else {
        verifyButton.disabled = true;
        verifyButton.classList.remove('enabled');
    }
}

    inputResult.addEventListener('input', verifyInput)
    window.onload = generateRandomNumbers;


function animar(){
    const buttaoanimar = document.getElementById('btnMenu');
    buttaoanimar.classList.toggle('ativaranimacao');
    console.log('funcionando')
}

function menuShow(){
    let menumobile = document.querySelector('.menuMobile')
    let navMobile = document.querySelector('.menu')

    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
    } else {
        menumobile.classList.add('open');
    }

    if (navMobile.classList.contains('radiusBottom')){
        navMobile.classList.remove('radiusBottom');
    } else {
        navMobile.classList.add('radiusBottom');
    }
}

function redirectToMonks() {
    window.open('https://www.monks.com/pt', '_blank');
}

document.getElementById('imageLogo').addEventListener('click', redirectToMonks);
document.getElementById('logoTextMobile').addEventListener('click', redirectToMonks);

document.addEventListener("DOMContentLoaded", function() {
    
    var sec1 = document.querySelector(".sec1");
    var sec2 = document.querySelector(".sec2");
    var sec3 = document.querySelector(".sec3");
    var sec4 = document.querySelector(".sec4");
    var sec5 = document.querySelector(".sec5");
    var sec6 = document.querySelector(".form");
    var sec6img = document.querySelector(".sec6Img");

    sec1.classList.add('show');

    window.addEventListener("scroll", function() {
        
        var alturaPagina = document.documentElement.scrollHeight - window.innerHeight;
        var porcentagemRolagem = (window.scrollY / alturaPagina) * 100;
        
        if (porcentagemRolagem > 8) {
            sec2.classList.add("show");
        } else {
            sec2.classList.remove("show");      
        }

        if (porcentagemRolagem > 38) {
            sec3.classList.add("show");
        } else {
            sec3.classList.remove("show");      
        }

        if (porcentagemRolagem > 52) {
            sec4.classList.add("show");
        } else {
            sec4.classList.remove("show");      
        }

        if (porcentagemRolagem > 60) {
            sec5.classList.add("show");
        } else {
            sec5.classList.remove("show");      
        }

        if (porcentagemRolagem > 77) {
            sec6.classList.add("show");
            sec6img.classList.add("show");
        } else {
            sec6.classList.remove("show");      
            sec6img.classList.remove("show");      
        }
    })
});