// BEGIN
const collapse = (companies) => {

    const container = document.querySelector('.container')

    const btns = [];

    for (let company of companies) {
        const btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.textContent = company.name;
        btn.setAttribute('data-description', company.description);
        btns.push(btn);
    }

    btns.forEach(btn => container.append(btn))

    function render(description) {

        if (!description) {
            return;
        }

        const result = document.createElement('div');
        result.textContent = description;
        container.append(result);
    }

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const description = container.querySelector('.description');

            if (description) {
                if (description.textContent !== btn.getAttribute('data-description')) {
                  description.textContent = btn.getAttribute('data-description');
                } else {
                    description.remove();
                }
              } else {
                const newDescription = document.createElement('div');
                newDescription.textContent = btn.getAttribute('data-description');
                newDescription.className = 'description';
                container.appendChild(newDescription);
            }
        })
    })

}

export default collapse;
// END