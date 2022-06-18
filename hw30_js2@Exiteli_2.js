const repeat = (string) => {
    let result = '';
    for (let i = 1; i <= 5; i++) {

        result = `${result}${string.repeat(i)}\n`
    }
    return result
}
console.log(repeat(':)'))