const string = `
我们又见面啦，今天我们来制作一只可爱的皮卡丘吧~~~

.skin * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.skin *::before,
.skin *::after {
    box-sizing: border-box;
}
.skin {
    background-color: #ffe600;
    min-height: 50vh;
    position: relative;
}

.nose {
    width: 15px;
    height: 15px;
    background-color: #000;
    border-radius: 0 85% 0 0;
    transform: rotate(-45deg);
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -8px;
    z-index: 1;
}

@keyframes wave {
    0% {
        transform: rotate(-45deg);
    }

    33% {
        transform: rotate(-55deg);
    }

    66% {
        transform: rotate(10deg);
    }

    100% {
        transform: rotate(-45deg);
    }
}

.nose:hover {
    animation: wave 100ms infinite;
}

.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    background-color: #3f3e3e;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
}

.eye.eye1 {
    transform: translateX(100px);
}

.eye.eye2 {
    transform: translateX(-100px);
}

.eye::before {
    content: '';
    display: block;
    width: 28px;
    height: 28px;
    background-color: #fff;
    border-radius: 50%;
    border: 3px solid #000;
    position: absolute;
    top: 0px;
    left: 10px;
}

.face {
    border: 3px solid #000000;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: #fc0d1c;
    position: absolute;
    top: 200px;
    left: 50%;
    margin-left: -44px;
}

.face1 {
    transform: translateX(-180px);
}

.face2 {
    transform: translateX(180px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 170px;
    left: 50%;
    margin-left: -100px;
}

.up {
    border-bottom: 3px solid #000;
    background-color: #fee433;
    width: 100px;
    height: 30px;
}

.mouth1 {
    border-left: 3px solid #000;
    border-radius: 0% 0% 0% 80%;
    position: absolute;
    left: 0px;
    top: 3px;
    transform: rotate(-20deg);
    z-index: 1;
}

.mouth2 {
    border-right: 3px solid #000;
    border-radius: 0% 0% 80% 0%;
    position: absolute;
    left: 50%;
    top: 3px;
    transform: rotate(20deg);
    z-index: 1;
}

.down {
    width: 160px;
    height: 185px;
    position: absolute;
    top: 9px;
    left: 20px;
    overflow: hidden;
}

.yuan1 {
    border: 3px solid #000;
    width: 130px;
    height: 374px;
    margin-top: -275px;
    margin-left: 50%;
    border-radius: 100% 100% 100% 100%;
    background-color: #98000A;
    position: absolute;
    top: 80px;
    left: -65px;
    overflow: hidden;
}

.yuan2 {
    border: 0px solid palevioletred;
    background-color: rgb(255, 71, 96);
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 50%;
}
`
export default string;