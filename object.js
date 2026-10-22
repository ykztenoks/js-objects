const student = {
  name: "Dani",
  age: 25,
  email: ["dani@email.com", "dani2@email.com"],
  course: "webdev",
  isGraduated: false,
}

console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.email)
console.log(student.course)
console.log(student.isGraduated)
console.log(student["isGraduated"])

const teacher = { name: "Jorge Berizbeitia", age: 25, email: "jorge@email.com" }

console.log("teacher before add course", teacher)

teacher.course = "webdev"
teacher.isGraduated = false
teacher.isGraduated = true
teacher.isOnline = false
console.log("teacher after add course", teacher)

delete teacher.isOnline

console.log(teacher)

const teacher2 = {
  name: "Daniel",
  age: 25,
  address: {
    city: "balneario camboriu",
    neighborhood: "nacoes",
    zip: "00000",
    number: 90,
    state: "santa catarina",
  },
}

console.log(teacher2.address.state)
console.log(teacher2.state)

const musician = {
  name: "pink floyd",
  //   albums: {1: "the dark side of the moon"},
  albums: [
    "The dark side of the moon",
    "the saucerful of secrets",
    "the wall",
    "animals",
  ],
}

for (const album of musician.albums) {
  console.log(album)
}

console.log(typeof musician.albums)

function myFunction() {
  return "hello!"
}

console.log(typeof myFunction)

const today = new Date()

console.log(typeof today)

// console.error(new Error("THIS IS MY ERROR"))

const user = {
  name: "Daniel",
  greet() {
    return `Hi! i'm ${user.name}`
  },
}

console.log(user.greet())

const car = { brand: "Renault", year: 2001, model: "clio" }

console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.entries(car))

// const newCar = car NOT THE RIGHT WAY TO COPY object

// newCar.model = "kwid"
// newCar.random = Math.random()

// console.log(newCar)
// console.log("CAR", car)

const newCar = { ...car }
newCar.model = "kwid"
newCar.brand = "renault"
console.log(newCar)
console.log(car)

const cloneOfCar = structuredClone(car)

console.log(cloneOfCar)
