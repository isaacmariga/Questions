let text = document.querySelectorAll('.text')
let close = document.querySelectorAll('.close')
let test = document.querySelector(".test")
let def = 0


// let open = (x) => {
//     close[x].addEventListener('click', e => {
//         text[x].classList.toggle("text-visible")
//             // let choice = close.get
//     })
// }

// open(1)

close[1].addEventListener('click', e => {
    console.log(close.indexOf("click"))
})