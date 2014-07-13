// declare requirejs dependencies
requirejs.config({
    "baseUrl": "js",
    "paths": {
		"jquery": "lib/jquery-min",
		"backbone": "lib/backbone-min",
		"underscore": "lib/lodash.underscore.min"
    },
	shim : {
		underscore : {
			exports: "_"
		},
		backbone : {
			deps: ['jquery', "underscore"],
			exports: "Backbone"
		}
	}
});

requirejs(['app'], function(App){
	App.initialize();
});

