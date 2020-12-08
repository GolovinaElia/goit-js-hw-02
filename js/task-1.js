const logItems = function (array) {
    console.log(array);
    for (let i = 0; i < array.length; i += 1){
        let answer = (`${i+1} - ${array [i]}`);
         console.log(answer);
    }
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);