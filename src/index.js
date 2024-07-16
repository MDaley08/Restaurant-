import './css/style.css';
import home from './modules/home.js';
import menu from './modules/menu.js';
import about from './modules/about.js';
import icon from './images/ice cream cone.svg';

let logo = document.getElementById('logo');

const myImg = new Image();
myImg.src = icon;
logo.prepend(myImg);

const tabManager = (() => {

    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const aboutBtn = document.getElementById('about-btn');
    let currPage = null;

    const clearPage = () => {
        const content = document.getElementById('content');
        if(content.firstChild) content.removeChild(content.firstChild);
        currPage = null;
        
    }

    const setPage = (btn, pageFunc) => {
        let pageId = btn.id;
        if(currPage === pageId){
            return;
        }
        if(currPage){
            clearPage();
        }
        pageFunc();
        currPage = pageId;
    }

    homeBtn.addEventListener('click', () => {
        setPage(homeBtn,home);
    });

    menuBtn.addEventListener('click', () => {
        setPage(menuBtn, menu);
    });

    aboutBtn.addEventListener('click', () => {
        setPage(aboutBtn, about);
    });
})();
