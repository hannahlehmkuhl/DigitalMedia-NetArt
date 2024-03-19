// This was added using the help of AI 

var currentImageIndex = 0; // Initial index of the image

// Array containing the paths of different images

  var imagePaths = [
    "img/IMG_9250.jpg",
    "img/IMG_9253.jpg",
    "img/IMG_9256.jpg",
    "img/IMG_9265.jpg",
    "img/IMG_9270.jpg",
    "img/IMG_9266.jpg"
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