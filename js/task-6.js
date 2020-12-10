let input;
const numbers = [];
let total = 0;
while (true) {
    input = prompt('Введите число');
    if (input === null) {
        break;
    }
    else if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    } else {
        for (let i = 0; i < numbers.lenght; i++);
        numbers.push(input);
        total += Number(input);
    }
}
   console.log(numbers);
   console.log(`Общая сумма чисел равна ${total}`);