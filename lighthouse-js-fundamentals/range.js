const range = (start, end, step) => {
  let rangeArray = [];
  if (start === null || end === null || step === null || start > end || step < 0) {
    rangeArray = [];
  } else {
    for (let i = start; i <= end; i = i + step) {
      rangeArray.push(i);
    };
  };
  return rangeArray;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));