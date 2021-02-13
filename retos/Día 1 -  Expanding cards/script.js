const panels = document.querySelectorAll('.panel'); //selecciono todos los elementos con .panel

panels.forEach((panel) => {
    panel.addEventListener('click', () => { //al hacer click llame remove 
        removeActiveClasses()
        panel.classList.add('active');
    })

})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
