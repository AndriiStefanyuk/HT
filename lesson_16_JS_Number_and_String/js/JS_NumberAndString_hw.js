/*1.Написати функцію, яка примає два параметри trimString(str, maxlength). Функція перевіряє довжину рядка str,
 і якщо вона перевершує maxlength -замінює кінець str на "...", так щоб її довжина стала дорівнює maxlength.*/

function trimString(str, maxlength) {
  let endOfTheString = "...";
  let resultStr = "";
  if (str.length > maxlength) {
    resultStr = str.substr(0, maxlength - 3) + endOfTheString;
  } else {
    resultStr = str.substr(0, maxlength - 3);
  }
  return resultStr;
}
console.log(trimString("string 15 sumbols", 10));
console.log(trimString("string 15 sumbols", 30));
console.log(trimString("string 15", 10));

//2.Написати функцію пошуку, яка примає два параметри searchString(str, word). Повертає всі входженя підстроки в строку
// let quontityOfMaches = "";
// function searchString(str, word) {
//   console.log(word);
//   quontityOfMaches = str.match(/word/g);
//   console.log(quontityOfMaches);
//   return quontityOfMache;
// }

// console.log(
//   searchString(
//     `Open the browser.
//  select developer.
// From developer, select
// `,
//     "select"
//   )
// );

function searchString(str, word) {
  const reg = new RegExp(word, "g");
  let quontityOfMaches = str.match(reg);
  return quontityOfMaches;
}
console.log(
  searchString(
    `Open the browser.
select developer.
From developer, select 
`,
    "select"
  )
);

/*3.Написати функцію diffDate(date1, date2), яка приймає дві дати і вивести в консоль скільки пройшло днів, 
 годин з однієї дати до іншої*/

function diffDate(date1, date2) {
  // console.log(typeof date1);
  // console.log(typeof date2);
  // let firstDateInMsec = Date.parse(date1);
  // console.log(firstDateInMsec);
  let firstDateInMsec = date1.getTime();
  // console.log(secondDateInMsec);
  // let secondDateInMsec = Date.parse(date2);
  // console.log(secondDateInMsec);
  let secondDateInMsec = date2.getTime();
  // console.log(secondDateInMsec);
  let diffDate = secondDateInMsec - firstDateInMsec;
  const msecInDay = 24 * 60 * 60 * 1000;
  const msecInHour = 60 * 60 * 1000;
  let quontityOfDay = Math.floor(diffDate / msecInDay);
  let quontityOfHour = diffDate % msecInHour;
  console.log(quontityOfDay);
  console.log(quontityOfHour);
  console.log(`Пройшло ${quontityOfDay} днів і ${quontityOfHour} годин`);
  return diffDate;
}

console.log(diffDate(new Date("Mar 25 2015"), new Date("Jan 28 2016")));
// console.log(diffDate("Mar 25 2015", "Jan 28 2016"));



//Практика з презентації

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

// /*є строка ‘lorem ipsum is simply dummy’, зробити нову строку, щоб перше
// слову було з великої літери*/

let str = "lorem ipsum is simply dummy";
console.log(str.substring(0, 1).toUpperCase() + str.substring(1));

// //● функція приймає дві строки і повертає більшу з них

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
