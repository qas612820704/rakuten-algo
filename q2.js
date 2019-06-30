/**
 * true if num is perfect square
 *
 * @param {number} num
 *
 * @returns {boolean}
 */
function isPerfectSqure(num) {
  if (num < 0) return false;
  if (num < 2) return true; // 0, 1 is perfect square

  let left = 1,
      right = num;

  while(left < right) {
    const mid = left + ((right - left) >> 1);
    const square = mid * mid;

    if (square < num) {
      left = mid + 1;
    } else if (num < square) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
}

// console.log(isPerfectSqure(14));
// console.log(isPerfectSqure(16));
