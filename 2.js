function transpose(matrix) {
    let pnjbaris = matrix.length;
    let pnjkolom = matrix[0].length;
    let tposeArr = [];    
    for (let j = 0; j < pnjkolom; j++) {
        tposeArr[j] = new Array(pnjbaris);  
    }
    for (let i = 0; i < pnjbaris; i++) {
        for (let j = 0; j < pnjkolom; j++) {
            tposeArr[j][i] = matrix[i][j];
        }
    }
    return tposeArr;
}

let arrays = [[1,2,3],[1,2,3],[1,2,3]];
console.log(transpose(arrays))
