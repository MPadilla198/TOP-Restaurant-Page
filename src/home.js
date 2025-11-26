import muffinsImage from './blueberry-muffins.jpg';
import croissantImage from './choco-croissant.jpeg';

export default (() => {
    const content = document.querySelector('#content');
    const images = [
        {
            src: muffinsImage,
            alt: 'Blueberry Muffins',
        },
        {
            src: croissantImage,
            alt: 'Chocolate Croissant',
        }
    ]

    function render() {
        // Title
        const title = document.createElement('h1');
        title.textContent = 'Welcome to Sky Cafe!';
        content.appendChild(title)

        // Add images
        const imgRow = document.createElement('div');
        imgRow.classList.add('home-page-image-row');
        for (const image of images) {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.classList.add('home-page-image');
            imgRow.appendChild(img);
        }
        content.appendChild(imgRow);

        // 'Serving since..' 
        const subtitle = document.createElement('h2');
        subtitle.textContent = 'Serving only the most delicious food since 2025'
        content.appendChild(subtitle);

        content.appendChild(document.createElement('hr'));

        // Catering
        const cateringTitle = document.createElement('h2');
        cateringTitle.textContent = 'We do catering!';
        content.appendChild(cateringTitle);
        const catering = document.createElement('p');
        catering.textContent = 'We can cater any events that you may have lined up for the future. From corporate events to early morning celebrations, you can trust Sky Cafe to deliver on a memorable experience for all attendees.';
        content.appendChild(catering);

        content.appendChild(document.createElement('hr'));

        // Groups and Parties
        const groupsTitle = document.createElement('h2');
        groupsTitle.textContent = 'Groups and Parties';
        content.appendChild(groupsTitle);
        const groups = document.createElement('p');
        groups.textContent = 'Looking for a place to host a party or event? We\'ve got your covered with our private event space. You will be impressed by the ambiance, from start to finish.';
        content.appendChild(groups);
    };

    return { render };
})();