//home work

// додавати елементи в масив через метод prompt() поки користував ненатисне cancel

let arr = [];
do {
  let message = prompt("введіть дані", "рара");
  arr.push(message);
} while (arr[arr.length - 1] !== null);
arr.pop();
console.log(arr);

// знайти суму елементів двовимірного масиву

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let sum = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(matrix[i][j]);
    sum += matrix[i][j];
  }
}
console.log(sum);

//розбити строку lorem по розділювачу ‘ ’ і вивести в консоль слова довжиною більше 5

let str =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas facere illum corrupti nam molestiae omnis\
 accusamus numquam dolorum itaque quasi, aspernatur perferendis, minus adipisci laudantium autem? ";
let arr_from_str = str.split(" ");
console.log(arr_from_str);
for (i = 0; i < arr_from_str.length; i++) {
  if (arr_from_str[i].length > 5) {
    let res_arr = [];
    res_arr.push(arr_from_str[i]);
    console.log(res_arr);
  }
}
// з використанням методу filter
str =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas facere illum corrupti nam molestiae omnis\
 accusamus numquam dolorum itaque quasi, aspernatur perferendis, minus adipisci laudantium autem? ";
arr_from_str = str.split(" ");
console.log(arr_from_str);
res_arr = arr_from_str.filter(function(num) {
  return num.length > 5;
});
console.log(res_arr);

//з використанням методу filter - arrow function
str =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas facere illum corrupti nam molestiae omnis\
 accusamus numquam dolorum itaque quasi, aspernatur perferendis, minus adipisci laudantium autem? ";
arr_from_str = str.split(" ");
console.log(arr_from_str);
res_arr = arr_from_str.filter(num => num.length > 5);
console.log(res_arr);

//дано масив [1, 9, 22, 7, 6] додати число 8 після 22

let arr_spl = [1, 9, 22, 7, 6];
arr_spl.splice(3, 0, 8);
console.log(arr_spl);

//написати функцію randomNumber(number) яка наповнює масив
//випадковими числами від 0 до 100, де number - довжина масиву
let arr_of_random_numbers = [];
function randomNumber(number) {
  for (let i = 0; i < number; i++) {
    let y = Math.floor(Math.random() * 101);
    arr_of_random_numbers.push(y);
  }
  console.log(arr_of_random_numbers.length);
  console.log(arr_of_random_numbers);
  return arr_of_random_numbers;
}
randomNumber(10);

//перевірити чи в масивові є число, яке вводиться через prompt()

let input = prompt("введи число", "13");
for (j = 0; j < arr_of_random_numbers.length; j++) {
  if (arr_of_random_numbers[j] == input) {
    console.log("Our Array has input data");
    break;
  } else if (
    j === arr_of_random_numbers.length - 1 &&
    arr_of_random_numbers[arr_of_random_numbers.length - 1] != input
  ) {
    console.log("matches was not found");
  }
}

// за допомогою методу forEach знайти найдовше слово в строці lorem

str =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas facere illum corrupti nam molestiae omnis\
 accusamus numquam dolorum itaque quasi, aspernaturhhfhhhfhf perferendis, minus adipisci laudantium autem? ";
arr_from_str = str.split(" ");
console.log(arr_from_str);
max_elem_lenth = -Infinity;
let index_number = 0;
arr_from_str.forEach(function(item, i) {
  if (item.length > max_elem_lenth) {
    max_elem_lenth = item.length;
    index_number = i;
  }
});
console.log(max_elem_lenth, arr_from_str[index_number]);

//за допомогою методу map створити масив квадратів масиву arr = [8, 6, 12, 10];

arr = [8, 6, 12, 10];
console.log(arr);
let squared_arr = arr.map(function(el) {
  return el ** 2;
});
console.log(squared_arr);
