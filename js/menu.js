//menu hamburguesa
const toggleButton = document.getElementById('button-menu')
const navWrapper = document.querySelector('.header-nav')
const navItem = document.querySelectorAll('.header-nav-item')

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('close')
    console.log(navWrapper)
    navWrapper.classList.toggle('prueba')
})

navWrapper.addEventListener('click', e => {
    if (e.target.classList[0] === 'header-nav') {
        navWrapper.classList.toggle('prueba')
        toggleButton.classList.remove('close')
    }
})

navItem.forEach((item) => {
    item.addEventListener('click', e => {
        console.log('entor')
        navWrapper.classList.toggle('prueba')
        toggleButton.classList.remove('close')
    })
})