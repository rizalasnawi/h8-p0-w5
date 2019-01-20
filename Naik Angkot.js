// function naikAngkot(arrPenumpang) {
//   //your code here
//   var rute = ["A", "B", "C", "D", "E", "F"];
//   var biaya = 0;
//   var indexAwal = 0;
//   var indexBelakang = 0;
//   var obj = {
//   };
//   var arr=[]

//   for (var i = 0; i <= arrPenumpang.length - 1; i++) {
//     for (var j = 0; j <= rute.length - 1; j++) {
//       if (rute[j] === arrPenumpang[i][1]) {
//         indexAwal = j;
//       } else if (rute[j] === arrPenumpang[i][2]) {
//         indexBelakang = j;
//       }
//       biaya = 2000 * (indexBelakang - indexAwal);
//     }
//     obj[i] = {
//       penumpang: arrPenumpang[i][0],
//       naikDari: arrPenumpang[i][1],
//       tujuan: arrPenumpang[i][2],
//       bayar: biaya
//     };
//     arr.push(obj[i])
//   }
//   return arr;
// }

// //TEST CASE
// console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
// //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]


function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result = []

  for(var i = 0; i < arrPenumpang.length; i++){
     var obj = {}
     for(var j = 0; j < rute.length; j++){
        if(arrPenumpang[i][1] === rute[j]){
           var naik = j
        } else if(arrPenumpang[i][2] === rute[j]){
           var turun = j
        }
     }
     var ongkos = (turun - naik) * 2000
     obj.penumpang = arrPenumpang[i][0]
     obj.naikDari = arrPenumpang[i][1]
     obj.tujuan = arrPenumpang[i][2]
     obj.bayar = ongkos

    result.push(obj)
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
