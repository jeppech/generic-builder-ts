# Generic builder for TypeScript
This is small helper class for make buildable objects.


## Usage
```ts
import { Builder } from 'jeppech/generic-builder-ts'

// Start by declaring an interface, describing your object

interface Person {
	name: string
	age: number
	dob?: Date
}


// Next create a class, with the same name of the interface. This is also known as Declaration Merging.

class Person {
	constructer(builder: Builder<Person> & Person) {
		Object.assign(this, builder)
	}
}

// Notice, that you get hints when calling the `with` method.

const person = new Builder(Person)
	.with('name', 'John')
	.with('age', 25)
	.with('dob', new Date('2005-10-13'))
	.build()

```

## Acknowledgment
This was inspired by https://github.com/hanterlantant/ts-generic-builder