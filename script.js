// debounce func
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const slideImages = document.querySelectorAll('.slide-in')

function checkSlide(e) {
    slideImages.forEach(slideImage => {
        // scroll to halfway through the page
        const slideInAt =(window.scrollY + window.innerHeight) - slideImage.height / 2
        // bottom of the image
        const imageBottom = slideImage.offsetTop + slideImage.height

        const isHalfShown = slideInAt > slideImage.offsetTop
        //if the image is scrolled passed or not
        const isNotScrolledPast = window.scrollY < imageBottom

        if(isHalfShown && isNotScrolledPast){
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide))