let outputScreen = document.getElementById("output");

function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch{
        alert("Invalid operation");
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

let zequalTo = document.getElementById("kp-=")
document.body.addEventListener ('keyup', (e) => {
    console.log(e);
    if(e.key == "Enter") {return calculate()}
})

let zdel = document.getElementById("kp-del")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "Backspace") {return del()}
})

let zclear = document.getElementById("kp-cl")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "Backspace" && e.shiftKey == true) {return Clear()}
})

let zmodulus = document.getElementById("kp-%")
document.body.addEventListener ('keydown', (e) => {
    if(e.key == "%" && e.shiftKey == true) {return display('%')}
})

let zdivi = document.getElementById("kp-/")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "/") {return display('/')}
})

let zmult = document.getElementById("kp-*")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "*") {return display('*')}
})

let zsub = document.getElementById("kp--")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "-") {return display('-')}
})

let zadd = document.getElementById("kp-+")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "+") {return display('+')}
})

let zdot = document.getElementById("kp-.")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == ".") {return display('.')}
})

let znumzero = document.getElementById("kp-0")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "0") {return display('0')}
})

let znumone = document.getElementById("kp-1")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "1") {return display('1')}
})

let znumtwo = document.getElementById("kp-2")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "2") {return display('2')}
})

let znumthree = document.getElementById("kp-3")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "3") {return display('3')}
})

let znumfour = document.getElementById("kp-4")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "4") {return display('4')}
})

let znumfive = document.getElementById("kp-5")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "5") {return display('5')}
})

let znumsix = document.getElementById("kp-6")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "6") {return display('6')}
})

let znumseven = document.getElementById("kp-7")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "7") {return display('7')}
})

let znumeight = document.getElementById("kp-8")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "8") {return display('8')}
})

let znumnine = document.getElementById("kp-9")
document.body.addEventListener ('keyup', (e) => {
    if(e.key == "9") {return display('9')}
})
