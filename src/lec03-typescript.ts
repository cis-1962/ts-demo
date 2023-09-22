// console.log('Hello, world!');

// function fetchAssignment(
//   id: string,
//   opts?: { full?: boolean; year?: number, hi?: {hello: string} } = {},
// ) {
//   const year = opts.year ?? 2024;
//   console.log(typeof year)
//   type Year = typeof year;

//   type x = typeof opts['hi']
// }

// fetchAssignment('1234', { year: 2023 });

// type Result<TValue, TError> =
//   | { hasError: false; value: TValue }
//   | { hasError: true; error: TError };

// function doCalculation(): Result<string, number> {
//   if (Date.now() > 0) {
//     return { value: 'hello!', hasError: false };
//   }
//   return { hasError: true, error: 0 };
// }

// --------- ---------

// type x = Result<{ id: string }, string>;

// const result = doCalculation();
// if (result.hasError) {
//   console.log('error with code', result.error);
// } else {
//   console.log('got:', result.value.toUpperCase());
// }

// type Result = string | number

// function doCalculation(): Result2 {
//   if (Date.now() > 0) {
//     return 'hello'
//   }
//   return 0
// }

// const result = doCalculation();
// if (typeof result === 'number') {
//     console.log('error with code', result)
// } else {
//     console.log('got:', result.toUpperCase())
// }

// type Tuneer = {name?: string, age: number}
// type Thomas = Tuneer & {name: string}

// const me: Thomas = {age: 21}

// --------- ---------

// type X = Partial<{thomas: string}>
// const x: X = {}

function log(name: string): true;
function log(id: number): 'looked up a thing';

function log(name: string | number) {
  if (typeof name === 'string') {
    console.log('Hi! my name is', name);
    return true;
  }
  console.log('logged person with id', name);
  return 'looked up a thing';
}

const result = log('Tuneer');
