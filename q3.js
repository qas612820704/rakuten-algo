const START = 0;
const END = 1;
/**
 * Insert a new interval into the intervals
 * @param {Interval []} intervals
 * @param {Interval} newInterval
 *
 * @returns {Interval []}
 *
 * @typedef {number []} Interval
 */
function insertInterval(intervals, newInterval) {
  let startMergingIndex = 0;
  while (startMergingIndex < intervals.length && intervals[startMergingIndex][END] <= newInterval[START])
    startMergingIndex++;

  let endMergingIndex = startMergingIndex + 1;
  while (endMergingIndex < intervals.length && intervals[endMergingIndex][START] <= newInterval[END])
    endMergingIndex++;
  endMergingIndex -= 1;

  const toRemoveIntervalsCnt = endMergingIndex - startMergingIndex + 1;
  if (toRemoveIntervalsCnt > 0) {
    newInterval[START] = Math.min(newInterval[START], intervals[startMergingIndex][START]);
    newInterval[END] = Math.max(newInterval[END], intervals[endMergingIndex][END]);
  }

  const resultIntervals = intervals.slice();
  resultIntervals.splice(startMergingIndex, toRemoveIntervalsCnt, newInterval);
  return resultIntervals;
}

// console.log(insertInterval([[1,3],[6,9]], [2,5]));
// console.log(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,9]));
