// Capturar o evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value.replace(',', '.'));
    const altura = Number(inputAltura.value.replace(',', '.'));

    if (!peso) {
        setResult('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResult('Altura inválida!', false);
        return;
    }
    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResult(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade I', 'Obesidade II', 'Obesidade III'];

    if (imc >= 39.9) return nivel[5];
    
    if (imc >= 34.9) return nivel[4];
    
    if (imc >= 29.9) return nivel[3];
    
    if (imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];
    
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = parseFloat(peso / altura ** 2);
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
};

function setResult (msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const p = criaP ();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};