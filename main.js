let text = document.querySelectorAll('.text')
let close = document.querySelectorAll('.close')
let test = document.querySelector(".test")


let open = (x) => {
    close[x].addEventListener('click', e => {
        text[x].classList.toggle("text-visible")
        console.log(text[x].idList)
    })
}

open(0)
open(1)
open(2)