// function graduates (students) {
//   // Code disini
//    var data = {};
//   for (var i = 0; i <= students.length - 1; i++) {
//     data[students[i].class] = [];
//   }
//   for (var j = 0; j <= students.length - 1; j++) {
//     if (students[j].score > 75) {
//       data[students[j].class].push({
//         nama: students[j].name,
//         score: students[j].score
//       });
//     }
//   }

//   return data;
// }

// console.log(graduates([
//   {
//     name: 'Dimitri',
//     score: 90,
//     class: 'foxes'
//   },
//   {
//     name: 'Alexei',
//     score: 85,
//     class: 'wolves'
//   },
//   {
//     name: 'Sergei',
//     score: 74,
//     class: 'foxes'
//   },
//   {
//     name: 'Anastasia',
//     score: 78,
//     class: 'wolves'
//   }
// ]));

// // {
// //   foxes: [
// //     { name: 'Dimitri', score: 90 }
// //   ],
// //   wolves: [
// //     { name: 'Alexei' , score: 85 },
// //     { name: 'Anastasia', score: 78 }
// //   ]
// // }

// console.log(graduates([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


// console.log(graduates([])); //{}


function graduates (students) {
  // Code disini
  var obj = {}
  for(var i = 0; i < students.length; i++){
     if(!obj[students[i].class]){
       obj[students[i].class] = []
     }
     if(students[i].score >= 75){
       obj[students[i].class].push(students[i].name)
       obj[students[i].class].push(students[i].score)
     }
  }
  return obj
}

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
