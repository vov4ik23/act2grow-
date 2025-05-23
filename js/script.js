const bannerSlides = document.querySelectorAll('.banner-slide');
const prevBannerBtn = document.querySelector('.banner-btn.prev-button');
const nextBannerBtn = document.querySelector('.banner-btn.next-button');
const sortButton = document.getElementById('sort-by-price');
  const bannerSlider = document.querySelector('.banner-slider');

  let bannerIndex = 0;

  function showBannerSlide(index) {
    bannerSlides.forEach(slide => slide.classList.remove('active'));
    bannerSlides[index].classList.add('active');
  }

  prevBannerBtn.addEventListener('click', () => {
    bannerIndex = (bannerIndex - 1 + bannerSlides.length) % bannerSlides.length;
    showBannerSlide(bannerIndex);
  });

  nextBannerBtn.addEventListener('click', () => {
    bannerIndex = (bannerIndex + 1) % bannerSlides.length;
    showBannerSlide(bannerIndex);
  });

  sortButton.addEventListener('click', () => {
    const slides = Array.from(document.querySelectorAll('.banner-slide'));

    const sortedSlides = slides.sort((a, b) => {
      const priceA = parseInt(a.querySelector('.product-price').textContent.replace(/\D/g, ''));
      const priceB = parseInt(b.querySelector('.product-price').textContent.replace(/\D/g, ''));
      return priceA - priceB;
    });

    sortedSlides.forEach(slide => bannerSlider.insertBefore(slide, bannerSlider.querySelector('.banner-btn')));

    bannerIndex = 0;
    showBannerSlide(bannerIndex);
  });
