
const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-button');
const clearButton = document.getElementById('clear-button');
const results = document.getElementById('results-div');


userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        showResults();
    }
})

let nums = []
const showResults = () => {

    const valor = userInput.value;

    if (!valor) {
        alert('Por favor, ingrese un número de teléfono');
        return;
    }

    nums.push(valor);
    renderResults();
    userInput.value = '';

}

const clearResults = () => {
    nums = [];
    renderResults();

}

const renderResults = () => {
    results.innerHTML = nums.map((num) => {
        return validatePhone(num)
            ? `<li class="list correct">Valid US Number <br><b>${num}</b>  </li>`
            : `<li class="list error"> Invalid US Number <br><b>${num}</b> </li>`

    }).join('');


}

const validatePhone = (num) => {
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return phoneRegex.test(num);
}




