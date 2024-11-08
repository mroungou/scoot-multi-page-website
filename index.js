const nav = document.getElementById('nav');

/* opens and closes the faq accordions */
document.querySelectorAll('.accordion').forEach(faq => {
    faq.addEventListener('click', () =>  {
        faq.classList.toggle('active')
    const panel = faq.nextElementSibling

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null
    } else {panel.style.maxHeight = panel.scrollHeight + "rem"}
    })
}); 


document.getElementById('open-menu').addEventListener('click', () => nav.classList.add('menu-open'));

document.getElementById('close-menu').addEventListener('click', () => nav.classList.remove('menu-open'))