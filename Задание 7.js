let arr = [1, 2, 3, 0, 'a']; //Массив

let evenCount = 0; // Количество четных чисел
let oddCount = 0; // Количество нечетных чисел
let zeroCount = 0; // Количество нулей

arr.forEach(function(item) {
    if (typeof item === 'number' && !isNaN(item)) { // Проверяем, что элемент является числом и не NaN
        if (item === 0) {
            zeroCount++;
        } else if (item % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
});

console.log('Четные: ' + evenCount);
console.log('Нечетные: ' + oddCount);
console.log('Нули: ' + zeroCount);