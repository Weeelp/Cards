function plugin(activeSlide = 2) { 
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

for (const slide of slides){
    slide.addEventListener('click', () => {
        celarActiveClasses()
        slide.classList.add('active')

    })
}

function celarActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')    
    })
}
}
plugin()
