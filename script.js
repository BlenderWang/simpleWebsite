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

// show all partners
const showMoreBtn = document.querySelector('.btn-show-more')
const showLessBtn = document.querySelector('.btn-show-less')
const hiddenRow = document.querySelector('.hidden')

function toggleMore() {
    showMoreBtn.classList.toggle('more-partners')
    if(showMoreBtn.textContent == 'show more') {
        showMoreBtn.textContent = 'show less'
    }else {
        showMoreBtn.textContent = 'show more'
    }
}

showMoreBtn.addEventListener('click', (e) => {
    e.preventDefault()
    hiddenRow.classList.toggle('hidden')
    toggleMore()
})

const itemsArray = [
    {
        id: 0,
        imageUrl: "images/anna-tukhfatullina-food-photographer-stylist-ViYKjqmtiXU-unsplash.jpg",
        title: 'title',
        desc: 'text paragraph'
    },{
        id: 1,
        imageUrl: "images/irene-kredenets-TGsu-idaiqE-unsplash.jpg",
        title: 'title',
        desc: 'text paragraph'
    },
    {
        id: 2,
        imageUrl: "images/nguyen-thanh-hi-n-jqi7at_Bclc-unsplash.jpg",
        title: 'title',
        desc: 'text paragraph'
    },{
        id: 3,
        imageUrl: "images/yucel-moran-c39bWxqyV10-unsplash.jpg",
        title: 'title',
        desc: 'text paragraph'
    },{
        id: 4,
        imageUrl: "images/photo-book.jpeg",
        title: 'title',
        desc: 'text paragraph'
    },{
        id: 5,
        imageUrl: "images/hannah-pemberton-0nCXdttXbZA-unsplash.jpg",
        title: 'title',
        desc: 'text paragraph'
    }
]

function generateItems() {
    const containerEl = document.querySelector('.items-container')

    itemsArray.forEach(item => {
        const colEl = document.createElement('div')
        colEl.classList.add('col-10', 'col-sm-6', 'col-lg-4', 'mx-auto', 'my-3')
        colEl.innerHTML = `
            <div class="panel">
                <img src="${item.imageUrl}">
                <div id="overlay">
                    <a href="${item.imageUrl}" class="btn btn-dark text-uppercase my-2">view</a>
                </div>
            </div>
            <h4 class="text-uppercase">${item.title}</h4>
            <p>${item.desc}</p>
        `
        containerEl.appendChild(colEl)
        // console.log(containerEl);
    })
}

generateItems()