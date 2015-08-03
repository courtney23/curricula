var slides;
var lastSlideIndex;
var currentSlideIndex;

slides = document.getElementsByClassName('slide');

for (var i = 0; i < slides.length; i++) {
  addClass(slides[i], 'is-hidden');
}

goToSlide(parseInt(window.location.hash.substr(1)) || 0);

document.onkeydown = function (event) {
  // `next` key codes map to enter, space, the right arrow key, and `]`
  // `prev` key codes map to the left arrow key and `[`
  // @see: https://css-tricks.com/snippets/javascript/javascript-keycodes/ for key codes
  var next = [13, 32, 39, 219];
  var prev = [37, 221];

  if (next.indexOf(event.keyCode) !== -1) {
    nextSlide();
    return;
  }

  if (prev.indexOf(event.keyCode) !== -1) {
    prevSlide();
    return;
  }
};

function nextSlide() {
  console.log('next slide');
  goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  console.log('prev slide');
  goToSlide(currentSlideIndex - 1);
}

function goToSlide(index) {
  // If the slide does not exist, stop
  if (index < 0) { return; }
  if (index > slides.length - 1) { return; }

  lastSlideIndex = currentSlideIndex;
  currentSlideIndex = index;
  window.location.hash = currentSlideIndex;

  var lastSlide = slides[lastSlideIndex];
  var slide = slides[currentSlideIndex];

  if (lastSlide !== undefined) {
    removeClass(lastSlide, 'is-shown');
    addClass(lastSlide, 'is-hidden');
  }

  removeClass(slide, 'is-hidden');
  addClass(slide, 'is-shown');

  console.log('slide', currentSlideIndex);
}

function addClass(node, c) {
  node.className = node.className + ' ' + c;
}

function removeClass(node, c) {
  node.className = node.className.replace(c, '');
}