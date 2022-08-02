const header = document.querySelector('#header')


window.addEventListener('scroll', () => {
    let scrollTo = window.scrollY
    scrollTo >= 150 ? header.classList.add('active') : header.classList.remove('active')
})