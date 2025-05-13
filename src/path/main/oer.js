// JS SET OUT IMPROVMENT = HTML

// // Set an interval to call autoScroll every 5 seconds (5000 ms)
// setInterval(autoScroll, 3000);

// const container = document.querySelector('main.sets div.ero article > div');
// const slides = container.querySelectorAll('ul');

// // IntersectionObserver to set active class
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     } else {
//       entry.target.classList.remove('active');
//     }
//   });
// }, {
//   root: container,
//   threshold: 0.6 // 60% visible
// });

// slides.forEach(slide => {
//   observer.observe(slide);
// });

// // Auto scroll function
// function autoScroll() {
//   const slideWidth = slides[0].offsetWidth + 10; // width + gap
//   container.scrollBy({
//     left: slideWidth,
//     behavior: 'smooth'
//   });

//   // Reset to start if scrolled to end
//   if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
//     container.scrollTo({ left: 0, behavior: 'smooth' });
//   }
// }

// // Auto scroll every 3 seconds
// setInterval(autoScroll, 3000);

const container = document.querySelector('main.sets div.ero article > div');
let slides = Array.from(container.querySelectorAll('ul'));
const slideCount = slides.length;
const slideGap = 10; // px gap

// Clone first and last slides initially (optional for smooth start)
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  clone.classList.add('clone');
  container.appendChild(clone);
});
slides.slice().reverse().forEach(slide => {
  const clone = slide.cloneNode(true);
  clone.classList.add('clone');
  container.insertBefore(clone, container.firstChild);
});

// Refresh slides list after initial clones
let allSlides = Array.from(container.querySelectorAll('ul'));
let slideWidth = slides[0].offsetWidth + slideGap;

// Set initial scroll to first real slide
container.scrollLeft = slideWidth * slideCount;
let currentIndex = slideCount; // start at first real slide

// IntersectionObserver to set active class
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  root: container,
  threshold: 0.6
});
allSlides.forEach(slide => observer.observe(slide));

// Auto scroll function
function autoScroll() {
  currentIndex++;
  container.scrollTo({
    left: currentIndex * slideWidth,
    behavior: 'smooth'
  });

  // After scroll, check if near end —> Append first slide again
  setTimeout(() => {
    // If within last 2 slides, append new clones
    if (currentIndex >= allSlides.length - 2) {
      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        clone.classList.add('clone');
        container.appendChild(clone);
        observer.observe(clone);
      });

      // Refresh all slides + recalc width (responsive safe)
      allSlides = Array.from(container.querySelectorAll('ul'));
      slideWidth = slides[0].offsetWidth + slideGap;
    }
  }, 400); // match smooth scroll duration
}

// Auto scroll every 3s
setInterval(autoScroll, 4000);




