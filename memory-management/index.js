// function that leads to the stack overflow issue
// recursive function hasn't condition of exit
const brokeFn = (n) => {
  let step = n + brokeFn(n + 1);
  return step;
};

// fn connect to window and GC can't remove this fn
function doSomething() {
  console.log("I'm at window scope!");
}

// function that can affect memory leak issue​.
const intervalId = setInterval(function () {
  const bigObj = "GC can't delete me until delete interval";
  console.log(bigObj);
  doSomething();
}, 100);
