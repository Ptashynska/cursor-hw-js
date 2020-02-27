

// 1 Создайте функцию getRandomArray(length, min, max) – которая возвращает массив 
//случайных целых чисел. В функции есть параметры: length - длина массива, 
//min – минимальное значение целого числа, max – максимальное значение целого числа. 
//Пример: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]


// function getRandomArray(length, min, max){

//     let arr = [];
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     for(let i = 0; i < length; i++){
//         arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     return arr;

// }

// let arr = getRandomArray(15, 1, 100);
// //console.log(arr);

//2 Создайте функцию getModa(...numbers) – которая вычисляет моду всех переданных 
//в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
// Пример: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

// function getModa(numbers){
//     let sortArr = [...numbers];
//     console.log("исходній массив", sortArr);
//     sortArr.sort(function(a, b){
//     return a - b;
//   });

//   console.log("отсортированный массив", sortArr);
//   let count = 1;
//   let count2 =0;
// let start = sortArr[0];
//   for(i = 1; i < sortArr.length; i++){
//       if(sortArr[i] === start){
//           count++;
//          start = sortArr[i];
//       } else{
// start = sortArr[i];
// if(count > count2){
//     count = count;
//     start = sortArr[i - 1];
// } else {
//    count2 = count;
//    start = sortArr[i];
//    count = 1;
// }

// function getModa(numbers){


//     let sortArr = [...numbers];
//     let ar = [];
//     console.log("исходній массив", sortArr);
// let val= 0;
// let count = 0;
// let i = 0;

//    // for(let i = 0; i < sortArr.length; i++) {


//        ar = sortArr.every(function(currentValue, index, array){
// console.log("elem = ", currentValue);
// console.log("index = ", index);
// ar = [i];
//              if(currentValue === array[index]){
//                 count++;
//                // index++;
//             } else{
//                return sortArr[i] = array[index - 1];
//              }
//             console.log(count);
//             i++;

//         });
       

//         //}

//     }



// let numModa = [6, 2, 55, 11, 55, 55, 55, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
// getModa(numModa);