//Задача №1

// function checkElem(num){
//     if(num % 7 == 0){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

//Задача №2

// let array = [1,2,3,4];
// let newArray = [];
// let result = changeElem(array, 3)
// function changeElem(array, n){
//     for(let i = 0; i < array.length; i++){
//         newArray.push(array[i] * n)
        
//     }
// }
// console.log(newArray)

//Задача №3


// let array = ['10','Строка','5g','15','05']
// let result = sumElems(array)
// // console.log(result)

// function sumElems(array){
//     let result = 0

//     for(let i = 0; i < array.length; i++){
//         if(!isNaN(array[i])){
//             result += array[i]
//         }
//     }console.log(result)
// }

// let array = ['10','Строка','5g','15','05']
// let result = sumElems(array)

// function sumElems(array){
//     let result = 0 
//     for(i = 0; i < array.length; i++){
//         if(!isNaN(array[i])){
//             result += Number(array[i])
//         }
//     }console.log(result)
// }

//Задача №4

let array= [1,2,3,4,5]
let yarra = raverseIndex(array)

function raverseIndex(array){
    let array2 = []
    for(i = array.length - 1; i >=0; i--){
        array2 += array[i]
    }console.log(array2)
}
console.log(yarra)

