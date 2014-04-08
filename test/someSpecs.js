'use strict';

/* jasmine specsgo here */
describe('Some tests', function() {
  it('should pass', function() {
    var testVar = 15
    expect(testVar).toEqual(15);
  });

  it('should correctly recognize someFile.js functions', function(){
  	expect(someFunction()).toEqual(1);
  })
});
