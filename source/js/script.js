// background superior

const divisor = -70
const pixeles = 9.5
let resultadoDivisionSuperior = 0

const calculo = () => {
    let windowWidth = window.innerWidth
    resultadoDivisionSuperior = windowWidth / divisor
    let cantidadSuperior = resultadoDivisionSuperior * pixeles

    const background = document.getElementById('background')

    background.setAttribute('style', `transform: translateY(${cantidadSuperior}px)`)


}


window.addEventListener('resize', () => {
    calculo()

})

calculo()


// background inferior

const divisorInferior = 75
const pixelesInferior = 9.5
let resultadoDivisionInferior = 0

const calculoInferior = () => {
    let windowWidth = window.innerWidth
    resultadoDivisionInferior = windowWidth / divisorInferior
    let cantidadInferior = resultadoDivisionInferior * pixelesInferior

    const backgroundCierre = document.getElementById('backgroundCierre')

    backgroundCierre.setAttribute('style', `transform: translateY(${cantidadInferior}px)`)

}


window.addEventListener('resize', () => {
    calculoInferior()

})
calculoInferior()


// boton menu

const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menuBtn')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('visible')
})


// smooth scroll


function smoothScroll(target, duration) {
    let e = document.querySelector(target);
    let targetPosition = e.getBoundingClientRect().top + window.scrollY
    let startPosition = window.pageYOffset || window.scrollY;
    let substraction = 115
    let distance = targetPosition - startPosition - substraction;
    let startTime = null;

    function loop(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(loop);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    };

    requestAnimationFrame(loop);
}


// sobre mi

const aboutBtn = document.getElementById('aboutBtn')

aboutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.about', 1000)

})


// opinions

const opinionBtn = document.getElementById('opinionBtn')

opinionBtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.opinions', 1000)

})


// contacto

const contactBtn = document.getElementById('contactBtn')

contactBtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.connect', 1000)

})

// go up

const upBtn = document.getElementById('upBtn')

upBtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.up', 1000)

})

window.addEventListener('scroll', () => {
    upBtn.style.transition = 'all 1s'
    upBtn.style.opacity = '1'
})