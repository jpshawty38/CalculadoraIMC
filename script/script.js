const calculate = document.getElementById('calculate');

function imc() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {

        const valorIMC = (weight / (height * height)).toFixed(1);

        let classification = '';

        if (valorIMC < 18.5) {
            classification = 'Abaixo do peso'
        } else if (valorIMC < 25) {
            classification = 'Peso Ideal'
        } else if (valorIMC < 30) {
            classification = 'Levemente acima do Peso'
        } else if (valorIMC < 35) {
            classification = 'Com obesidade nivel 1'
        } else if (valorIMC < 40) {
            classification = 'Com obesidade nivel 2'
        } else if (valorIMC < 45) {
            classification = 'Com obesidade nivel 3'
        }
        
        result.textContent = `${name} seu IMC é ${valorIMC} e você esta ${classification}`;

    } else {
        result.textContent = 'Preencha todos os campos'
    }

}

calculate.addEventListener('click', imc);