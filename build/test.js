'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var myObject;
  return {
    setters: [],
    execute: function () {
      _export('myObject', myObject = {
        name: 'Street Money Mutua',
        userName: function userName() {
          return this.name;
        }
      });

      _export('myObject', myObject);
    }
  };
});