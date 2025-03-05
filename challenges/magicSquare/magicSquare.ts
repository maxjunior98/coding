function getMin(arr: number[]): number {
    let min: number = arr[0]
    for (const e of arr){
        if(e < min)
            min = e
    }
    return min
}

function rotateMatrix(matrix: number[][]): number[][] {
    let newMatrix = matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())
    return newMatrix
}

function changeOrderMatrix(matrix: number[][]): number[][] {
    for (let i = 0; i < 3; i++) {
        const aux = matrix[i][2]
        matrix[i][2] = matrix[i][0]
        matrix[i][0] = aux
    }
    return matrix  
}

function formingMagicSquare(s: number[][]): number {
    let sum: number[] = Array(8)
    let magicSquare = [[8,1,6],[3,5,7],[4,9,2]]
    for (let i = 0; i < 8; i++) {
        if(i == 4) {
            magicSquare = changeOrderMatrix(magicSquare)
        }
        let value: number = 0
        for(let j = 0; j < 3; j++) {
            for(let k = 0; k < 3; k++){
                value = value + Math.abs(s[j][k] - magicSquare[j][k])
            }
        }
        sum[i] = value
        magicSquare = rotateMatrix(magicSquare)
    }
    return getMin(sum)
}
