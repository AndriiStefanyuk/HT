//функція приймає межі випадкового числа (min, max) і вивести в консоль парне чи непарне воно

function someRandomInt(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(num);
  return num;
}

function isOdd(num) {
  if (num % 2) {
    console.log(`Number is odd`);
    return `Number is odd`;
  } else {
    console.log(`Number is NOT odd`);
    return `Number NOT is odd`;
  }
}
function isEven(num) {
  if (num % 2) {
    console.log(`Number is NOT even`);
    return `Number is NOT even`;
  } else {
    console.log(`Number is even`);
    return `Number is even`;
  }
}
someRandomInt(5, 15);
isOdd(someRandomInt(7, 19));
isEven(someRandomInt(7, 19));

/*є строка ‘lorem ipsum is simply dummy’, зробити нову строку, щоб перше
слову було з великої літери*/

let str = "lorem ipsum is simply dummy";
console.log(str.substring(0, 1).toUpperCase() + str.substring(1));

//● функція приймає дві строки і повертає більшу з них

function comparison(a, b) {
  if (a > b) {
    console.log(a);
  } else if (a < b) {
    console.log(b);
  } else {
    console.log("Strings are equal");
  }
}
comparison("c", "dfvdfvdvf");
comparison("d", "c");
comparison("d", "d");


