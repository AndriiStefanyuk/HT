/*Практика з презинтації
a = 6; b = 3; a > b
a = 3; b = 3; a == b
a = 3; b = 6; a != b
a = 1; b=””; a === b
‘B’ > ‘A’, ‘a’ > ‘Z’
a = false; b = 0; a>=b
(‘2’ === 2) ? ‘ok’ : ‘not’
*/

let a = 6;
let b = 3;
console.log(a > b); //true

a = 3;
b = 3;
console.log(a == b); //true

a = 3;
b = 6;
console.log(a != b); //true

console.log("B" > "A"); //true

console.log("a" > "Z"); //true

a = false;
b = 0;
console.log(a >= b); //true

console.log("2" === 2 ? "ok" : "not"); //not
console.log("1" + 1 + 0); //110

// 1. Чому будуть рівні наступні вирази
// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// 7 / 0
// " -9\n" + 5
// " -9\n" - 5
// 5 && 2
// 2 && 5
// 5 || 0
// 0 || 5
// null + 1
// undefined + 1
// null == "\n0\n"
// +null == +"\n0\n"

console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //-1
console.log(true + false); //1
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2); // NaN
console.log(7 / 0); // Infinity
console.log(" -9\n" + 5); //  -9 і пятірка в новому рядку;
console.log(" -9\n" - 5); //-14
console.log(5 && 2); //2
console.log(2 && 5); // 5
console.log(5 || 0); // 5
console.log(0 || 5); // 5
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(null == "\n0\n"); //false
console.log(+null == +"\n0\n"); // true
