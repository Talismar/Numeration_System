export default class Numeration_System {
  /* Construtor onde eu gero as tabelas */
  constructor() {
    this.table_hex_to_binary = {}
    this.table_binary_to_hex = {}
    this.table_octal_to_binary = {}
    this.table_binary_to_octal = {}
    this.table_decimal_to_hex = {}

    var letter = ['A', 'B', 'C', 'D', 'E', 'F']
    var aux01 = 0 // hexadecimal
    var aux02 = 0 // octal
    var aux03 = 0 // decimal

    var a = ['0', '1']

    /* Alimento as tabelas */
    for (const i of a) {
      for (const j of a) {
        for (const k of a) {
          if (aux02 < 8) {
            this.table_octal_to_binary[aux02.toString()] = a[i] + a[j] + a[k]
            this.table_binary_to_octal[a[i] + a[j] + a[k]] = aux02.toString()
            aux02 += 1
          }
          for (const m of a) {
            if (aux01 > 9) {
              this.table_hex_to_binary[letter[aux01]] = a[i] + a[j] + a[k] + a[m]
              this.table_binary_to_hex[a[i] + a[j] + a[k] + a[m]] = letter[aux01]

              this.table_decimal_to_hex[aux03] = letter[aux01]
            }
            else {
              letter.unshift('')
              this.table_hex_to_binary[aux01.toString()] = a[i] + a[j] + a[k] + a[m]
              this.table_binary_to_hex[a[i] + a[j] + a[k] + a[m]] = aux01.toString()

              this.table_decimal_to_hex[aux03] = aux01
            }
            aux01 += 1
            aux03 += 1
          }
        }
      }
    }
  }

  /* Converte de binario para octal */
  binary_to_oct(num_bin) {
    /* Deixando no padrão de  3 bits */
    while (num_bin.length % 3 != 0) {
      num_bin = '0' + num_bin
    }

    var octal = []
    for (let i = 0; i < num_bin.length; i += 3) {
      // console.log(num_bin.slice(i, i + 3))
      octal.push(this.table_binary_to_octal[num_bin.slice(i, i + 3)])
    }
    return octal.join('')
  }

  /* Converte de binario para decimal */
  binary_to_decimal(num_bin) {
    var decimal = []

    var aux = num_bin.length - 1

    for (const i of num_bin) {
      if (i.toString() == '1') {
        decimal.push(Math.pow(2, aux))
      }
      aux -= 1
    }

    function my_sum(total, num,) {
      return total + num
    }

    if (decimal.length == 0) {
      return 0
    }
    else {
      return decimal.reduce(my_sum)
    }

  }

  /* Converte de binario para hexadecimal */
  binary_to_hex(num_bin) {
    /* Deixando no padrão de 4 bits */
    while (num_bin.length % 4 != 0) {
      num_bin = '0' + num_bin
    }

    var hex = []
    for (let i = 0; i < num_bin.length; i += 4) {
      hex.push(this.table_binary_to_hex[num_bin.slice(i, i + 4)])
    }

    return hex.join('')
  }

  /* Converte de octal para binario */
  octal_to_binary(num_oct) {
    for (let i of num_oct) {
      if ((parseInt(i) > 7)) {
        return `${num_oct} does not exist in the base 8`
      }
    }

    var binary = []

    for (const i of num_oct) {
      binary.push(this.table_octal_to_binary[i])
    }
    return binary.join(' ')
  }

  /* Converte de octal para decimal */
  octal_to_decimal(num_oct) {
    for (let i of num_oct) {
      if ((parseInt(i) > 7)) {
        return `${num_oct} does not exist in the base 8`
      }
    }

    var decimal = []

    var aux = num_oct.length - 1
    for (const i of num_oct) {
      decimal.push(parseInt(i) * Math.pow(8, aux))
      aux -= 1
    }

    function my_sum(total, num) {
      return total + num
    }

    return decimal.reduce(my_sum)
  }

  /* Converte fracionario */
  fractional_number(num, base) {
    var lista = []

    for (let i = 0; i < 5; i++) {
      num = parseFloat("0" + num)
      num = num * base

      if (num == 1) {
        lista.push(num.toString())
        break
      }

      let index = num.toString().indexOf(".")
      lista.push(num.toString().slice(0, index))
      num = parseFloat("0" + num.toString().slice(index,))
    }
    return lista.join("")
  }

  /* Converte de decimal para binario */
  decimal_to_binary(num_dec) {
    var binary = []

    if (num_dec.toString().includes('.')) {
      let index = num_dec.toString().indexOf('.')
      var frac = this.fractional_number(num_dec.toString().slice(index,), 2)
      num_dec = num_dec.toString().slice(0, index)
    }

    while (num_dec > 0) {
      binary.push(num_dec % 2)
      num_dec = Math.floor(num_dec / 2)
    }

    if (frac) {
      return binary.reverse().join('') + "." + frac
    }
    else {
      return binary.reverse().join('')
    }
  }

  /* Converte de decimal para octal */
  decimal_to_octal(num_dec) {
    var octal = []

    while (num_dec > 0) {
      octal.push(num_dec % 8)
      num_dec = Math.floor(num_dec / 8)
    }

    return octal.reverse().join('')
  }

  /* Converte de decimal para hexadecimal */
  decimal_to_hexadecimal(num_dec) {
    var hexadecimal = []

    while (num_dec > 15) {
      hexadecimal.push(num_dec % 16)
      num_dec = Math.floor(num_dec / 16)
    }

    hexadecimal.push(num_dec)

    var aux = 0
    for (let i of hexadecimal.reverse()) {
      hexadecimal[aux] = this.table_decimal_to_hex[i]
      aux += 1
    }


    return hexadecimal.join('')
  }

  /* Converte de hexadecimal para decimal */
  hexadecimal_to_decimal(num_hex) {
    var decimal = []

    var aux = num_hex.length - 1
    for (let i = 0; i < num_hex.length; i++) {
      /* Se for letra vai entrar no if para pega o valor da tabela */
      if (num_hex[i]) {
        for (var [key, value] of Object.entries(this.table_hex_to_binary)) {
          if (num_hex[i] == key) {
            decimal.push(this.binary_to_decimal(value) * Math.pow(16, aux))
          }
        }
      }
      aux -= 1
    }

    function my_sum(total, num) {
      return total + num
    }

    return decimal.reduce(my_sum)
  }

  /* Converte de hexadecimal para binario */
  hexadecimal_to_binary(num_hex) {
    var binary = []

    for (const i of num_hex) {
      binary.push(this.table_hex_to_binary[i])
    }

    return binary.join(' ')
  }
}

