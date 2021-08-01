// Carousel
const productSlider = document.querySelector('.product-carousel')
const productImageWidth = document.querySelector('.product-img')
const leftBtn = document.querySelector('.carousel-arrow-left')
const rightBtn = document.querySelector('.carousel-arrow-right')

const maxScrollLeft = productSlider.scrollWidth - productSlider.clientWidth

productSlider.addEventListener('scroll', () => {
  console.log(productSlider.scrollLeft, maxScrollLeft)
  if (productSlider.scrollLeft > 10) {
    leftBtn.style.display = 'inline'
  }
  if (productSlider.scrollLeft > maxScrollLeft - 10) {
    rightBtn.style.display = 'none'
  }

  if (productSlider.scrollLeft < 10) {
    leftBtn.style.display = 'none'
  }

  if (productSlider.scrollLeft < maxScrollLeft - 10) {
    rightBtn.style.display = 'inline'
  }
})

rightBtn.addEventListener('click', () => {
  productSlider.scrollLeft += productSlider.clientWidth + 5
})

leftBtn.addEventListener('click', () => {
  productSlider.scrollLeft -= productSlider.clientWidth + 5
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
