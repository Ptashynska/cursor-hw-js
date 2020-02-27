//Каждое задание выполняется в виде чистой функции. Функция возвращает массив или другое 
//значение, но не меняет его!
//В косноль/html выводите результат вызова функции:
//const pairs = getPairs(students);
//console.log(pairs);


const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Разбейте студентов на пары(парень + девушка) для работы над проектом. У вас должен 
// получиться вложенный массив с парами студентов: [["Саша", "Лена"], [..], [...]];

function getPairs(students) {
  let pairs = [];
  let index = 0 ;

  for (let i = 0; i < students.length / 2; i++) {
    pairs[i] = students.slice(i * 2, i * 2 + 2);
  }


  return pairs;
}

const pairs = getPairs(students);
console.log("pairs array = ", getPairs(students));


// 2 Сопоставьте пары из предыдущего задания и темы проектов, над которым студенты будут работать. 
//Должен получиться вложенный массив вида: [["Саша и Лена", "Теория автоматов"], [...], [...]]

// 

function getSubject(pairs, themes) {
  let pairsTheme = [];
  for (var i = 0; i < pairs.length; i++) {
    pairsTheme[i] = [];
    pairsTheme[i].push(pairs[i].join(" и "));
    pairsTheme[i].push(themes[i]);
  }
  return pairsTheme;
}

const pairsSub = getSubject(pairs, themes);
console.log("pairs with Subject: ", pairsSub);


//Сопоставьте оценки(marks) со студентом(students): [["Саша", 4], [...], [...]]

function getMarks(students, marks) {
  let studentMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentMarks[i] = [];
    studentMarks[i].push(students[i]);
    studentMarks[i].push(marks[i]);
  }
  return studentMarks;
}

const studentMarks = getMarks(students, marks);
console.log("student Marks: ", studentMarks);



// 4 Поставьте каждой паре случайную оценку(от 1 до 5) за проект(тут функция будет нечистой, 
//но не должна мутировать массив): [["Саша и Лена", "Теория автоматов", 5], [...], [...]]


function getpairSubMarks(pairsSub, marks) {
   let pairSubMarks = JSON.parse(JSON.stringify(pairsSub)); 
   for (let i = 0; i < pairSubMarks.length; i++) {
    const mark = getRandomMark(1,5);
    console.log(pairSubMarks[i] === pairsSub[i]);
    pairSubMarks[i].push(mark);
  }
   return pairSubMarks;
}


function getRandomMark(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


const pairSubMarks = getpairSubMarks(pairsSub, marks);
console.log("pair random Marks = ", pairSubMarks);

