const catalog = document.getElementById('catalog');

generateCards();

function generateCards() {
    const containers = catalog.querySelectorAll('ul>li');

    for (const container of containers) {
        const label = container.innerText;
        const ul = document.createElement('ul');

        ul.className = 'cards';
        container.replaceChildren(ul);

        for (let i = 1; i <= 12; i++) {
            const li = document.createElement('li');

            li.className = 'card';
            li.innerText = label.slice(3) + ' ' + i;
            ul.appendChild(li);
        }
    }
}