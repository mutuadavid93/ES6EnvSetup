'use strict';

System.register(['./test.js'], function (_export, _context) {
  "use strict";

  var myObject;
  return {
    setters: [function (_testJs) {
      myObject = _testJs.default;
    }],
    execute: function () {

      console.log(myObject.userName());
    }
  };
});