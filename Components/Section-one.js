// JavaScript to create a custom image slider

// Define an array of image URLs for the carousel
const imageUrls = [
    "../Tricta-project-imgs/Section-one-trophy.jpg",
        "../Tricta-project-imgs/pngwing.comss.png",
    "../Tricta-project-imgs/pngwing.com.png"
    // Add more image URLs here for additional slides
];

const imageContainer = document.querySelector('.section-one-trophy-cntainr');
let currentImageIndex = 0;

// Function to display the next image in the carousel
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    const imageUrl = imageUrls[currentImageIndex];
    imageContainer.innerHTML = `<img class="section-one-trophy-img" width="280px" height="480px" src="${imageUrl}" alt="">`;
}

// Start the carousel by displaying the first image
showNextImage();

// Set an interval to automatically advance the carousel
const interval = 2000; // Change the interval (in milliseconds) to control the slide duration
setInterval(showNextImage, interval);