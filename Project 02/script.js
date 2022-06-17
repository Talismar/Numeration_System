function find_expression(len_bit, args) {
  if (args.length != (Math.pow(2, len_bit))) {
    window.alert('Error!\n' + 'Array size must be equal to ' + (Math.pow(2, len_bit)));
    return
  }
  if (args.find(i => i > 1)) {
    window.alert('Error!\n' + 'There is an unwanted number in your array!');
    return
  }

  var list_ = ["0", "1"]
  var bits = []
  var letter = ["A", "B", "C", "D"]

  for (i of list_) {
    if (len_bit == 1) {
      bits.push(`${i}`)
      continue
    }

    for (j of list_) {
      if (len_bit == 2) {
        bits.push(`${i}${j}`)
        continue
      }

      for (k of list_) {
        if (len_bit == 3) {
          bits.push(`${i}${j}${k}`)
          continue
        }

        for (l of list_) {
          if (len_bit == 4) {
            bits.push(`${i}${j}${k}${l}`)
            continue
          }
        }
      }
    }
  }

  let show = document.querySelector('.show')
  show.innerHTML = ""
  for (let i = 0; i < len_bit; i++) {
    show.innerHTML += Array.from(letter[i], x => ` ${x}`)
  }

  show.innerHTML += " X <br>"

  for (let i = 0; i < bits.length; i++) {
    show.innerHTML += `${bits[i].split('').join(" ")} ${args[i]}<br>`
  }

  var res = []
  for (let i = 0; i < args.length; i++) {
    if (args[i] == 1) {
      for (let j = 0; j < bits[i].length; j++) {
        if (bits[i][j] == "0") {
          res.push(`${letter[j]}'`)
          continue
        }
        res.push(letter[j])
      }
    }
  }

  let expr = ""
  let aux = 0
  for (let i = 0; i < args.length; i++) {
    if (args[i] == 1) {
      expr += `(${res.slice(aux, aux + len_bit).join(".")}) + `
      aux += len_bit
    }
  }

  document.querySelector("h2").innerHTML = "X = " + expr.slice(0, -2)
}

function main() {
  let num_bits = document.querySelector("#num_bits")
  let matriz_x = document.querySelector("#number_x")

  let arr = Array.from(matriz_x.value, x => parseInt(x))

  find_expression(parseInt(num_bits.value), arr)
  // find_expression(3, [1, 1, 0, 0, 1, 1, 0, 0])
}