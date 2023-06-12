// BEGIN
const calculator = () => {
    const form = document.querySelector('.form-inline');
    const input = document.querySelector('input[type="number"');
    const reset = document.querySelector('button[type="button"');
    const result = document.querySelector('#result');
    let sum = 0;

    input.focus();

    function render() {
        result.textContent = sum.toString();
    }

    function handlePlusBtn(e) {
        e.preventDefault();
        const value = parseInt(input.value);
        sum += value;
        input.value = '';
        render();
        input.focus();
    }

    function handleResetBtn(e) {
        e.preventDefault();
        sum = 0;
        input.value = '';
        render();
        input.focus();
    }

    form.addEventListener('submit', handlePlusBtn);
    reset.addEventListener('click', handleResetBtn);
}


export default calculator;
// END