// MyMap, myFilter

const students =  [
    {
        name: 'Igor',
        age: 32,
        married: true
    },
    {
        name: 'Evgenia',
        age: 31,
        married: true
    },
    {
        name: 'Roma',
        age: 3,
        married: false
    },
]

const myMap = (myArray,func) => {
    const res = []
    for (let i=0 ; i<myArray.length ; i++ )  {
        res [i] = func(myArray[i])
    }
    return res
}

console.log(myMap(students, x=>x.name))
console.log(myMap(students, x=>x.age + 10))
console.log(myMap(students, x=>x.age + 1))
console.log(students.map(m=>m.age))



const myFilter = (myArray,funcFiler) => {
    const res = []
    for (let i=0 ; i<myArray.length ; i++ )  {
        if (funcFiler(myArray[i])===true) {
            res.push(myArray[i])
        }
    }
    return res
}

console.log(myFilter(students, x=>x.age <30))


const myFind = (myArray,funcFind) => {
    for (let i=0 ; i<myArray.length ; i++ )  {
        if (funcFind(myArray[i])===true) {
            return myArray[i]

        }
    }
}