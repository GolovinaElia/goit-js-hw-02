let input;
const numbers = [];
let total = 0;
while (true) {
    input = prompt('Введите число');
    if (input === null) {
        for (let i = 0; i < numbers.length; i += 1) {
         total += Number(numbers[i]);   
        }
        break;
    }
    else if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    } else {
        numbers.push(input);
    }
}
   console.log(numbers);
   console.log(`Общая сумма чисел равна ${total}`);