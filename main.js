
let data = [ undefined , 2, 3, 4, 5, 6, 7, 8]
const myFunc = function (a = 'Error' , ...myArr) {
  let otherArr = myArr.slice(2)
  console.log(`${a}-${myArr[0]}-${myArr[1]}`)
  console.log({...otherArr})
  arguments.length < 5 ? console.log('Error') : console.log('Good Job')
}

myFunc (...data) 

