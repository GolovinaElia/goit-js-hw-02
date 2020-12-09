// let input;
// let total = 0;
// do {
//     input = prompt('Введите число');
//     if (isNaN(input)) {
//         alert('Было введено не число, попробуйте еще раз');
//     }
//        else if (input === null) {
//             const numbers = [];
//             for (let i = 0; i < 5; i += 1) {
//                 numbers.push(`${i}`);
//             }
//         } else {
//             total += Number(input);
//         }
//     }
//  while (input !== null);
// console.log(`Общая сумма чисел равна ${total}`);  

let input;
let total = 0;
do {
    input = prompt('Введите число');
    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
    }
       else if (input === null) {
            const numbers = [];
            for (let i = 0; i < 2; i += 1) {
                numbers[i]=i;
                console.log(numbers);
            }
        } else {
            total += Number(input);
        }
    }
 while (input !== null);
console.log(`Общая сумма чисел равна ${total}`);  
