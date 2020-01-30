// 1. Перевірити чи число знаходиться в діапазоні від 25 до 99 включно (25 і 99
//   входять в діапазон). Число ввести за допомогою prompt. Якщо відвідувач ввів
//   число не з діапазону - попросити ввести ще раз, і так далі. Цикл повинен питати
//   число поки відвідувач не введе число з діапазону, або не натисне кнопку Cancel
//   (ESC).

let entered_data;
do {
  entered_data = prompt("Please enter a number");
  let number = parseInt(entered_data);
  if (number >= 25 && number <= 99) {
    alert(`your number is fine`);
    break;
  } else if (
    (isNaN(number) && entered_data !== null) ||
    number <= 25 ||
    number >= 99
  ) {
    alert("You wrote wrong number, try again");
  } else {
    break;
  }
} while (entered_data !== null);

// 2. Змініти if / else, на switch
// function chainToSwitch(val) {
//  var answer = "";
// if (val === "bob") {
//  answer = "Marley";
//  } else if (val === 42) {
//  answer = "The Answer";
//  } else if (val === 1) {
//  answer = "There is no #1";
//  } else if (val === 99) {
//  answer = "Missed me by this much!";
//  } else if (val === 7) {
//  answer = "Ate Nine";
//  }
// return answer;
// }
// chainToSwitch(7);
//

function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  console.log(answer);
  return answer;
}
chainToSwitch(7);

// 3. Переписати умовний оператор через тернарний
// function findGreater(a, b) {
//  if(a > b) {
//  return "a is greater";
//  }
//  else {
//  return "b is greater";
//  }
// }

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
console.log(findGreater(7, 3));
console.log(findGreater(3, 7));

// 4. Вивести в консоль через цикл цифри від 10 до 0

//варіант 1
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//варіант 2

let arrReverse = [];
for (let i = 0; i <= 10; i++) {
  arrReverse.push(i);
}
console.log(arrReverse.reverse());

// 5. Написати функцію яка приймає два параметри range(a, b) і виводить непарні
// числа від a до b. Зробити перевірку щоб b було більше a

function isOdd(a, b) {
  let strOfOddNumbers = "";
  if (a >= b) {
    alert(`B should be bigger than A`);
  } else {
    for (let i = a; i <= b; i++)
      if (i % 2 === 1) {
        strOfOddNumbers += i + ", ";
      }
  }
  console.log(strOfOddNumbers);
}
isOdd(5, 31);
isOdd(10, 30);

//ПРАКТИКА З ПРЕЗЕНТАЦІЇ

// написати оператор if..else який примає значення з prompt і виводить в консоль
// - 1, якщо значення більше нуля,
// - -1, якщо значення менше нуля,
// - 0, якщо значення дорівнює нулю.

let message = prompt("input your info", "number");
if (message != null) {
  if (message > 0) {
    console.log("1");
  } else if (message > 0) {
    console.log("-1");
  } else if (message == 0) {
    console.log("0");
  }
} else {
  console.log("fatal_error");
}

// ● переписати в тернарний оператор
// var a = 1;
// var n;
// if(a > 0) { n = true; }
// else { n=false; }

var a = -11;
let n = a > 0 ? true : false;
console.log(n);

a = 5;
let b = 3;

console.log(a > b && a === b); //false
console.log(true && 0 && "a" < "Z"); //0
console.log(a > b || true || "2" == 2 || false == ""); //true
console.log(a < b && 0 == false); //false
console.log(!(2 == 2) || (true && "")); // ""

// ● За допомогою конструкції switch записати такі умови:
// - якщо ввели 1, то вивести в консоль ‘a’
// - якщо ввели 2 - ‘b’
// - якщо ввели 3 - ‘c’
// - інакше - ‘z’
let data = 3;
switch (data) {
  case 1:
    console.log("a");
    break;
  case 2:
    console.log("b");
    break;
  case 3:
    console.log("c");
    break;
  default:
    console.log("z");
}

// вивести в консоль за допомогою циклу квадрати чисел від 1 до 9 // 1,4,9,...81

for (let i = 1; i <= 9; i++) {
  console.log(i * i + ",");
}

//вивести в консоль за допомогою циклу while квадрати чисел від 1 до 9
let j = 1;
while (j <= 9) {
  console.log(j * j);
  j++;
}

//функція приймає два параметри(числа) і повертає більший з них

function biggerNumber(a, b) {
  return a > b ? `A is bigger ${a}` : `B is bigger ${b}`;
}
console.log(biggerNumber(45, 4));
console.log(biggerNumber(4, 56));
