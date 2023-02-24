document.addEventListener('DOMContentLoaded', () => {

const sliderContainer = document.querySelector('.slider-container')
const sliderLine = document.querySelector('.slider')
const slide = document.querySelectorAll('.slide')
const width = document.querySelector('.slide').offsetWidth
const btnNext = document.querySelector('.arrow-next')
const btnPrev = document.querySelector('.arrow-back')
const dotsWrapper = document.querySelector('.dots')
const dot = document.querySelectorAll('.dot')


const dots = []

let index = 1
let canslide = true
let dotIndex = 0


sliderLine.style.transform = `translateX(-${width}px)`
sliderContainer.style.width = width + 'px'



function interval() {
  const interval = setInterval(() => {
      canslide = true
  }, 500);

  setInterval(() => {
      clearInterval(interval)
  }, 500);
}

function dotActive() {
  dots.forEach(items => {
    items.classList.remove('dot--active')
  })
  dots[dotIndex].classList.add('dot--active')
}


for (let i = 0; i < slide.length - 2; i++) {
    const createDot = document.createElement('div')

    createDot.setAttribute('data-slide', i + 1)
    createDot.classList.add('dot')

    if(i == 0){
      createDot.classList.add('dot--active')
    }

    dotsWrapper.append(createDot)
    dots.push(createDot)
}


dots.forEach(item => {
item.addEventListener('click', (e) => {
  const slideTo = e.target.getAttribute('data-slide')
  sliderLine.style.transition = `all 0.5s ease`

  index = slideTo
  dotIndex = slideTo - 1
  sliderLine.style.transform = `translateX(-${index * width}px)`

  dots.forEach(items => {
    items.classList.remove('dot--active')
  })
  item.classList.add('dot--active')

})
})


btnNext.addEventListener('click', () => {

  if(canslide == true) {
    
    canslide = false

    sliderLine.style.transition = `all 0.5s ease`
    if(index == slide.length - 1){
      false
    }else{
      index++
    }

    sliderLine.style.transform = `translateX(-${index * width}px)`

    if(dotIndex > slide.length - 4){
      dotIndex = 0
    }else{
      dotIndex++
    }

    jump()
    interval()
    dotActive()
    }

})

btnPrev.addEventListener('click', () => {

  if(canslide == true) {

    canslide = false

    sliderLine.style.transition = `all 0.5s ease`
    if(index <= 0){
      false
    }else{
      index--
    }

    sliderLine.style.transform = `translateX(-${index * width}px)`

    if(dotIndex < 1){
      dotIndex = slide.length - 3
    }else{
      dotIndex--
    }

    jump()
    interval()
    dotActive()

  }

})




function jump() {
  sliderLine.addEventListener('transitionend',() => {
    if(slide[index].id === 'first-clone'){
      index = 1
      sliderLine.style.transition = `none`
      sliderLine.style.transform = `translateX(-${index * width}px)`
    }else if(slide[index].id === 'last-clone'){
      index = slide.length - 2
      sliderLine.style.transition = `none`
      sliderLine.style.transform = `translateX(-${index * width}px)`
    }
  })
}









})