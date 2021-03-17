const memo = {};

const isValidNumbers = (min, max) => {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error('Input values should be integer number!');
  }
  if (
    Math.abs(min) >= Number.MAX_SAFE_INTEGER ||
    Math.abs(max) >= Number.MAX_SAFE_INTEGER
  ) {
    throw new Error('Input value more than max safe integer number!');
  }
  if (min > max) {
    throw new Error('First value should be bigger than second value!');
  }
};

const range = (min = null, max = null) => {
  try {
    isValidNumbers(min, max);
  } catch (e) {
    return e;
  }

  if (memo[`${min},${max}`]) {
    return memo[`${min},${max}`];
  }

  const result = ((min + max) * (max - min + 1)) / 2;

  if (Math.abs(result) >= Number.MAX_SAFE_INTEGER) {
    return new Error('Result is more than max safe integer number!');
  }
  memo[`${min},${max}`] = result;

  return result;
};

console.log(range(10, 20));
console.log(range(11, 20));
console.log(range(11, 20));
console.log(range(15, 20));
console.log(range(5, 10));
console.log(range(10, 5));
console.log(range(NaN, 5));
console.log(range(5, '10'));
console.log(range());
console.log(range(40, 40));
console.log(range(-40, -100));
console.log(range(-100, -40));
console.log(range(Number.MIN_SAFE_INTEGER, -40));
console.log(range(0.4, 10.3));
console.log(range('4fdsf', 'fsdfsdf'));
