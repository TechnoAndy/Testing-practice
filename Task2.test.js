const reverseString = require('./Task2')

test('expected reverse string to be for andrea', () => {
    //Arrange
    const str = 'aerdna';
    // Act 
    const reverseStr = reverseString(str);
    //Assert
    expect(reverseStr).toBe('andrea');
  });