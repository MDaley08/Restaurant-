import mainImg from '../images/main logo.png';
const home_module = () => {
    const content = document.getElementById('content');
    const homeContainer = document.createElement('div')
    const image = document.createElement('img');
    const text = document.createElement('p');

    text.textContent =  'Simple ingredients, Premium Ice cream'
    image.src = mainImg;
    homeContainer.classList.add('home');
    homeContainer.appendChild(image);
    homeContainer.appendChild(text);
    content.appendChild(homeContainer);
}

export default home_module;