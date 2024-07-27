import './css/style.css';
import home from './modules/home.js';
import menu from './modules/menu.js';
import about from './modules/about.js';
import icon from './images/ice cream cone.svg';

const logo = document.getElementById('logo');
const myImg = new Image();

myImg.src = icon;
logo.prepend(myImg);

const tabManager = (() => {

    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const aboutBtn = document.getElementById('about-btn');
    let currPageId = homeBtn.id;

    const clearPage = () => {
        if(!currPageId) return;

        let currPageBtn = document.getElementById(currPageId);
        let currPage = content.firstChild;


        if(currPage){
            currPage.style.opacity = 0;
            setTimeout(() => currPage.remove(), 500); //waiting 500ms to remove element, to have smoother fade out
        }   
        currPageId = null;
        currPageBtn.classList.remove('active');
    }

    const setPage = (btn, pageFunc) => {
        let pageId = btn.id;
        if(currPageId === pageId) return;
        if(currPageId){
            clearPage();
        }
        setTimeout(pageFunc, 500);//waiting 500ms to execute page function, to remove rendering bug
        currPageId = pageId;
        btn.classList.add('active');
    }

    //initial page setup
    home();
    homeBtn.classList.add('active');

    // all event listeners for 3 buttons 
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