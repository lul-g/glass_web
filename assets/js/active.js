let bod = document.getElementById('body')

function generateBuble() {
    let buble =''
    let num = 0
    for(let j =0; j < 30; j++) {
        let rand = Math.floor(Math.random() * (3) + 1)
        let sec = Math.floor(Math.random() * (5) + 5)
        let btm = Math.floor(Math.random() * (300 - 20 + 1) + 50)
        buble = `<div id=key${j} class=buble${rand} ></div>`
        bod.innerHTML += (buble)
        let pos = document.getElementById(`key${j}`)
        pos.style.left = `${num}px`
        pos.style.bottom = `${-btm}px`
        pos.style.animationDuration = `${sec}s` 
        num = num + 50
    }
}



generateBuble()