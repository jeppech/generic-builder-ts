type Properties<T> = {
	[K in keyof T]: T[K]
}

class Factory<T, C extends T> {
	constructor(private __source: new (t: Factory<T, C> & T) => C) {}

	with<K extends keyof T>(prop: K, value: T[K]): this & Pick<T, K> {
		Object.defineProperty(this, prop, { value, writable: false, enumerable: true})
		
		return this as this & Pick<T, K>
	}

	withObject(obj: Properties<T>): this & T {
		return Object.assign(this, obj)
	}

	build(this: this & T): C {
		return new this.__source(this)
	}
}

export class Builder<T> extends Factory<T, T> {}