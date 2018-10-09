
/*
 Largest prime factor
 The prime factors of 13195 are 5, 7, 13, and 29
 What is the largest prime factor of the number 600851475143?
 */

const testInput = 600851475143;

function factors(input) {
  const listFactors = [];
  for (let i = 0; i <= input; i++) {
    if (input % i === 0) {
      listFactors.push(i);
    }
  }
  return listFactors;
}

// console.log(factors(testInput));

function primeFactors(listOfFactors) {
  const listOfPrimes = [];
  for (let factor of listOfFactors) {
    if (factors(factor).length === 2) {
      listOfPrimes.push(factor);
    }
  }
  return listOfPrimes;
}

console.log(primeFactors(factors(testInput)));
