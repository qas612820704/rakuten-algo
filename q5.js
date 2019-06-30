/**
 * Add two number (restrict 32-bits, means only support up to 2147483647)
 *
 * @param {number} num1
 * @param {number} num2
 *
 * @returns number
 */
function sum(num1, num2) {
  while (num2 !== 0) {
    const carry = num1 & num2;

    num1 = num1 ^ num2;

    num2 = carry << 1;
  }

  return num1;
}

// console.log(sum(1, 2));
// console.log(sum(2147483647, 1)); // @todo this will be wrong
