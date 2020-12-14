let input;
const numbers = [];
let total = 0;
let message;

do {
  input = prompt("Введите число");
  if (!Number.isNaN(Number(input)) && Number(input) !== 0) {
    numbers.push(Number(input));
  } else {
    console.log("Было введено не число, попробуйте еще раз");
  }
} while (input !== null);

if (numbers.length !== 0) {
  for (const number of numbers) {
    console.log(numbers);
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  console.log("Введите минимум одно число");
}
