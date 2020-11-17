import { Builder } from '../src/Builder'

interface Person {
	name: string
	age: number
	afk?: boolean
}

class Person {
	constructor(builder: Builder<Person> & Person) {
		Object.assign(this, builder)
	}
}

const person = new Builder(Person)
	.with('name', 'Jeppe')
	.with('age', 31)
	.with('afk', true)
	.build()

console.log(person)
// Person: {
//   "name": "Jeppe",
//   "age": 31,
//   "afk": true
// }

const person2 = new Builder(Person)
	.withObject({
		name: 'jeppech',
		age: 1337,
		afk: false
	})
	.build()

console.log(person2)
// Person: {
//   "name": "jeppech",
//   "age": 1337,
//   "afk": false
// }