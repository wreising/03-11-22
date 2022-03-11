// const person = {
//   name: 'John Doe',
//   age: 40,
//   email: 'johndoe@gmail.com',
//   child: {
//     name: 'Jack Doe',
//     age: 18,
//     email: 'jackdoe@gmail.com'
//   }
// }

// const personName = person.name
// const age = person.age
// const email = person.email

// const { name: personName, email, age } = person
// const { name } = person
// console.log(name)

// console.log(personName, age, email)

// const { child: { email: childEmail } } = person

// console.log(childEmail)

// const names = ['John Doe', 'Jane Doe', 'Jack Doe', 'Jenny Doe']

// const name1 = names[0]
// const name2 = names[1]
// const name3 = names[2]
// const name4 = names[3]

// const [ hotdog, jellyfish, foobar, computer ] = names
// const [ , , foobar, computer ] = names

// console.log(name1, name2, name3, name4)
// console.log(hotdog, jellyfish, foobar, computer)

// const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// const [ , , , , , , , , , , , x, ...rest] = nums

// console.log(x)
// console.log(rest)

function Animal (name, species, age, food) {
  this.name = name
  this.species = species
  this.age = age
  this.food = food
  this.isSleeping = true
  this.printInfo = function () {
    console.log(`Hi! My name is ${this.name}! I am a ${this.species} and I am ${this.age} years old! I like to eat ${this.food}!`)
  }
}

const animal1 = new Animal('Beef', 'Dog', 2, 'Kibble')
const animal2 = new Animal('Maddie', 'Dog', 4, 'Veggies')
const animal3 = new Animal('Rex', 'Turtle', 3, 'Crickets')

// console.log(animal1)
// console.log(animal2)
// console.log(animal3)

animal1.printInfo()
animal2.printInfo()
animal3.printInfo()