// // условный оператор "if" "else"
// let age1 =16
// let accessAllowed;
// if(age1 > 18){
//     accessAllowed = true
// }else{
//     accessAllowed = false
// }
//Условный оператор ?
//let age = 16
//let access = (age > 18) ? true : false;

//let age = prompt('Возраст', '')
//let message = ( age < 3 ) ? 'Здравствуй малыш!' :
// (age < 18) ? 'ПРивет' :
// (age < 100) ? 'Здравствуйте' :
// 'Какой необычный возраст'
//alert(message);

// 


//27.11.23

// let array = ["Bilbo", "Gandalf", "dsf"]

// for(let i = 0; i < array.length; i++){
//   console.log(array[i], i)
// }

//forEach.......................
// array.forEach((elem, assa, array)=>{
//   console.log(`У ${elem} такой индекс: ${assa}`)
// });

//Метод map.....................

// let array = ["Datch", "Artur", "John"]
// let arr = array.map((elem)=>{
//   return `Hello ${elem}`
// })

// console.log("Старый массив",array)
// console.log("Новый массив",arr)

//Метод find.................

// let arr = [200, 2, 4, 55, 6, 8, 9];

// let a = arr.find((elem)=>{
//   return elem > 10 && elem < 100
// })
// console.log(a)

// let arr = [{id: 35, name: "Artur", password: "abc"},
//           {id: 32, name: "John", password: "dyr"},
//           {id: 50, name: "Datch", password: "cpu"},
//           {id: 42, name: "Bill", password: "ddc"},
//           {id: 20, name: "Jack", password: "ggh"}
//          ]

// let newUser;
// let a = arr.find((elem)=> {
//     if(elem.id == 35){
//       elem.password = "1337"
//     }
//     return newUser
// })
//  console.log(newUser)
// // arr.push(newUser)
// console.log(arr)


//Метод filter
// let array = ["BMW", "Mersedes", "Audi", "Ferrari"]

// let filterArray = array.filter((elem, index)=>{
//     if (elem == "Audi" || elem == "Mersedes"){
//         console.log(elem, index)
//     }
// })

// console.log(filterArray)


//Метод reduce и Spread (три точки)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let sum =arr.reduce((a, b)=>{
//     return a * b
// })

// console.log(sum)

// let array  = [ "Maga", "Misha", "Ahmed" ]

// let result = array.reduce((accumulator, currentValue, index, array)=>{
//     return accumulator + currentValue
// },0)

// console.log(result) //складывает элементы мфссива, ответ:15

// let result = array.reduce((accumulator, currentValue, index, array)=>{
//     return {
//         ...accumulator,
//         [index]: currentValue,
//     }
//  },{})

// console.log(result)

//Диструктуризация
// let [ , , elem3 ] = [ "Misha", "Maga", "Ahmed" ]

// console.log(elem3)

// let [ , , elem3 ] = "Misha Maga Ahmed".split(" ") 

// console.log(elem3)

// let options = {
//     title: "menu",
//     width: 100,
//     height: 200,
// }

// let {width: w, height: h, title} = options
// console.log(w)

// let { title, width, height } = options
// console.log()

// let { title, width, ...obj } = options
// console.log(obj)


// let now = new Date(0);
// alert(now)
// let Jan01_1970 = new Date(24 * 3600 * 1000)
// console.log(Jan01_1970)

// let Dec31_1969 = new Date(-24 * 3600 * 1000)
// alert(Dec31_1969)

// let date = new Date("2017-01-26")
// alert(date)


// let year = 2021;
// let month = 11;
// let date = 15;
// let hours = 22;
// let minutes = 30;
// let seconds = 10;
// let ms = 20;

// let dat = new Date(year, month, date, hours, minutes, seconds, ms)
// alert(dat)

// let dat1 = new Date(2011, 1, 3, 22, 30, 23, 547)
// alert(dat1)

// let date = new Date()
// let year = date.getUTCFullYear()
// alert(year)

// let start = new Date()

// for(let i = 0; i < 100000; i++){
//     let deSomething = i * i * i
// }
// let end = new Date()
// alert(`Цикл отработал за ${end - start} миллисекунд`)

// let date = new Date();
// let dat = new Date(0);


// let sm = (date - dat);
// let smm = (sm / 3600000)
// console.log(Math.floor(smm))

let oldDate = new Date("2000-01-01")
console.log(oldDate)

let nowDate = new Date().getTime()
let sub = nowDate - oldDate
console.log(nowDate)