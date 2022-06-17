function test(r, args) {
  console.log(args.length);
}

let a = ["010101"]
console.log(Array.from(a, x => Array.from(x, a => a + " ")));

let arr = [0, 0, 1, 1, 2]

if (arr.find(i => i > 1)) {
  console.log('Has');
}
// test(1, arr)