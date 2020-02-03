//Создайте 3 переменных со следующими значениями: 15.678, 123.965, 90.2345. 
//Эти переменные хранят 
//цены на товары. Придумайте им названия (товар можно выдумать любой)

let tomatoPrice = 15.678;
let applePrice = 123.965;
let potatoPrice = 90.2345;

console.log(tomatoPrice);
console.log(applePrice);
console.log(potatoPrice);


//Используя встроенный объект Math – выведите максимальное число
let maxPrice =  Math.max(tomatoPrice, applePrice, potatoPrice);
console.log("max price is: ", maxPrice);


//Используя встроенный объект Math – выведите минимальное число
let minPrice =  Math.min(tomatoPrice, applePrice, potatoPrice);
console.log("min price is: ", minPrice);

//Сложите стоимость всех товаров, поместите её в переменную и выведите эту сумму
let sum = tomatoPrice + applePrice + potatoPrice;
console.log("total sum is = ", sum);

//Сложите только целую часть стоимости всех товаров (представьте что мы решили упразднить 
//копейки в наших товарах) и выведите это значение.
//Округление использовать в МЕНЬШУЮ сторону.
let sumWithoutCoins = Math.floor(sum);
console.log("Total price without coins is = ", sumWithoutCoins);

//Выведите сумму товаров округленную до сотен. (Например если получилось 260, то выведите 300)
let priceRoundHundred = (Math.ceil(sum / 100)) * 100;
console.log("полная стоимость товара, округленная до сотых = ", priceRoundHundred);

//Выведите булевое значение: является сумма всех товаров 
//(округленная в меньшую сторону) четным или нечетным числом?
let sumFloor = Math.floor(sum);
if (sumFloor % 2 == 0) {
    console.log(sumFloor + " является четным числом");
} else {
    console.log(sumFloor + " является нечетным числом");
}


//Выведите сумму сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн.
let momey = 500;
let balance = momey - sum;
console.log("сумму сдачи, при оплате всех товаров = ", balance);


//Выведите среднее значение цен, округленное до второго знака после запятой
let avarage = parseFloat(sum / 3).toFixed(2);
console.log("среднее значение цен, округленное до второго знака после запятой = ", avarage);

//(Более сложное) Создайте переменную, в которой сохраним случайную скидку (используйте функцию Math.random).
//Сделайте клиенту случайную скидку и выведите сумму к оплате округленную до 2 знака после запятой.
//Выведите упущенную выгоду, если клиент заплатил со скидкой, если себестоиомсть товаров ровно в два раза ниже их цены?
//(Пример: цена была 260.66, скидка составила 10%, клиент заплатил на 26 меньше, себестоимость = 260 / 2 -> 130. 
//Упущенная выгода 130 - 26 -> 104)

let discountPersent = Math.round(Math.random() * (50 - 10 + 1) + 10);
console.log("Ваша скидка", discountPersent + " %");

let totalBalance = (parseFloat(sum)).toFixed(2);
console.log("Cумма к оплате без учета скидки: ", totalBalance);

let totalDiscount = parseFloat(totalBalance * (discountPersent / 100)).toFixed(2);
console.log("totalDiscount - ", totalDiscount);

totalDiscount = (parseFloat(totalDiscount)).toFixed(2);
console.log("Cумма скидки составляет: ", totalDiscount);

let totalBalanceWithDiscount = (parseFloat(totalBalance - totalDiscount)).toFixed(2);
console.log("Cумма к оплате с учетом скидки составляет: ", totalBalanceWithDiscount);

let realPrice = totalBalance / 2;
console.log("себестоимость товаров составляет: ", realPrice);

let lostProfit = (parseFloat(realPrice - totalDiscount)).toFixed(2);
console.log("упущенная выгода товаров составляет: ", lostProfit);



//Создайте шаблонную строку и выведите все вычисления совершенные в Base части домашнего 
//задания в виде одной строки следующего вида:

// Максимальная цена: 9999.99
// Минимальная цена: 1111.11
// Стоимость всех товаров: 1345.66
// ...и так далее

let str =   `максимальная цена = ${maxPrice} hrn <br> \
            минимальная цена = ${minPrice} hrn <br> \
            стоимость всех товаров = ${sum} hrn <br> \
            полная стоимость товара, округленная до сотых = ${priceRoundHundred} hrn <br> \
            сумма сдачи, при оплате всех товаров =${balance} hrn <br> \
            среднее значение цен, округленное до второго знака после запятой:  ${avarage} <br> \
            Ваша скидка ${discountPersent} % <br> \
            Cумма к оплате без учета скидки: ${totalBalance} hrn <br> \
            Cумма скидки составляет: ${totalDiscount} hrn <br> \
            Cумма к оплате с учетом скидки составляет: ${totalBalanceWithDiscount} hrn <br> \
            себестоимость товаров составляет: ${realPrice} hrn <br> \
            упущенная выгода товаров составляет: ${lostProfit} hrn`;

document.write(str);




