
const counter = (array, value) => {
  let acum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      acum++;
    } else {
      break;
    }
  }
  return [acum, value];
};

const lookAndSay = input => {
  const numbers = input.split('');
  let count = 0;
  return numbers.reduce((acum, number) => {
    acum = acum.concat(counter(numbers, number));
    numbers.shift();
    return acum;
  }, []).join('');
};

module.exports = lookAndSay;
