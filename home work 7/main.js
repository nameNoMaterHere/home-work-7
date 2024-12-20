"use strict"
//1-array
function sortAarray(arr) {
    console.log(arr)
    let newArr = arr.sort((num1, num2) => num1 - num2)
    //או שאפשר בדרך הארוכה עם הגדרת פונקציה 
    // let newArr=arr.sort(function(num1,num2){
    //     return num1-num2
    // })
    return console.log(newArr)
}
sortAarray([1, 5, 3, 9, 12, 100, 45, 8])
//2-array
function sameNumbersInArray(arr1, arr2) {
    const newArrDoble = []
    for (let i = 0; i < arr1.length; i++) {
        let check = false
        for (let index = 0; index < newArrDoble.length; index++) {
            if (arr1[i] === newArrDoble[index]) {
                check = true
                break
            }
        }
        if (!check) {
            for (let counter = 0; counter < arr2.length; counter++) {
                if (arr1[i] === arr2[counter]) {
                    newArrDoble.push(arr1[i])
                    break
                }
            }
        }

    }
    return console.log(newArrDoble)
}
const arr1 = [1, 2, 8, 5, 6, 2, 1, 4, 2]
const arr2 = [1, 2, 8, 5, 2, 1, 4, 1]
sameNumbersInArray(arr1, arr2)
//3-array
// ממוצע של כל המטריצה
function averageMetrix(matrix) {
    let sum = 0
    let count = 0
    matrix.forEach(function (el) {
        el.forEach(function (element) {
            sum += element
            count++
        })
    })

    return console.log(sum / count)
}
const matrix = [[1, 2, 9, 3], [4, 5, 18, 3], [1, 2, 50]]
averageMetrix(matrix)
// ממוצע של כל מערך בתוך המטריצה
function averageMetrixArr(matrix) {
    const arrAvrege = []
    matrix.forEach(function (el) {
        let sum = 0
        el.forEach(function (element) { return sum = sum + element })//(element=>sum+=element)או בקיצור
        let average = sum / el.length
        arrAvrege.push(average)
    })
    return console.log(arrAvrege)
}
averageMetrixArr(matrix)
//4-array
const num = 2
function checkIfNumInArr1(num, arr1) {
    const newArr = []
    let counter = 0
    for (let i = arr1.length - 1; i >= 0; i--) {
        if (num === arr1[i]) {
            arr1.pop()
            counter++
        } else {
            newArr.unshift(arr1[i])
            arr1.pop()
        }
    }
    return console.log(counter), console.log(newArr)
}
checkIfNumInArr1(num, arr1)
//1 arrow function
const up5char = str => console.log(str.length > 5)
//2 arrow function
const firstAndLasteq = str => console.log(str[0] === str[str.length - 1])
//3 arrow function
const lastCharIsUpper = str => console.log(str[str.length - 1] === str[str.length - 1].toUpperCase())
up5char("hello")
firstAndLasteq("abcb")
lastCharIsUpper("hello")
//1-map/foreach
function divideBy3(array) {
    let divideBy3 = false
    array.forEach(function (num, index) {
        if (num % 3 === 0) {
            console.log("the num:", num, "the indexs is", index)
            divideBy3 = true
        }
    })
    if (!divideBy3) {
        console.log("The array is not divisible by 3")
    }
}
const arrForCheck = [1, 2, 8, 5, 6, 2, 3, 4, 2]

divideBy3(arrForCheck)
//2-map/foreach
function checkIfUorL(array) {
    const newArr = []
    array.forEach(char => {
        if (char === char.toUpperCase()) {
            newArr.push("U")
        } else {
            newArr.push("L")
        }

    })
    return console.log(newArr)
}
checkIfUorL(["A", "B", "c", "d", "E"])
//3-map/foreach
const newArrForQ3 = ["a", "b", "c", "d", "e", "f"]
function repaleCharToIndex(array) {
    return console.log(array.map(function (char, index) {
        if (index % 2 === 0) {
            return index
        }
        return char
    }))
}
repaleCharToIndex(newArrForQ3)
//1 -filter
function filterAge(array) { console.log(array.filter(num => num >= 18)) }
filterAge([1, 18, 22, 17, 16, 21, 45])
//2-filter
function noIndex3(array) { console.log(array.filter((num, index) => index != 3)) }
noIndex3([2, 4, 1, 2, 7, 2, 8])
//1 Spread
const arrNames=["yossi","moshe","max"]
const newName="tom"
function addNewName(array,name){
    let addedNamesArry=[...array,name]
    console.log(addedNamesArry)
}
addNewName(arrNames,newName)
//2 spred
const names=["hana","or","mor"]

// 
function addTooArrayToOne(arr1, arr2) {//const addTooArrayToOne=((arr1,arr2)=>[...arr1,...arr2]) או בקצרה 
    return [...arr1, ...arr2]
}
console.log(addTooArrayToOne(names,arrNames))