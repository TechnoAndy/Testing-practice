const stringLength = require('./Task1')

it('length for Andy to be 6', () => {
  expect(stringLength('Andrea')).toBe(6);
})

it('throw Error', () => {
  expect(() => {stringLength('Andrea Diegaardt')}).toThrow();
})