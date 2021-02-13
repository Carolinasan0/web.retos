const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    
    //console.log(window.innerHeight / 5 * 4)
    
    const triggerBottom = window.innerHeight / 5 * 4
    // window.innerHeight altura en px del viewport
    //método getBoundingClientRect devuelve el tamaño de un elemento y su posición relativa respecto a viewport.
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
         
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
        
    })
    
}