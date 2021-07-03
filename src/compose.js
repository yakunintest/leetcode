/**
 * @param {(function(*): string)[]} fns
 */
const compose = (...fns) => (...args) => {
  return fns.reduceRight((acc, fn) => fn(acc), args);
};

const upperCase = str => str;
const exclaim = str => `${str}!`;
const repeat = str => `${str} `.repeat(3);

const withСompose = compose(
  repeat,
  exclaim,
  upperCase
);

console.log(withСompose('hacking'));
