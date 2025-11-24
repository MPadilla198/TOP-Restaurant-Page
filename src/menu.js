export default (() => {
    const content = document.querySelector('#content');

    function render() {
        // Title
        const title = document.createElement('h1');
        title.classList.add('page-title')
        title.textContent = 'Sky Cafe\'s Menu';

        content.appendChild(title)
    };

    return { render };
})();