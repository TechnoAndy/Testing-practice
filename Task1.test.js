const stringLength = require('./Task1');

test('length for Andy should be 4', () => {
  expect(stringLength('Andy')).toBe(4);
})

test('throw Error', () => {
  expect(() => {stringLength('Andrea Diegaardt')}).toThrow();
})