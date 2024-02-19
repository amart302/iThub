// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true,
// }

// let user1 = user;
// console.log(user == user1)

// let user1 = {
//     name: "John",
//     age: 30,
//     "likes birds": true,
// }

// console.log(user == user1); // у них разные ссылки
// console.log(user === user1);
// console.log("age" in user)

// console.log(user.a = "ddd")
// console.log(user.a)

// delete user.age
// console.log(user.age)

// let a = "likes"

// let user = {
//         name: "John",
//         age: 30,
//         [a + " birds"]: true,
//         admin: undefined
// }
// console.log(user["likes birds"])

// user.age = undefined
// console.log(user)


//let array = [12, "abcdefg", [1, 2, "a", 34]]
// console.log(array.length = 1)
// console.log("0" == " ")
// console.log(0 == " ")

// let arr = ['Яблоко', 'Апельсин', 'Груша']

// for(let i = 0; i < arr.length; i++){
//         console.log(arr[i])
// }

// for(elem of arr){
//         console.log(elem)
// }

let user = {
        name: 'Иван',
        lastname: 'Иванов',       
        age: 18,
}
// for(key in user){
//         console.log(key)
// }

// for(key in user){
//         console.log(user[key])
// }

// Object.keys(user)
// Object.values(user)
// Object.entries(user)

// for(key in Object.values(user)){
//         console.log(key)
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

let us = {
        name: 'Maga',
        lastname: 'Magamedovich',
        cc: function (){
                return (12)
        },
}
console.log(us.cc())


let sum = (a, b) => a+b