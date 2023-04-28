//Ejercicio #1

const getAverage = (arr) => {
    let addition = 0
    for(var i = 0; i < arr.length; i++) {
      addition += arr[i]
    }
    return addition / arr.length
}

const arr1 = [1,2,3,4,5,6,7,8,9]
const arr2 = [9,8,7,6,5,4,3,2,1]
const arr3 = [152,135,485,987,545,325,574,821,135,125,864,857,125]

console.log(getAverage(arr1));
console.log(getAverage(arr2));
console.log(getAverage(arr3));

//Ejercicio #2

const reverseWords = (sentence) => {
    if (sentence.includes("!") || sentence.includes("¡")) {
      let allWords = sentence.replace("!", '').replace("¡", '')
      allWords = allWords.split(" ").reverse().join(" ")
      allWords = "!" + allWords + "¡"
      return allWords
    }
    let allWords = sentence.split(" ").reverse().join(" ")
    return allWords
}

const words1 = "¡Hola mundo!"
const words2 = "Esta es una oracion corta"
const words3 = "Esta es una oracion con bastantes, muchas, demaciadas palabras"

console.log(reverseWords(words1));
console.log(reverseWords(words2));
console.log(reverseWords(words3));

//Ejercicio #3

const countVowels = (sentence) => {
    let letters = sentence.split("")
    let addition = 0
    letters.forEach(letter => { if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") addition ++})
    return (addition)
}

const sentence1 = "oiwqefnfdsueknclfcduoiwnxkacuqe"
const sentence2 = "abcdefghijklmnñopqrstuvwxyz"
const sentence3 = "una oracion para saber cuantas vocales tiene"

console.log(countVowels(sentence1));
console.log(countVowels(sentence2));
console.log(countVowels(sentence3));

//Ejercicio #4

const removeDuplicates = (arr) => {
    const newArr = []
    arr.forEach(number => { if(!(newArr.includes(number))) newArr.push(number)})
    return newArr
}

const numbers1 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]
const numbers2 = [89,25,51,85,14,32,16,84,14,34,51,85,89,42,84]
const numbers3 = [5,10,15,20,25,25,20,15,10,5]

console.log(removeDuplicates(numbers1));
console.log(removeDuplicates(numbers2));
console.log(removeDuplicates(numbers3));

//Ejercicio #5

const capitalizeFirstLetters = (sentence) => {
    let newString = sentence.split(" ")
    for (var i = 0; i < newString.length; i++) {
      newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1)
    }
    newString = newString.join(" ")
    return newString
}

const sentenceCapitalize1 = "estas son muchas palabras para la prueba"
const sentenceCapitalize2 = "estas son solo cinco palabras"
const sentenceCapitalize3 = "una oracion de prueba"

console.log(capitalizeFirstLetters(sentenceCapitalize1));
console.log(capitalizeFirstLetters(sentenceCapitalize2));
console.log(capitalizeFirstLetters(sentenceCapitalize3));

//Ejercicio #6

const findLongestWord = (arr) => {
    let longestWord = ""
    for( var i = 0; i < arr.length; i++) {
      if (arr[i].length >= longestWord.length) longestWord = arr[i]
    }
    return longestWord
}

const wordsLongest1 = [ "esta", "es", "una", "oracion", "normal", "de", "prueba" ]
const wordsLongest2 = [ "hola", "esternocleidomastoideo", "pepe" ]
const wordsLongest3 = [ "tres", "cuatro", "cinco", "pepe" ]

console.log(findLongestWord(wordsLongest1));
console.log(findLongestWord(wordsLongest2));
console.log(findLongestWord(wordsLongest3));

//Ejercicio #7

const reverseinPlace = (arr) => {
    const arrLength = arr.length
    for(var i = 0; i < arrLength; i++) {
      arr.unshift(arr[i * 2])
    }
    while (arr.length !== arrLength) {
      arr.pop()
    }
    return arr
}

const numbersReverse1 = [0,1,2,3,4,5,6,7,8,9]
const numbersReverse2 = [9,8,7,6,5,4,3,2,1,0]
const numbersReverse3 = ["hola", "como", "estas"]

console.log(reverseinPlace(numbersReverse1))
console.log(reverseinPlace(numbersReverse2))
console.log(reverseinPlace(numbersReverse3))