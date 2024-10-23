// const carouselSlide = document.querySelector('.carousel-wrapper');
// const images = document.querySelectorAll('.carousel-slide img');
//
// let currentIndex = 0;
// const totalImages = images.length;
//
// // Get buttons
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
//
// // Event Listeners for buttons
// prevBtn.addEventListener('click', () => {
//     if (currentIndex === 0) {
//         currentIndex = totalImages - 1; // Loop back to last image
//     } else {
//         currentIndex--;
//     }
//     updateCarousel();
// });
//
// nextBtn.addEventListener('click', () => {
//     if (currentIndex === totalImages - 1) {
//         currentIndex = 0; // Loop back to first image
//     } else {
//         currentIndex++;
//     }
//     updateCarousel();
// });
//
// // Function to update the carousel position
// function updateCarousel() {
//     carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
// }
//
// // Optional: Add touch swipe functionality for mobile
// let startX;
// carouselSlide.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX;
// });
//
// carouselSlide.addEventListener('touchmove', (e) => {
//     const moveX = e.touches[0].clientX;
//     const distance = startX - moveX;
//
//     if (distance > 50) {
//         nextBtn.click();
//     } else if (distance < -50) {
//         prevBtn.click();
//     }
// });