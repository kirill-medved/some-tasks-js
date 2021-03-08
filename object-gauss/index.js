const CALL_TIMES = 100;
const map = new Map();
// call and fill in one function
const callRandnTimesFillMap = (times) => {
  for (let i = 0; i < times; i++) {
    const number = randn_bm();
    if (map.has(number)) {
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, 1);
    }
  }
};

function randn_bm() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2) | 0;
}

callRandnTimesFillMap(CALL_TIMES);

const obj = Object.fromEntries(map.entries());
console.table(obj);

// ******************************************************
//
//                   M E T H O D 2
//
// ******************************************************
const map2 = new Map();
const callRandTimes = (times) => {
  const results = [];
  for (let i = 0; i < times; i++) {
    results.push(randn_bm());
  }
  return results;
};

const fillMap = (map, times) => {
  return callRandTimes(times).forEach((cur) => {
    if (map.has(cur)) {
      map.set(cur, map.get(cur) + 1);
    } else {
      map.set(cur, 1);
    }
  });
};

fillMap(map2, CALL_TIMES);
const obj2 = Object.fromEntries(map2.entries());
console.table(obj2);
