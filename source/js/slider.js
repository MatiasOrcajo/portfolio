const slider = document.querySelector('.slider')
let sliderSection = document.querySelectorAll('.slider-section')
let sliderSectionLast = sliderSection[sliderSection.length - 1]

const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

const next = () => {
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0]
    slider.style.marginLeft = '-200%'
    slider.style.transition = 'all 0.5s'
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = '-100%'
    }, 500)
}

btnRight.addEventListener('click', () => {
    next()
})

const prev = () => {
    let sliderSection = document.querySelectorAll('.slider-section')
    let sliderSectionLast = sliderSection[sliderSection.length - 1]
    slider.style.marginLeft = '0'
    slider.style.transition = 'all 0.5s'
    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = '-100%'
    }, 500)
}

btnLeft.addEventListener('click', () => {
    prev()
})