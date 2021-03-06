//СТРОКИ
const names = ["Igor", "Evgenia", "Roma", "Leo"]
console.log(names.sort()) // сортирует по UNICODE ['Evgenia', 'Igor', 'Leo', 'Roma']
console.log([...names].sort()) // сортирует по UNICODE ['Evgenia', 'Igor', 'Leo', 'Roma']
// изменяет исходник
// работает со строками без параметров



//ЧИСЛА
// изменяет исходник
// работает с числами с параметром (фунция сравнения)
// сортирует в указанном порядке

const numbers = [88,1,50,6]
console.log(numbers.sort())     //1, 50, 6, 88]
const comFn = (a,b) => {
  if (a>b) {
      return 1  //если return любое положительное число,то переставляем пару чисел
  }
  return -1 //если return любое отрицательное число,то не переставляем пару чисел
}
console.log([...numbers].sort(comFn))        //[1, 6, 50, 88]
console.log([...numbers].sort((a,b)=> a-b ))  //[1, 6, 50, 88]
console.log([...numbers].sort((a,b)=> b-a ))  //[88, 50, 6, 1]
console.log([...numbers].sort((a,b)=> a-b ).reverse())  //[88, 50, 6, 1]



const students =  [
    {
        name: 'Igor',
        age: 32,
        isMarried: true,
        scores: 9
    },
    {
        name: 'Evgenia',
        age: 31,
        isMarried: true,
        scores: 50
    },
    {
        name: 'Roma',
        age: 3,
        isMarried: false,
        scores: 90
    },
]

console.log([...students])
console.log([...students].sort((a,b)=>a.age-b.age))
console.log([...students].sort((a,b)=>a.name.toLowerCase()<b.name.toLowerCase() ? -1 : 1))
console.log([...students][0].name.toUpperCase())
console.log([...students][0].name.toLowerCase())


// BUBBLE SORT

const numbersArray = [88,1,50,6]

for (let j=0; j<numbersArray.length;j++){

    for (let i=0; i<numbersArray.length - 1; i++) {
        if (numbersArray[i]>numbersArray[i+1]) {
            [numbersArray[i],numbersArray[i+1]] =   [numbersArray[i+1],numbersArray[i]]
            //  let temp = numbersArray[i+1]
            //  numbersArray[i+1]=numbersArray[i]
            //  numbersArray[i]=temp

        }
    }
}


console.log(numbersArray)