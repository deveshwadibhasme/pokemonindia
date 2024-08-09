const dropMenu = document.querySelector('.pokedex-wrap')
const dexlang = document.querySelector('.pokedex-wrap ul')
const arrow = document.querySelector('.pokedex-wrap img')
const dexlanghover = document.querySelectorAll('.pokedex-wrap ul li')

dropMenu.addEventListener('mouseover', ()=>{
    dexlang.style.display = 'flex'
    arrow.style.transform = 'rotate(180deg)'
})
dexlang.addEventListener('mousedown', ()=>{
    dexlang.style.display = 'none'
    arrow.style.transform = 'unset'
})
dropMenu.addEventListener('touchstart', ()=>{
    dexlang.style.display = 'flex'
    arrow.style.transform = 'rotate(180deg)'
})
dexlang.addEventListener('touchend', ()=>{
    dexlang.style.display = 'none'
    arrow.style.transform = 'unset'
})

dexlanghover.forEach( e =>{
    e.addEventListener('mouseover',()=>{
        e.classList.add('hover')
    })
    e.addEventListener('mouseout',()=>{
        e.classList.remove('hover')
    })
    e.addEventListener('touchmove',()=>{
        e.classList.add('hover')
    })
    e.addEventListener('touchend',()=>{
        e.classList.remove('hover')
    })
});

