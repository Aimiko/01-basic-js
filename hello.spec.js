const hello = require('./hello')

test ('hello',()=>{
  //Arrange
  let name = 'Ice'
  //Act
  let result = hello(name)
  //Ascert
  expect(result).toBe('Hello Ice')
})
