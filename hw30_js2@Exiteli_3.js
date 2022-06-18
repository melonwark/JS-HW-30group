const repeat = (string, rows) => {
    let result = '';
    for (let i = 1; i <= rows; i++) {

        result = `${result}${string.repeat(i)}\n`
    }
    return result
}
console.log(repeat(':)', 10))