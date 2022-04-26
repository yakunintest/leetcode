interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

// Implement MyReadonly<T> for T
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple>
// Implement TupleToObject<T> for T
type TupleToObject<T extends readonly any[]> = {
  [Item in T[number]]: Item;
};
