// question 1

// what is the result of foobar

const foobar = [];
const today = new Date();

for (let i = 0 ; i < 30 ; i++) {
  today.setDate(today.getDate() + 1);
  foobar.push(today);
}

console.log(foobar);
