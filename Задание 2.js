let x;

x = 10;
checkType(x);

x = "Привет";
checkType(x);

x = true;
checkType(x);

x = undefined;
checkType(x);

function checkType(x) {
    if (typeof x === 'number') {
        console.log(x + " — число");
    } else if (typeof x === 'string') {
        console.log(x + " — строка");
    } else if (typeof x === 'boolean') {
        console.log(x + " — логический тип");
    } else {
        console.log("Тип " + x + " не определён");
    }
}