const stringLength = require('./Task1')

it('expected length for Andrea to be 6', () => {
  expect(stringLength('Andrea')).toBe(6);
})

it('expected to throw Error', () => {
  expect(() => {stringLength('AndreaDiegaardt')}).toThrow();
})