// navbar open
document.addEventListener('DOMContentLoaded', function () {
  const modalBtn = document.getElementById('modal-btn');
  const modal = document.getElementById('myModal');
  const closeModal = document.getElementsByClassName('close')[0];
  const themeToggle = document.getElementById('theme-toggle');

    modalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            // Dark theme
            document.body.style.backgroundColor = '#000';
            document.body.style.color = '#fff';
        } else {
            // Light theme
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#000';
        }
    });
});

// navbar close



// search bar  open
const searchInput = document.getElementById('searchInput');
  const searchIcon = document.getElementById('searchIcon');
  const popover = document.getElementById('popover');

  searchIcon.addEventListener('click', function() {
    if (searchInput.value.trim() === '') {
      popover.style.display = 'block';
    } else {
      popover.style.display = 'none';
    }
  });

  searchInput.addEventListener('input', function() {
    if (this.value.trim() === '') {
      popover.style.display = 'none';
    }
  });
// /search bar  close

const open = document.getElementById('open');
const close = document.getElementById('close');
const menu = document.getElementById('menu');


open.addEventListener('click', function(){
    menu.classList.add('right');
})

close.addEventListener('click',function () {
  menu.classList.remove('right');
  
})


//  search bar is close



// carousel part is open
let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);

    showSlide(currentSlide);
// carousel part is close



document.addEventListener("DOMContentLoaded", function () {
  const excarouselInner = document.querySelector('.excarousel-inner');
  const exindicators = document.querySelectorAll('.exindicator');
  let excurrentIndex = 0;
  const extotalItems = document.querySelectorAll('.excarousel-item').length;

  function exupdateCarousel() {
      excarouselInner.style.transform = `translateX(-${excurrentIndex * 100}%)`;
      exindicators.forEach((exindicator, index) => {
          exindicator.classList.toggle('active', index === excurrentIndex);
      });
  }

  exindicators.forEach((exindicator, index) => {
      exindicator.addEventListener('click', () => {
          excurrentIndex = index;
          exupdateCarousel();
      });
  });
});





