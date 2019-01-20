// function highestScore(students) {
//   var kelas = {};
//   for (var i = 0; i <= students.length - 1; i++) {
//     kelas[students[i].class] = {};
//   }
//   for (var j = 0; j <= students.length - 1; j++) {
//     if (kelas[students[j].class]["name"] === undefined) {
//       kelas[students[j].class]["name"] = students[j].name + ", ";
//       kelas[students[j].class]["score"] = students[j].score;
//     } else {
//       var nilaiTertinggi=students[j].score
//       if (students[j].score > nilaiTertinggi) {
//         nilaiTertinggi=students[j].score
//         kelas[students[j].class]["name"] += students[j].name;
//         kelas[students[j].class]["score"] += nilaiTertinggi;
//       }
      
//     }
//   }

//   return kelas;
// }
// // TEST CASE
// console.log(
//   highestScore([
//     {
//       name: "Dimitri",
//       score: 90,
//       class: "foxes"
//     },
//     {
//       name: "Alexei",
//       score: 85,
//       class: "wolves"
//     },
//     {
//       name: "Sergei",
//       score: 74,
//       class: "foxes"
//     },
//     {
//       name: "Anastasia",
//       score: 78,
//       class: "wolves"
//     }
//   ])
// );

// // {
// //   foxes: { name: 'Dimitri', score: 90 },
// //   wolves: { name: 'Alexei', score: 85 }
// // }

// console.log(
//   highestScore([
//     {
//       name: "Alexander",
//       score: 100,
//       class: "foxes"
//     },
//     {
//       name: "Alisa",
//       score: 76,
//       class: "wolves"
//     },
//     {
//       name: "Vladimir",
//       score: 92,
//       class: "foxes"
//     },
//     {
//       name: "Albert",
//       score: 71,
//       class: "wolves"
//     },
//     {
//       name: "Viktor",
//       score: 80,
//       class: "tigers"
//     }
//   ])
// );

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }

// console.log(highestScore([])); //{}

function highestScore (students) {
  // Code disini
  var obj = {}
  for(var i = 0; i < students.length; i++){
      if(!obj[students[i].class]){
        obj[students[i].class] = {}
        obj[students[i].class].name = ''
        obj[students[i].class].score = 0
     }
     if(students[i].score > obj[students[i].class].score){
       obj[students[i].class].name = students[i].name
       obj[students[i].class].score = students[i].score
     }
  }
  return obj
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
