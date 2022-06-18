const isPalindrom = (string) => {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        result = `${string[i]}${result}`
    }
    return string.toLowerCase() === result.toLowerCase() ? true : false
}
console.log(isPalindrom('abBa'))