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

// Load the main app module to start the app
requirejs(["main"]);
