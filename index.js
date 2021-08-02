// Carousel
const productSlider = document.querySelector('.product-carousel')
const product = document.querySelector('.product')
const leftArrow = document.querySelector('.carousel-arrow-left')
const rightArrow = document.querySelector('.carousel-arrow-right')

const displayedProducts = Math.round(
  productSlider.offsetWidth / product.offsetWidth,
)

document
  .querySelector(`[data-index="${displayedProducts}"]`)
  .classList.add('active')

const removeActiveIndicator = () =>
  document
    .querySelector('.carousel-indicator.active')
    .classList.remove('active')

const addActiveIndicator = (index) =>
  document.querySelector(`[data-index="${index}"]`).classList.add('active')

productSlider.addEventListener('scroll', () => {
  const maxScrollLeft = productSlider.scrollWidth - productSlider.clientWidth
  const scrollLength = productSlider.scrollLeft

  // handle arrows
  if (scrollLength > 0) {
    leftArrow.classList.add('active')
  }
  if (scrollLength === maxScrollLeft) {
    rightArrow.classList.remove('active')
  }

  if (scrollLength === 0) {
    leftArrow.classList.remove('active')
  }

  if (scrollLength < maxScrollLeft) {
    rightArrow.classList.add('active')
  }

  const currentIndicator =
    displayedProducts + Math.round(scrollLength / product.offsetWidth)

  removeActiveIndicator()
  addActiveIndicator(currentIndicator)
})

rightArrow.addEventListener('click', () => {
  productSlider.scrollLeft += product.offsetWidth
})

leftArrow.addEventListener('click', () => {
  productSlider.scrollLeft -= product.offsetWidth
})
