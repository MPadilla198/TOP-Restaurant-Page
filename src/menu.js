export default (() => {
    const content = document.querySelector('#content');
    const drinks = [
        {
            name: 'House Coffee',
            description: 'Freshly brewed coffee that is picked daily by staff',
            price: 3,
        },
        {
            name: 'Cold Brew',
            description: 'Our signature cold brew that is brewed overnight',
            price: 5,
        },
        {
            name: 'Latte',
            description: 'Our delicious espresso with a light toch of milk',
            price: 5,
        },
        {
            name: 'Mocha',
            description: 'Our scrumptious chocolate whipped in with our espresso',
            price: 6,
        },
        {
            name: 'Americano',
            description: 'A double shot of espresso with hot water',
            price: 4,
        },
        {
            name: 'Espresso',
            description: 'Our signature, full-bodied, full-flavored double-espresso',
            price: 3,
        },
    ];
    const pastries = [
        {
            name: 'Plain Croissant',
            description: 'A buttery, flaky pastry made of laminated yeast dough and butter',
            price: 5,
        },
        {
            name: 'Chocolate Croissant',
            description: 'Four Valrhona dark chocolate batons rolled into Tatte flaky croissant dough',
            price: 5,
        },
        {
            name: 'Almond Croissant',
            description: 'Filled with housemade almond cream, topped with almonds, and dusted with powdered sugar',
            price: 5,
        },
        {
            name: 'Apple Turnover',
            description: 'Flaky puff pastry filled with caramelized spiced apples',
            price: 5,
        },
        {
            name: 'Cheese Danish',
            description: 'Flaky croissant dough topped with sweet cheese',
            price: 5,
        },
        {
            name: 'Blueberry Muffin',
            description: 'Tender olive oil blueberry muffin',
            price: 4,
        },
    ];

    function addMenuItem(item) {
        // Name
        const name = document.createElement('h3');
        name.textContent = item.name;
        name.classList.add('menu-item');
        content.appendChild(name);

        // Description
        const description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add('menu-item');
        content.appendChild(description);

        // Price
        const price = document.createElement('h4');
        price.textContent = `$${item.price}`;
        price.classList.add('menu-item');
        content.appendChild(price);
    }

    function render() {
        // Title
        const title = document.createElement('h1');
        title.classList.add('page-title')
        title.textContent = 'Sky Cafe\'s Menu';
        content.appendChild(title)

        // Pastries
        const pastryTitle = document.createElement('h2');
        pastryTitle.textContent = 'Pastries';
        content.appendChild(pastryTitle)
        for (const item of pastries) {
            addMenuItem(item);
        }

        content.appendChild(document.createElement('hr'))

        // Drinks
        const drinksTitle = document.createElement('h2');
        drinksTitle.textContent = 'Drinks';
        content.appendChild(drinksTitle)
        for (const item of drinks) {
            addMenuItem(item);
        }


    };

    return { render };
})();