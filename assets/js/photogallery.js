document.querySelectorAll('.image-container img').forEach(image =>{
    //Shoe popup image and set source to clicked image
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

//Onclick function to close button 
document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}