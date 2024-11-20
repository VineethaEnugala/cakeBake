let search = document.querySelector('.search');
document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
}

let menuBar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
    menuBar.classList.toggle('active');
}

// Product section

// Initial indexes for each row
let startIndex1 = 0;
let startIndex2 = 0;
const showSlides = (row, step) => {
    // Select the appropriate container for the row
    let container;
    if (row === 1) {
        container = document.querySelector('.container1');
        startIndex1 += step;
    } else if (row === 2) {
        container = document.querySelector('.container2');
        startIndex2 += step;
    }
    const boxes = container.querySelectorAll('.box, .box1');
    const totalBoxes = boxes.length;
    // Limiting the startIndex between 0 and totalBoxes - 4
    if (row === 1) {
        startIndex1 = Math.max(0, Math.min(startIndex1, totalBoxes - 4));
    } else if (row === 2) {
        startIndex2 = Math.max(0, Math.min(startIndex2, totalBoxes - 4));
    }
    // Hide all boxes first
    boxes.forEach((box, index) => {
        box.style.display = 'none';
    });
    // Determine which 4 boxes to show based on startIndex
    let currentIndex = row === 1 ? startIndex1 : startIndex2;
    for (let i = currentIndex; i < currentIndex + 4 && i < totalBoxes; i++) {
        boxes[i].style.display = 'block';
    }
};
// Event handlers for the arrow clicks
const plusSlides = (row, step) => {
    showSlides(row, step);
};
// When the page loads, the DOMContentLoaded event fires, 
// calling showSlides(1, 0) , showSlides(2, 0) to show the first 4 slides for both rows
document.addEventListener('DOMContentLoaded', () => {
    showSlides(1, 0); // Show first 4 items in the first row
    showSlides(2, 0); // Show first 4 items in the second row
});


// Blogs section
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.blogs-row', {
        // Optional parameters
        slidesPerView: 1, // Show 1 slide at a time by default
        spaceBetween: 20, // Space between slides
        loop: false, // Enable looping of slides

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.review-row', {
        // Optional parameters
        // slidesPerView: 1, // Show 1 slide at a time by default
        spaceBetween: 30, // Space between slides

        // Responsive breakpoints
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },

    });
});

