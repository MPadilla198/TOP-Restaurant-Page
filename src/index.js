import './styles.css';

import Home from './home';
import Menu from './menu';
import Contact from './contact';

const content = document.querySelector('#content');
function resetContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const Pages = Object.freeze({
    HOME: 'home',
    MENU: 'menu',
    CONTACT: 'contact',
});

let currentPage = Pages.HOME;
Home.render();

document.querySelector('#home').addEventListener('click', () => {
    if (currentPage !== Pages.HOME) {   
        resetContent();
        Home.render();

        currentPage = Pages.HOME
    }
});

document.querySelector('#menu').addEventListener('click', () => {
    if (currentPage !== Pages.MENU) {
        resetContent();
        Menu.render();

        currentPage = Pages.Menu;
    }
});

document.querySelector('#contact').addEventListener('click', () => {
    if (currentPage !== Pages.CONTACT) {
        resetContent();
        Contact.render();

        currentPage = Pages.CONTACT;
    }
});

