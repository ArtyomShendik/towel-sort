
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length <= 0) {
    return []
  }
  let result = matrix[0]
  for (let i = 1; i < matrix.length; i++) {
    let oneStr = matrix[i]
    if (i & 1) {
      oneStr = oneStr.reverse()
    }
    result = result.concat(oneStr)
  }
  return result
}
