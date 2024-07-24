import header from '../images/about-bg.png';
const about_module = () => {
    const content = document.getElementById('content');
    const aboutContainer = document.createElement('div');
    const headerImg = document.createElement('img');
    const aboutPara = document.createElement('p');
    const imgDiv = document.createElement('div');
    const aboutUs = document.createElement('p');

    const aboutText = "Welcome to the indulgent world of Frozen Delights, where passion meets perfection in every scoop. We take pride in crafting artisanal, premium ice cream that tantalizes taste buds and delights the senses. Nestled in the heart of Jersey, our dedicated team of connoisseurs meticulously selects the finest ingredients, ensuring each batch is a masterpiece of flavor and quality. From classic favorites to innovative seasonal creations, every spoonful of Frozen Delights treats is a celebration of rich, creamy goodness. Whether you're savoring a quiet moment at home or hosting a festive gathering, our commitment to excellence promises a truly unforgettable dessert experience. Discover the magic of Frozen Delignhts and elevate your ice cream indulgence to new heights."
    aboutUs.textContent ='About Us';

    headerImg.src = header;
    aboutPara.textContent = aboutText;
    imgDiv.appendChild(headerImg)
    imgDiv.appendChild(aboutUs)
    aboutContainer.appendChild(imgDiv);
    aboutContainer.appendChild(aboutPara);
    aboutContainer.classList.add('about');
    content.appendChild(aboutContainer);

}

export default about_module;