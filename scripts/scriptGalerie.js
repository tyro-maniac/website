const images = document.querySelectorAll('.pageContent img'); // get all img inside pagecontent
const lightbox = document.getElementById('lightbox'); // get all lightbox elements
const lightboxImage = document.getElementById('lightboxImage'); // get all lightbox elements
const closeBtn = document.querySelector('.lightbox-content .close'); // get all lightbox elements

// when image clicked, show it in lightbox
images.forEach(image => {
  image.addEventListener('click', function () {
    lightboxImage.src = this.src; // sets clicked image as lightbox image
    lightbox.classList.remove('hidden'); // show it
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden'); // hide it with button
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden'); // hide it when clicked outside
  }
});


