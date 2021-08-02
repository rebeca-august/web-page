// Carousel
const productSlider = document.querySelector('.product-carousel')
const product = document.querySelector('.product')
const leftBtn = document.querySelector('.carousel-arrow-left')
const rightBtn = document.querySelector('.carousel-arrow-right')

const displayedProducts = Math.round(
  productSlider.offsetWidth / product.offsetWidth,
)

document
  .querySelector(`[data-index="${displayedProducts}"]`)
  .classList.add('active')

const removeActiveDot = () =>
  document
    .querySelector('.carousel-indicator.active')
    .classList.remove('active')

const addActiveDot = (index) =>
  document.querySelector(`[data-index="${index}"]`).classList.add('active')

productSlider.addEventListener('scroll', () => {
  const maxScrollLeft = productSlider.scrollWidth - productSlider.clientWidth
  const scrollLength = productSlider.scrollLeft

  // handle arrows
  if (scrollLength > 0) {
    leftBtn.style.display = 'inline'
  }
  if (scrollLength === maxScrollLeft) {
    rightBtn.style.display = 'none'
  }

  if (scrollLength === 0) {
    leftBtn.style.display = 'none'
  }

  if (scrollLength < maxScrollLeft) {
    rightBtn.style.display = 'inline'
  }

  const currentDot =
    displayedProducts + Math.round(scrollLength / product.offsetWidth)

  removeActiveDot()
  addActiveDot(currentDot)
})

rightBtn.addEventListener('click', () => {
  productSlider.scrollLeft += product.offsetWidth
})

leftBtn.addEventListener('click', () => {
  productSlider.scrollLeft -= product.offsetWidth
})

// Accordion

const details = document.querySelectorAll('details')

details.forEach((detail) => {
  detail.addEventListener('toggle', ({ target }) => {
    const plusBtn = target.querySelector('.summary-icon-plus')
    const minusBtn = target.querySelector('.summary-icon-minus')

    if (detail.open) {
      plusBtn.style.display = 'none'
      minusBtn.style.display = 'inline-block'
    } else {
      plusBtn.style.display = 'inline-block'
      minusBtn.style.display = 'none'
    }
  })
})
