// Carousel
const productSlider = document.querySelector('.product-carousel')
const product = document.querySelector('.product')
const leftBtn = document.querySelector('.carousel-arrow-left')
const rightBtn = document.querySelector('.carousel-arrow-right')
const dots = [...document.querySelectorAll('.carousel-indicator')]

let currentDot = Math.round(productSlider.offsetWidth / product.offsetWidth)
dots[currentDot - 1].classList.add('active')

productSlider.addEventListener('scroll', () => {
  const maxScrollLeft = productSlider.scrollWidth - productSlider.clientWidth

  if (productSlider.scrollLeft > 0) {
    leftBtn.style.display = 'inline'
  }
  if (productSlider.scrollLeft === maxScrollLeft) {
    rightBtn.style.display = 'none'
  }

  if (productSlider.scrollLeft === 0) {
    leftBtn.style.display = 'none'
  }

  if (productSlider.scrollLeft < maxScrollLeft) {
    rightBtn.style.display = 'inline'
  }
})

rightBtn.addEventListener('click', () => {
  productSlider.scrollLeft += product.offsetWidth
  dots[currentDot - 1].classList.remove('active')
  dots[currentDot].classList.add('active')
  currentDot += 1
})

leftBtn.addEventListener('click', () => {
  productSlider.scrollLeft -= product.offsetWidth
  dots[currentDot - 1].classList.remove('active')
  dots[currentDot - 2].classList.add('active')
  currentDot -= 1
})

// Accordion

const details = document.querySelector('details')
const plusBtn = document.querySelector('.summary-icon-plus')
const minusBtn = document.querySelector('.summary-icon-minus')

details.addEventListener('toggle', (event) => {
  if (details.open) {
    plusBtn.style.display = 'none'
    minusBtn.style.display = 'inline-block'
  } else {
    plusBtn.style.display = 'inline-block'
    minusBtn.style.display = 'none'
  }
})
