const button = document.getElementById('btn');
const finalResult = document.getElementById('result');

button.addEventListener('click', () => {
    finalResult.textContent = Date();
})