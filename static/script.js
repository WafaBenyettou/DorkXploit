const isValidDomain = (domain) => {
    const regex = /^(?!-)([A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/;
    return regex.test(domain);
};

document.getElementById('dorkForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const target = document.getElementById('target').value;

    if (!isValidDomain(target)) {
        alert('Please enter a valid domain name.');
        return;
    }

    try {
        const response = await fetch('/dorks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target })
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';

        if (data.message) {
            resultsContainer.innerHTML = `<p class="message">${data.message}</p>`;
        } else {
            data.categories.forEach(category => {
                const categoryElement = document.createElement('div');
                categoryElement.classList.add('category');

                const categoryTitle = document.createElement('h3');
                categoryTitle.textContent = category.name;
                categoryElement.appendChild(categoryTitle);

                const categoryDescription = document.createElement('p');
                categoryDescription.textContent = category.description;
                categoryElement.appendChild(categoryDescription);

                const dorkList = document.createElement('ul');
                category.dorks.forEach(dork => {
                    const listItem = document.createElement('li');
                    const linkElement = document.createElement('a');
                    linkElement.href = `https://www.google.com/search?q=${encodeURIComponent(dork.query.replace("TARGET", target))}`;
                    linkElement.target = "_blank";
                    linkElement.textContent = `${dork.subCategory} - ${dork.query}`;
                    linkElement.classList.add('result-item');
                    listItem.appendChild(linkElement);
                    dorkList.appendChild(listItem);
                });

                categoryElement.appendChild(dorkList);
                resultsContainer.appendChild(categoryElement);
            });
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching dorks.');
    }
});
