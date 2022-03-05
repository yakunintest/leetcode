function mergeSortedArray(a, b) {
  const result = [];
  const currentPos = {
    a: 0,
    b: 0
  };
  while (currentPos.a < a.length || currentPos.b < b.length) {
    if (typeof a[currentPos.a] === 'undefined') {
      result.push(b[currentPos.b++]); // в начале не пиши этот иф
    } else if (a[currentPos.a] > b[currentPos.b]) {
      result.push(b[currentPos.b++]);
    } else {
      result.push(a[currentPos.a++]);
    }
  }
  return result;
}

console.log(mergeSortedArray([1, 2, 3, 5, 9], [4, 6, 7, 8]));
console.log(mergeSortedArray([1, 2, 3], [1, 1, 1, 1, 2, 3, 4, 5, 6]));
