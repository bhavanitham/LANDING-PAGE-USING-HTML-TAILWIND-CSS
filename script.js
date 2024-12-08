document.getElementById('hamburger').onclick = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    // Toggle visibility
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
};

const container = document.getElementById('testimonial-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentIndex = 0;

// Function to move the testimonials based on the index
function updateSliderPosition() {
    const testimonialWidth = 320 + 32; // card width + space between
    container.style.transform = `translateX(${-testimonialWidth * currentIndex}px)`;
}

// Event listener for the right arrow
rightArrow.addEventListener('click', () => {
    const totalItems = container.children.length;
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

// Event listener for the left arrow
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});