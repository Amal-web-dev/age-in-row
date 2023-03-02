let box = [
    {
        name: 'alex',
        age: 18 
    },
    {
        name: 'refat',
        age: 19
    },
    {
        name: 'amal',
        age: 14
    },
    {
        name: 'shoxrux',
        age: 17
    },
    {
        name: 'abdulvosid',
        age: 16
    },
    {
        name: 'jamshed',
        age: 18
    },
    {
        name: 'manucher',
        age: 18
    },
    {
        name: 'faxriddin',
        age: 24
    },
    {
        name: 'shakhnoza',
        age: 15
    },
    {
        name: 'timur',
        age: 17
    },
]

let overEightTeen = box.filter(item => item.age >= 18)
let underEightTeen = box.filter(thing => thing.age <= 17)

console.log(overEightTeen);
console.log(underEightTeen);