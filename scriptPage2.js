
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

/*const text = document.querySelector('#text');
text.textContent += "1/" + (carouselImages.length-2);*/

let size = carouselImages[0].clientWidth;
// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
// Counter
let counter = 1;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// carouselSlide.style.transition = "none";
// Button Listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

   /* switch (counter){
        case 0 :
            text.textContent = "image6";
            break;
        case 5:
            text.textContent = "image1";
            break;
        case 1: 
            text.textContent = "image1";
            break;
        case 2:
            text.textContent = "image2";
            break;
        case 3:
            text.textContent = "image3";
            break;
        case 4:
            text.textContent = "image4";
            break;
        case 5:
            text.textContent = "image5";
        break;
        case 6:
            text.textContent = "image6";
            break;*/
    }/*
    text.textContent = counter + "/" + (carouselImages.length-2);
    if (counter === carouselImages.length -1) {
        text.textContent = 1 + "/" + (carouselImages.length-2);
    }*/
);
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   /* switch (counter){
        case 0 :
            text.textContent = "image1";
            break;
        case 5:
            text.textContent = "image6";
            break;
        case 1: 
            text.textContent = "image1";
            break;
        case 2:
            text.textContent = "image2";
            break;
        case 3:
            text.textContent = "image3";
            break;
        case 4:
            text.textContent = "image4";
            break;
        case 5:
            text.textContent = "image5";
        break;
        case 6:
            text.textContent = "image6";
            break;
    }*/
    /*text.textContent = counter + "/" + (carouselImages.length-2);
    if (counter === 0) {
        text.textContent = (counter+1) + "/" + (carouselImages.length-2);
    }*/
});
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
// Check if screen size changes
window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
