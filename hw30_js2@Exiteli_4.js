const getWordStructure = (word) => {
    const vowel = ['a','e','i','o','u','A','E','I','O','U'];  const checkConson = ['B', 'C', 'D', 'F', "G", 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    const wordArray = [...word]
    const conson =  checkConson.filter(el => wordArray.includes(el))
    const checkVowel = wordArray.filter(el => vowel.includes(el))
    return `Слово ${word} состоит из ${checkVowel.length} гласных и ${conson.length} согласных букв`
}
console.log( getWordStructure('Check00--List'))