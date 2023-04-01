// Function to set up the image rotation
function rotateImages() {
    const images = document.querySelectorAll('.image-container img');
    let current = 0;
  
    // Set the first image to active
    images[current].classList.add('active');
  
    // Set up the image rotation
    setInterval(() => {
      // Remove the active class from the current image
      images[current].classList.remove('active');
      
      // Get the index of the next image
      current = (current + 1) % images.length;
  
      // Add the active class to the next image
      images[current].classList