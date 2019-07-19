const { lookAndSay, counter } = require('../lookAndSay');

describe('counter', () => {

  it('[1,1,2], 1 must return [2, 1]', () => {
    expect(counter([1, 1, 2], 1)).toEqual([2, 1]);
  });

  it('[2,1,2], 2 must return [2, 1]', () => {
    expect(counter([2, 1, 2], 2)).toEqual([1, 2]);
  });
});

describe('sequence', () => {
  it('1 is read off as "one 1" or 11', () => {
    const input = '1';
    const expected = '11';
    const result = lookAndSay(input);
    expect(result).toEqual(expected);
  });

  it('11 is read off as "two 1s" or 21', () => {
    const input = '11';
    const expected = '21';
    const result = lookAndSay(input);
    expect(result).toEqual(expected);
  });

  it.only('21 is read off as "one 2, then one 1" or 1211', () => {
    const input = '21';
    const expected = '1211';
    const result = lookAndSay(input);
    expect(result).toEqual(expected);
  });

  it('111221 is read off as "three 1s, two 2s, then one 1" or 312211', () => {
    const input = '111221';
    const expected = '312211';
    const result = lookAndSay(input);
    expect(result).toEqual(expected);
  });
});