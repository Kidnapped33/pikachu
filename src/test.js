import string from './css.js'
let n = 1
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)

let time = 50

const run = () => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight
}
//设置间隔

const play = () => {
    return setInterval(run, time)
}

const pause = () => {
    window.clearInterval(id)
}

let id = play()

btnPause.onclick = () => {//解除计时器
    pause()
}

btnPlay.onclick = () => {
    id = play()
}

btnSlow.onclick = () => {
    pause()
    time = 100
    id = play()
}

btnNormal.onclick = () => {
    pause()
    time = 50
    id = play()
}
btnFast.onclick = () => {
    pause()
    time = 0
    id = play()
}