
const counter = (array, value) => {
  console.log(array, value);
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
  return numbers.reduce((acum, number, index) => {
    acum = acum.concat(counter(numbers, number));
    numbers.splice(index, 1);
    return acum;
  }, []).join('');
};

module.exports = { lookAndSay, counter };
