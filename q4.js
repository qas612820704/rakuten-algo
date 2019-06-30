/**
 * return true if word in borad
 *
 * @param {string[][]} board
 * @param {string} word
 *
 * @returns {boolen}
 */
function isWordInBoard(board, word) {
  const charAry = word.split('');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if(isWordInBoardStartAtIJ(board, charAry, i, j))
        return true;
    }
  }

  return false;
}

/**
 * return true if word in borad
 *
 * @param {string[][]} board
 * @param {string[]} word
 * @param {number} i
 * @param {number} j
 *
 * @returns {boolen}
 */
function isWordInBoardStartAtIJ(board, word, i, j) {
  if (word.length === 0) return true;

  if (word[0] !== board[i][j]) return false;

  const char = word.shift();

  board[i][j] = '*'; // '*' means the character is in use in this position

  if (i > 0 && isWordInBoardStartAtIJ(board, word, i - 1, j))
    return true;
  if (i < board.length - 1 && isWordInBoardStartAtIJ(board, word, i + 1, j))
    return true;
  if (j > 0 && isWordInBoardStartAtIJ(board, word, i, j - 1))
    return true;
  if (j < board[i].length - 1 && isWordInBoardStartAtIJ(board, word, i, j + 1))
    return true;

  word.unshift(char);
  board[i][j] = char;

  return false;
}

// console.log(
//   isWordInBoard(
//     [
//       ['A','B','C','E'],
//       ['S','F','C','S'],
//       ['A','D','E','E']
//     ],
//     'ABCCED',
//   ),
// );
// console.log(
//   isWordInBoard(
//     [
//       ['A','B','C','E'],
//       ['S','F','C','S'],
//       ['A','D','E','E']
//     ],
//     'SEE',
//   ),
// );
// console.log(
//   isWordInBoard(
//     [
//       ['A','B','C','E'],
//       ['S','F','C','S'],
//       ['A','D','E','E']
//     ],
//     'ABCB',
//   ),
// );
