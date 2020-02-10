//Создать функцию getMaxDigit(number) – которая получает любое число и выводит 
//самую большую цифру в этом числе. Примеры: 1236 -> 6, 987 -> 9, 385 -> 8


function getMaxDigit(number) {   
    let temp = 0;
    while (number >= 10) {
        temp1 = number % 10;
        if (temp < temp1) {
            temp = temp1;
        }
        number = parseInt(number / 10);
    }
    return temp < number ? number : temp;
}

console.log(getMaxDigit(385));


// 2 Создать функцию, которая вычисляет степень числа. Не используя Math.pow и **. 
//Используйте цикл


function myPow(num, exponent) {
    let result = 1;
    if (exponent === 1) {
        return num;
    } else if (exponent === 0) {
        return 1;
    } else {
        for (let i = 1; i <= exponent; i++) {
            result *= num;
        }
    }
    return result;
}

console.log(myPow(3, 8));

//3 Создать функцию, которая форматирует имя, 
//делая первую букву заглавной. ("влад" -> "Влад", "вЛАД" -> "Влад" и так далее);

function editName(name) {
    name = name.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1);
    return name;
}

console.log(editName("вЛАД"));

//4 Создать функцию, которая вычисляет сумму оставшуюся после оплаты 
//налога от заработной платы. (Налог = 18% + 1.5% -> 19.5%). Пример: 1000 -> 805


function getPureSalary(salary) {
    const TAX = 0.195;
    salary = salary - (salary * TAX);
    return salary;
}
console.log(getPureSalary(1000));

// 5Создать функцию, которая возвращает случайное 
//целое число в диапазоне от N до M. Пример: <сode>getRandomNumber(1, 10) -> 5

function getRandomNumber(start, end) {

    let num = Math.floor(Math.random() * (end - start + 1) + start);
    return num;
}

console.log(getRandomNumber(1, 10));

// 6 Создать функцию, которая считает сколько раз определенная
// буква повторяется в слове. Пример: countLetter("а", "Асталависта") -> 4

function countLetter(char, str) {
    
    let count = 0;
    let temp = str.toLowerCase();
    let tempChar = char.toLowerCase();    
    for (let i = 0; i < str.length; i++) {
        if (temp[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countLetter("а", "Асталависта"));


// 7 Создайте функцию конвертиующую доллары в гривны и наоборот в зависимости
// от наличия символа $ или UAH в строке. Пример: convertCurrency("100$") -> 2500 грн. 
//или convertCurrency("2500UAH") -> 100$
//Учтите, другие валюты не конвертируются, нужно выводить ошибку, 
//а так же регистр uah не имеет значения.

function convertCurrency(money) {
    let rate = 25;
    let strMoney = "";
    let currency = money.replace(parseInt(money).toString(),'');
    console.log(currency);
    
   if(money.indexOf('$') != -1){
        strMoney += money.slice(0, money.length -1);
        return (parseInt(strMoney) * rate) + "UAH";

    } else{
        strMoney += money.slice(0, money.length - 3);
        return (parseInt(strMoney) / rate) + "$";
       
    }
}

console.log(convertCurrency("100$"));


// 8 Создайте функцию генерации случайного пароля (только числа), длинна устанавливается 
//пользователем или по умолчанию = 8 символам.
//Пример: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124