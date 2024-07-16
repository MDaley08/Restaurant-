import mainImg from '../images/main logo.png';
const home_module = () => {
    const content = document.getElementById('content');
    const homeContainer = document.createElement('div')
    const image = document.createElement('img');
    image.src = mainImg;
    homeContainer.appendChild(image);
    content.appendChild(homeContainer);

}

export default home_module;