const x = [
  undefined,
  null,
  true,
  false,
  'foo',
  0,
  +0,
  0,
  '',
  '',
  '0',
  '17',
  [1, 2],
  new String('foo'),
  null,
  null,
  undefined,
  { foo: 'bar' },
  new String('foo'),
  0,
  0,
  'foo',
  [],
  NaN,
];

const xText = [
  `undefined`,
  `null`,
  `true`,
  `false`,
  `foo'`,
  `0`,
  `+0`,
  `0`,
  `''`,
  `''`,
  `'0'`,
  `'17'`,
  `[1, 2]`,
  `new String('foo')`,
  `null`,
  `null`,
  `undefined`,
  `{ foo: 'bar' }`,
  `new String('foo')`,
  `0`,
  `0`,
  `'foo'`,
  `[]`,
  `NaN`,
];

const y = [
  undefined,
  null,
  true,
  false,
  'foo',
  0,
  -0,
  false,
  false,
  0,
  0,
  17,
  '1,2',
  'foo',
  undefined,
  false,
  false,
  { foo: 'bar' },
  new String('foo'),
  null,
  NaN,
  NaN,
  [],
  NaN,
];

const yText = [
  `undefined`,
  `null`,
  `true`,
  `false`,
  `'foo'`,
  `0`,
  `-0`,
  `false`,
  `false`,
  `0`,
  `0`,
  `17`,
  `'1, 2'`,
  `'foo'`,
  `undefined`,
  `false`,
  `false`,
  `{ foo: 'bar' }`,
  `new String('foo')`,
  `null`,
  `NaN`,
  `NaN`,
  `[]`,
  `NaN`,
];

const parent = document.getElementById('samenessTable');

const fillTable = (x, y) => {
  for (let i = 0; i < x.length; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < 5; j++) {
      let td = document.createElement('td');
      switch (j) {
        case 0:
          td.innerHTML = `${xText[i]}`;
          break;
        case 1:
          td.innerHTML = `${yText[i]}`;
          break;
        case 2:
          if (x[i] == y[i]) {
            td.classList.add('true');
          } else {
            td.classList.add('false');
          }
          td.innerHTML = x[i] == y[i];
          break;
        case 3:
          if (x[i] === y[i]) {
            td.classList.add('true');
          } else {
            td.classList.add('false');
          }
          td.innerHTML = x[i] === y[i];
          break;
        case 4:
          if (Object.is(x[i], y[i])) {
            td.classList.add('true');
          } else {
            td.classList.add('false');
          }
          td.innerHTML = Object.is(x[i], y[i]);
          break;

        default:
          break;
      }

      tr.appendChild(td);
    }

    parent.appendChild(tr);
  }
};

fillTable(x, y);

console.log('1' + 2);
console.log(2 + '1');
console.log(2 + 2 + '1');
console.log(6 - '2');
console.log('6' / '2');
console.log(+true);
console.log(+'');
console.log(undefined + 1);
console.log(null + 1);
console.log('2' * '3');
console.log(7 / 0);
console.log(true + false);
