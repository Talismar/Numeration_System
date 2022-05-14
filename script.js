import Numeration_System from "./Numeration_System.js"

const input01 = document.querySelector('#inp')
var subm = document.querySelector('#Subm')
var resul = document.querySelector('h2')

var a = new Numeration_System()

function verification(phrase) {
  input01.placeholder = phrase
  input01.style.display = 'inline'
  subm.style.display = 'inline'
  resul.innerHTML = ''
}

var condit = 0
function _value_() {

  if (condit == 1) {
    resul.innerHTML = a.binary_to_decimal(input01.value)
  }
  else if (condit == 2) {
    resul.innerHTML = a.binary_to_oct(input01.value)
  }
  else if (condit == 3) {
    resul.innerHTML = a.binary_to_hex(input01.value)
  }
  else if (condit == 4) {
    resul.innerHTML = a.octal_to_binary(input01.value)
  }
  else if (condit == 5) {
    resul.innerHTML = a.octal_to_decimal(input01.value)
  }
  else if (condit == 6) {
    resul.innerHTML = a.decimal_to_binary(input01.value)
  }
  else if (condit == 7) {
    console.log('7')
    resul.innerHTML = a.decimal_to_octal(parseInt(input01.value))
  }
  else if (condit == 8) {
    console.log('8')
    resul.innerHTML = a.decimal_to_hexadecimal(parseInt(input01.value))
  }
  else if (condit == 9) {
    resul.innerHTML = a.hexadecimal_to_binary(input01.value)
  }
  else if (condit == 10) {
    resul.innerHTML = a.hexadecimal_to_decimal(input01.value)
  }
  else {
    resul.innerHTML = ''
  }

  input01.value = ''
  input01.style.display = 'none'
  subm.style.display = 'none'
  resul.style.display = 'inline'

  condit = 0
}

function N_S() {
  subm.onclick = _value_

  var button01 = document.querySelector('#btn01')
  button01.onclick = function () {
    verification('Binary to Decimal')
    condit = 1
  }

  var button02 = document.querySelector('#btn02')
  button02.onclick = function () {
    verification('Binary to Octal')
    condit = 2
  }

  var button03 = document.querySelector('#btn03')
  button03.onclick = function () {
    verification('Binary to Hexadecimal')
    condit = 3
  }

  var button04 = document.querySelector('#btn04')
  button04.onclick = function () {
    verification('Octal to Binary')
    condit = 4
  }

  var button05 = document.querySelector('#btn05')
  button05.onclick = function () {
    verification('Octal to Decimal')
    condit = 5
  }

  var button06 = document.querySelector('#btn06')
  button06.onclick = function () {
    verification('Decimal to Binary')
    condit = 6
  }

  var button07 = document.querySelector('#btn07')
  button07.onclick = function () {
    verification('Decimal to Octal')
    condit = 7
  }

  var button08 = document.querySelector('#btn08')
  button08.onclick = function () {
    verification('Decimal to Hexadecimal')
    condit = 8
  }

  var button09 = document.querySelector('#btn09')
  button09.onclick = function () {
    verification('Hexadecimal to Binary')
    condit = 9
  }

  var button10 = document.querySelector('#btn10')
  button10.onclick = function () {
    verification('Hexadecimal to Decimal')
    condit = 10
  }
}

window.addEventListener('load', N_S)