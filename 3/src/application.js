// BEGIN
const filterForm = (laptops) => {
    const form = document.querySelector('form');
    const procSelector = document.querySelector('select[name="processor_eq"]');
    const memSelector = document.querySelector('select[name="memory_eq"');
    const minFreqSelector = document.querySelector('input[name="frequency_gte"]');
    const maxFreqSelector = document.querySelector('input[name="frequency_lte"]');
    const resultContainer = document.querySelector('.result');

    function filterLaptops() {
        const procValue = procSelector.value;
        const memValue = memSelector.value;
        const minFreqValue = minFreqSelector.value;
        const maxFreqValue = maxFreqSelector.value;

        

        const filteredLaptops = laptops.filter(laptop => {
            return (
                (procValue === '' || laptop.processor === procValue) &&
                (memValue === '' || laptop.memory === parseInt(memValue)) &&
                (minFreqValue === '' || laptop.frequency >= parseInt(minFreqValue)) &&
                (maxFreqValue === '' || laptop.frequency <= parseInt(maxFreqValue))
            )
        }) 

        render(filteredLaptops);
    }

    function render(items) {
        resultContainer.innerHTML = '';

        if (items.length === 0) {
            return;
        }

        const laptopList = document.createElement('ul');
        laptopList.classList.add('list-group');

        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = item.model;
            laptopList.append(listItem);
        })

        resultContainer.appendChild(laptopList);
    }

    form.addEventListener('input', filterLaptops);

    render(laptops);

}

export default filterForm;
// END