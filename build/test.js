'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var myObject;
    return {
        setters: [],
        execute: function () {
            _export('default', myObject = {
                name: 'Street Money Munaa',
                userName: function userName() {
                    return this.name;
                }
            });

            _export('default', myObject);
        }
    };
});