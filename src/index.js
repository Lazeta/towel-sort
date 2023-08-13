module.exports = function towelSort (matrix = []) {
  let result = [];

  for(let i = 0; i < matrix.length; i++){
    let m = matrix[i];
    if(i % 2 !== 0){
      result.push(...m.reverse())
    } else {
      result.push(...m)
    }
  }
  return result
}