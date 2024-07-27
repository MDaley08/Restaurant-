import cookies from '../images/cookies and cream.png'
import berry from '../images/berry blast.png'
import peach from '../images/peach and cream.png'
import pistachio from '../images/pistachio.png'
import strawberry from '../images/strawberry and vanilla.png'
import vanilla from '../images/vanilla.png'
// import cookies from '../images/cookies and cream.png'
const cardCreator = (name, imgSrc) => {
    if(typeof name !== "string"){
        console.log(`${name} not a valid string`);
        return;
    }
    if(typeof imgSrc !== "string"){
        console.log(`${imgSrc} not a valid string`);
        return;
    }
    const card = document.createElement('div');
    const img = document.createElement('img');
    const nameSec = document.createElement('div');

    img.src = imgSrc;
    nameSec.textContent = name;

    card.classList.add('card');
    nameSec.classList.add('name');
    card.appendChild(img);
    card.appendChild(nameSec);
    return card;
}
const menu_module = () => {
    const content = document.getElementById('content');
    const menuContainer = document.createElement('div');
    const cardContainer = document.createElement('div');
    const title = document.createElement('p');

    title.textContent = 'Menu';

    cardContainer.appendChild(cardCreator("Cookies N Cream",cookies));
    cardContainer.appendChild(cardCreator("Berry Blast", berry));
    cardContainer.appendChild(cardCreator('Peaches N Cream',peach));
    cardContainer.appendChild(cardCreator('Pistachio', pistachio));
    cardContainer.appendChild(cardCreator('Strawberry Cheesecake', strawberry));
    cardContainer.appendChild(cardCreator('Vanilla', vanilla));
    cardContainer.classList.add('card-container');
    menuContainer.classList.add('menu-container');
    menuContainer.appendChild(title);
    menuContainer.appendChild(cardContainer);

    
    content.appendChild(menuContainer);

}

export default menu_module;