
// Button Home 1
let plusH1btn = document.getElementById("plusH1-btn")
let scorebtn = document.getElementById("score-btn")
let count = 0

function plus1(){
    count += 1
    scorebtn.textContent = count
}
//Button Home 2
let plusH2btn = document.getElementById("plusH2-btn")

function plus2(){
    count += 2
    scorebtn.textContent = count
    
}
//Button Home 3
let plusH3btn = document.getElementById("plusH3-btn")

function plus3(){
    count += 3
    scorebtn.textContent = count
}

//-------------Guest Line---------

let plusHG1btn = document.getElementById("plusG1-btn")
let scorebtnG = document.getElementById("score-btnG")
let countG = 0

function plus1G(){
    countG += 1
    scorebtnG.textContent = countG 
}

function plus2G(){
    countG += 2
    scorebtnG.textContent = countG
}

function plus3G(){
    countG += 3
    scorebtnG.textContent = countG
}