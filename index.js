const { lookAndSay } = require('./lookAndSay');

const sequence = (seed, count) => {
  let str = [seed.toString()];
  for (var i = 0; i < count - 1; i++) {
    str = str.concat(lookAndSay(str[i]));
  }
  return str.join(', ');
};

module.exports = sequence;
