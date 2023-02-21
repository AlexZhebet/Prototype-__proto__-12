// (Immediately Invoked Function Expression)
// это JavaScript функция, которая выполняется сразу
// же после того, как она была определена.

// (function () {
// 	console.log(a)
// })()

// const result = (function () {
// 	console.log(' Hi from IIFE 2')
// 	return 5+5
// })()
//
// console.log(result)

// const user = {
// 	name: 'Joe',
// 	lastName: 'Doe',
// 	age: 16,
// 	say() {
// 		console.log('Hi')
// 	},
//
// 	isAdult: this.age > 16
//
// }

// console.log(user.isAdult)
//
// user.isAdult = true
//
// console.log(user.isAdult)


// Второй тип свойств мы ещё не рассматривали.
// 	Это свойства-аксессоры (accessor properties).
// По своей сути это функции, которые используются для
// присвоения и получения значения,
// 	но во внешнем коде они выглядят как обычные свойства объекта.

//
// const user = {
// 	name: 'Joe',
// 	lastName: 'Doe',
// 	age: 16,
// 	say() {
// 		console.log('Hi')
// 	},

	// get isAdult() {
	// 	return this.age > 16
	// },

	// get fullName() {
	// 	return `${this.name} ${this.lastName}`
	// },

	// set fullName (fullName) {
		// this.name = fullName.split(' ')[0]
		// 	[this.name, this.lastName] = fullName.split(' ') // [Jack, Daniels]
// 	}
// }

// console.log(user.isAdult)
//
// user.isAdult = true
//
// console.log(user.isAdult)

// console.log(user.fullName)
//
// user.fullName = 'Jack Daniels'
//
// console.log(user.fullName)
//
// console.log(`${user.name} ${user.lastName}`)



// 1. Имя функции-конструктора должно начинаться с большой буквы.
// 2. Функция-конструктор должна выполняться только с помощью оператора `"new"`.

// const userArr = ['Joe', 'Jack', 'Anna', 'Lisa']

// const user1 = {
// 	name: 'Joe'

// }

// function User(name) {
	// this = {}
	//
	// this.name = name
	// this.sayHi = function () {
	// 	console.log(` My name is ${this.name}`)
	// }

	// return {something: 3}

	// return this
// }
//
// const user = new User('Joe')
// const user2 = new User('Jack')
// const user3 = new User('Anna')
// //
// console.log(user2.name);
// console.log(user2);

// const users = userArr.map(el => new User(el))

// console.log(users)
//

// users.forEach(el => el.sayHi())


// function Calculator () {
// 	this.getnumbers = function () {
// 		this.a = +prompt('a?', 0)
// 		this.b = +prompt('b?', 0)
// 	}
//
// 	this.sum = function () {
// 		return this.a + this.b
// 	}
// }
//
//
// const calc = new Calculator()
// console.log(calc)
//
// calc.getnumbers()
// console.log(calc)
// console.log(calc);
// console.log(calc.sum());

//
// function User(name, lastName, age) {
// 	this.name = name
// 	this.lastName = lastName
// 	this.age = age
//
// 	Object.defineProperty(this, 'isAdult', {
// 		// writable: false,
// 		get() {
// 			return this.age > 18
// 		}
// 	})
//
// 	Object.defineProperty(this, 'fullName', {
// 		get() {
// 			return `${this.name} ${this.lastName}`
// 		},
//
// 		set(fullName) {
// 			if(fullName) {
// 				[this.name, this.lastName] = lastName.split(' ')
// 			}
// 		}
// 	})
// }
//
// const user1 = new User('Joe', 'Doe', 23)
// const user2 = new User('Ann', 'Fog', 16)
//
// console.log(user1.isAdult);
// console.log(user2.isAdult);
// console.log(user1.fullName);
// console.log(user2.fullName);
//
// user2.fullName = 4
//
// console.log(user2.fullName);

// const user = {
// 	_name: 'Joe',
//
// 	get name () {
// 		return this._name
// 	},
//
// 	set name(name) {
// 		//проверка if
// 		this._name = name
// 	}
// }
//
// user._name = 'Jack'
//
// console.log(user.name);

// Array.prototype.showAll = function () {
// 	console.log(this)
// }
//
// const arrNew = new Array(2)
//
// const obj = new Object({})
//
//
// const arr = [1, 2, 3]
//
// arr.showAll()
//
// const userArr = ['Joe', 'Jack', 'Anna', 'Lisa'];
//
// userArr.showAll()

// let animal = {
// 	eats: true
// }
//
// let rabbit = {
// 	eats: 'yes eats',
// 	jumps: true
// }
//
// rabbit.__proto__ = animal
//
//
// console.log(rabbit.eats)

//
// function Animal () {
// 	this.eats = true
// }
//
// function Rabbit () {
// 	this.jumps = true
// }
//
// Rabbit.prototype = new Animal()
//
// const rabbitConstr = new Rabbit()
//
// console.log(rabbitConstr)


// for(let key in rabbit) {
// 	console.log(key)
// }

// console.log(rabbit.hasOwnProperty('eats'), 'with hasOwn');

// console.log(rabbit);

//
// const obj  = {}
// console.log(obj)

let animal = {
	name: 'Animal',
	eats: true,
	walk() {
		console.log(`Animal walk`)
	},
	greeting() {
		console.log(`Animal name is ${this.name} `)
	}

}

// console.log(animal);

let rabbit = {
	name: 'rabbit',
	jumps: true
}

rabbit.__proto__ = animal
// console.log(rabbit);


let longEarRabbit = {
	name: 'longEarRabbit rabbit',
	earLength: 10,
	__proto__: rabbit
}

longEarRabbit.walk()
console.log(longEarRabbit.hasOwnProperty('jumps'));
console.log(longEarRabbit.someThing);


// rabbit.greeting()
// longEarRabbit.greeting()
// console.log(longEarRabbit);




let hamster = {
	stomach: [],
	eat(food) {
		this.stomach.push(food)
	}
}

let speedy = {
	__proto__: hamster
}

let lazy = {
	__proto__: hamster
}


speedy.stomach = []
lazy.stomach = []

speedy.eat('apple')
lazy.eat('banana')

console.log(speedy.stomach, 'speedy')
console.log(lazy.stomach, 'lazy')

