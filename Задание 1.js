let value = prompt("Введите значение");
let number = +value;

if (isNaN(number)) {
    console.log("Упс, кажется, вы ошиблись");
} else if (typeof number === 'number') {
    if (number % 2 == 0) {
        console.log("Число чётное");
    } else {
        console.log("Число нечётное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}