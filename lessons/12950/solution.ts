export function solution(a: number[][], b: number[][]): number[][] {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            a[i][j] += b[i][j];
        }
    }
    return a;
}
