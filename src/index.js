function towelSort(matrix){
  
  
  
  console.log(matrix)
}

// module.exports = function towelSort (matrix) {
//   return [];
// }

const matrix0 = []
const matrix1 = [[]]
const matrix2 = [
  [1, 2],
  [3, 4],
];
const matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];
const matrix4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix5 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const matrix6 = [
  [1, 2, 4],
  [5, 6, 7, 8],
  [9, 12],
];
// console.log(towelSort(matrix0)) //[]
// console.log(towelSort(matrix1)) //[]
console.log(towelSort(matrix2)) //[ 1, 2, 4, 3 ]
console.log(towelSort(matrix3)) //[ 1, 2, 3, 6, 5, 4, ]
// console.log(towelSort(matrix4)) //[ 1, 2, 3, 6, 5, 4, 7, 8, 9 ]
// console.log(towelSort(matrix5)) //[ 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13 ]
// console.log(towelSort(matrix6)) //[ 1, 2, 4, 8, 7, 6, 5, 9, 12 ]