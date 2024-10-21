
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return new Array;
    };
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let columnIndex = i % 2 === 0 
            ? j
            : (matrix[i].length - j - 1);
            result.push(matrix[i][columnIndex]);
        }
    }
    return result;
}

/*towelSort([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],[ 1, 2, 3, 6, 5, 4, 7, 8, 9 ]) */
