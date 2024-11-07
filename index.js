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
