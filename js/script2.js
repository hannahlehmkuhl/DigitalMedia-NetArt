// This was added using the help of AI 

var currentImageIndex = 0; // Initial index of the image

// Array containing the paths of different images
var imagePaths = [
  "img/IMG_9257.jpg",
  "img/IMG_9376.jpeg",
  "img/IMG_9261.jpg",
  "img/IMG_9267.jpg",
  "img/IMG_93275.jpg",
  "img/IMG_9249.jpg",
  "img/IMG_9367.jpeg",
  "img/IMG_9268.jpg"
];

function changeImage() {
  var imageElement = document.getElementById("clickableImage");
  
  // Change the source of the image to the next image in the array
  imageElement.src = imagePaths[currentImageIndex];

  // Increment the index for the next click
  currentImageIndex++;

  // Reset the index if it exceeds the length of the imagePaths array
  if (currentImageIndex >= imagePaths.length) {
    currentImageIndex = 0;
  }
}


// 

let opacity = 0;

// Add event listener for mouse click
document.addEventListener('click', function() {
  // Increment opacity by a small amount (adjust as needed)
  opacity += 0.1;

  // Ensure opacity doesn't exceed 1
  opacity = Math.min(opacity, 1);

  // Apply the updated opacity to the overlay element
  document.getElementById('overlay').style.opacity = opacity;
});

// This was added using the help of AI 