
const counter = (array, value) => {
  let acum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      acum++;
    } else {
      break;
    }
  }
  return acum;
};

const lookAndSay = input => {
  const numbers = input.split('');
  let copyNumbers = [...numbers];
  return numbers.reduce((acum, number, index) => {
    const count = counter(copyNumbers, number);
    if (!count) acum = acum.concat([]);
    else acum = acum.concat([count, number]);
    copyNumbers.splice(0, count);
    return acum;
  }, []).join('');
};

module.exports = { lookAndSay, counter };
