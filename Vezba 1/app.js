// niz = [3, 5, 21, 83, 12, 93, 12, 43, 28, 63, 1]

// result = 0

// for (i=0; i<niz.length; i++) {
//     result += niz[i]
// }
// console.log(result)
// console.log(result/niz.length);

howMuch = parseInt(prompt("How many numbers?"));
niz = [];

for (i=0; i<howMuch; i++) {
    whatNum = parseInt(prompt("What number?"));
    niz.push(whatNum);
}
console.log(niz);