const dropMenu = document.querySelector('.drop-lang')
const langMenu = document.querySelector('.drop-lang ul')
const arrow = document.querySelector('.drop-lang img')
const langMenuHover = document.querySelectorAll('.drop-lang ul li')

dropMenu.addEventListener('mouseover', ()=>{
    langMenu.style.display = 'flex'
    arrow.style.transform = 'rotate(180deg)'
})
dropMenu.addEventListener('mousedown', ()=>{
    langMenu.style.display = 'none'
    arrow.style.transform = 'unset'
})
dropMenu.addEventListener('touchdown', ()=>{
    langMenu.style.display = 'flex'
    arrow.style.transform = 'rotate(180deg)'
})
langMenu.addEventListener('touchup', ()=>{
    langMenu.style.display = 'none'
    arrow.style.transform = 'unset'
})

langMenuHover.forEach( e =>{
    e.addEventListener('mouseover',()=>{
        e.classList.add = 'hover'
    })
})
